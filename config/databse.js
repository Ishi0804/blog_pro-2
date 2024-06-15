const mongoose = require("mongoose");
const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ishadixit1997:12345@cluster0.quxobin.mongodb.net/"
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
