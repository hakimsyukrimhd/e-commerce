const { User } = require("../models");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const existingUser = await User.findOne({ where: { [Op.or]: [{ username }, { email }] } });

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({
          success: false,
          message: "Username is already used",
          data: {},
        });
      }

      if (existingUser.email === email) {
        return res.status(400).json({
          success: false,
          message: "Email is already used",
          data: {},
        });
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, username, email, password: hashedPassword });

    res.status(201).json({
      success: true,
      message: "Data has been created",
      data: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Data must be complete",
        data: {},
      });
    }

    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Cannot find your account",
        data: {},
      });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({
        succes: false,
        message: "Incorrect password",
        data: {},
      });
    }

    const userData = {
      id: user.id,
      name: user.name,
      username: user.username,
      role: user.role,
    };

    const expiredToken = {
      expiresIn: "1h",
    };

    const accessToken = jwt.sign(userData, process.env.ACCESS_TOKEN_SECRET, expiredToken);

    res.status(200).json({
      success: true,
      message: "Login Succesfull",
      AccessToken: accessToken,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      data: {},
    });
  }
};

module.exports = { register, login };
