const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const giftedSchema = new Schema(
  {
      name: {
        type: String,
        required: [true, "Name of person you are gifting is required."]
      },
      relationship: {
        type: String,
      },
      interest: [
        { type: String }
      ],
      priceRange: {
        type: String,
        required: [true, "Need price range for gift."]
      },
      giftLink: {
        type: String,
        required: [true, "Need link to purchase gift."]
      },
      birthday: {
        type: String
      },
      owner: {
        type: Schema.Types.ObjectId,
      }
  },

  {
    timestamps: true
  }

);

const Gifted = mongoose.model("Gift", giftedSchema);

module.exports = Gifted;
