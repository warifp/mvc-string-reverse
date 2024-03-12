// src/models/stringModel.js

function reverse(inputString) {
  return inputString.split("").reverse().join("");
}

module.exports = { reverse };
