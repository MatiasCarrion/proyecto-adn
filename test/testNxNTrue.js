// validamos que si el array enviado es de NxN devuelva true.


const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
resultado = hM.isNxN(arr)

esperado = true;

exports.resultado = resultado;
exports.esperado = esperado;