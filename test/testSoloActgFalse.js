// Validamos que si nuestra cadena posee caracteres distintos a "ACTG" devuelva false.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTWTGT","AGAAGG","CCCCTA","TCACTG"]
resultado = hM.inATCG(arr)

esperado = false;

exports.resultado = resultado;
exports.esperado = esperado;