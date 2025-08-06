const { Category } = require("../models");

const allCat = async (req, res) => {
  try {
    const cat = await Category.findAll({ attributes: ["id", "name"] });

    res.status(200).json({
      success: true,
      message: "Data Found",
      data: cat,
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

const addCat = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Fill the field",
        data: {},
      });
    }

    const cat = await Category.create({ name });

    res.status(200).json({
      success: true,
      message: "Data has been added",
      data: cat,
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

const updateCat = async (req, res) => {
  try {
    const { id } = req.params;

    const cat = await Category.findByPk(id);

    if (!cat) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: {},
      });
    }

    const { name } = req.body;

    const updatedCat = await Category.update({ name }, { where: { id } });

    res.status(200).json({
      success: true,
      message: "Data has been updated",
      data: updatedCat,
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

const deleteCat = async (req, res) => {
  try {
    const { id } = req.params;

    const cat = await Category.findByPk(id);

    if (!cat) {
      return res.status(404).json({
        success: false,
        message: "Data not found",
        data: {},
      });
    }

    await Category.destroy({ where: { id } });

    res.status(200).json({
      success: true,
      message: "Data has been deleted",
      data: {},
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
module.exports = { allCat, addCat, updateCat, deleteCat };
