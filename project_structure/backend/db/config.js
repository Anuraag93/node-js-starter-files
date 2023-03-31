const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect failure", error);
  }
}

module.exports = { connect };
