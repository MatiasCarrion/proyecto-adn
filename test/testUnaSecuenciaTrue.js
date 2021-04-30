// este test valida que el metodo de contador de secuencias devuelva false si encuentra hasta 1 secuencias.

const hM = require('../hayMutacion');

let resultado, esperado;
const arr = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGTCA","TCACTG"]
resultado = hM.qSecuencias(arr)

esperado = false;

exports.resultado = resultado;
exports.esperado = esperado;