// este test valida que pasada una cadena sin mutacion, efectivamente devuelva false.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]
resultado = hM.hasMutation(arr)

esperado = false;

exports.resultado = resultado;
exports.esperado = esperado;