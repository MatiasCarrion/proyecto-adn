// este test valida que pasada una cadena con mutacion, efectivamente devuelva true.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
resultado = hM.hasMutation(arr)

esperado = true;

exports.resultado = resultado;
exports.esperado = esperado;