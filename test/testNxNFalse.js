// validamos que si el array enviado no es de NxN devuelva false.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TT","AGAAGG","CCCCTA","TCACTG"]
resultado = hM.isNxN(arr)

esperado = false;

exports.resultado = resultado;
exports.esperado = esperado;