const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cadenaSchema = new Schema({
  dna:  [],
  isMutation: Boolean
});

// Crear el modelo
const Cadena = mongoose.model('Cadena', cadenaSchema);

module.exports = Cadena;