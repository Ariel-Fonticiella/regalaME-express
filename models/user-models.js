const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const userSchema = new Schema(
  {
      fullName: {
          type: String,
          required: [true, 'Please tell us your name']
      },
      avatar: {
        type: String,
        default: ""
      },
      email: {
        type: String,
        match:[/.+@.+/, "Emails need an @ sign."]
      },
      username: {
          type: String,
          required: [true, 'Username is required']
      },
      encryptedPassword: {
          type: String,
          required: [true, 'Encrypted password is empty']
      }

  },

  {
      timestamps: true
  }
);

const User = mongoose.model("User", userSchema);


module.exports = User;
