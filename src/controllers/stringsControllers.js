// src/controllers/stringController.js

const stringModel = require("../models/stringModel");
const stringView = require("../views/stringView");

function reverseString(inputString) {
  const reversed = stringModel.reverse(inputString);
  stringView.display(reversed);
}

module.exports = { reverseString };
