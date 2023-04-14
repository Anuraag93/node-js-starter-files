const express = require("express");
const cors = require("cors");

const { connect } = require("./db/config");
const Router = require("./routes/routes");
require("dotenv").config();

const app = express();

connect();

app.use(express.json());

app.use(cors());

app.use("/", Router);

app.listen(process.env.PORT, () =>
  console.log(`Server started on port ${process.env.PORT}`)
);
