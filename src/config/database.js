const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://abhijeeto7:Mgisiu9snRhh2JPE@sendinquiry.yvjou.mongodb.net/devChat"
  );
};

module.exports = connectDB;
