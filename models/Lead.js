const mongoose = require('mongoose');
const leadSchema = mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mensaje: {
    type: String,
    required: true,
  }
});

const Lead = mongoose.model("Lead", leadSchema);
module.exports = Lead;