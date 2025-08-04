const express = require("express");
const app = express();
const PORT = 3000;
const homePage = require("./routes/homepage");

app.use(express.json());

// main route

app.use("/", homePage);

app.listen(PORT, () => {
  console.log(`This app running on PORT ${PORT}`);
});
  