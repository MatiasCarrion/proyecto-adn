// este test valida que el metodo de contador de secuencias devuelva true si encuentra más de una.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
resultado = hM.qSecuencias(arr)

esperado = true;

exports.resultado = resultado;
exports.esperado = esperado;