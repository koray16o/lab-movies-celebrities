const { Schema, model } = require('mongoose');
const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    timestamps: true
  }
);

const celebrityModel = model('Celebrity', celebritySchema);

module.exports = celebrityModel;
