// Validamos que si nuestra cadena solo posee caracteres "ACTG" devuelva true.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
resultado = hM.inATCG(arr)

esperado = true;

exports.resultado = resultado;
exports.esperado = esperado;