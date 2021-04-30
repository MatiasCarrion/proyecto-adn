const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creamos el mismo esquema que posee nuestra tabla de datos para poder gestionar conexion y operaciones correctamente.
const cadenaSchema = new Schema({
  dna:  [],
  isMutation: Boolean
},{versionKey: false});

// Crear el modelo con el que nos conectaremos.
const Cadena = mongoose.model('Cadena', cadenaSchema);

module.exports = Cadena;