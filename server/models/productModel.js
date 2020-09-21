const mongoose = require("mongoose");

const product = mongoose.Schema(
  {
    productId: {
      type: String,
    },
    userId: {
      type: String,
    },
    category: {
      type: String,
    },
    productName: {
      type: String,
    },
    quantity: {
      type: Number,
    },   
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", product);
