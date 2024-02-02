const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./data/database");
const routes_user = require("./routes/user");
require('dotenv').config();


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static("public"));

app.use(routes_user);

sequelize
  .sync()
  .then((res) => {
    console.log(res);
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => console.error(err));
