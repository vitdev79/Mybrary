const mangoose = require("mongoose");

const authorsSchema = new mangoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mangoose.model("Author", authorsSchema);
