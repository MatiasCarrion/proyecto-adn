// HASMUTATION:
// Debe recibir como parámetro un array de Strings que representan cada fila de una tabla
// de (NxN) con la secuencia del ADN. Las letras de los Strings solo pueden ser: (A,T,C,G), las
// cuales representa cada base nitrogenada del ADN. Debes validar que sólo puedas recibir bases nitrogenadas válidas.


// funcion principal
function hasMutation(array) {

    // Si nuestras validaciones dan ok(Dimension NxN, compuesta por 'ACTG', más de 1 secuencia), hay mutacion.
    if (isNxN(array) && inATCG(array) && qSecuencias(array)) {
        return true;
    }
    else {
        return false;
    }
}

//funcion que valida que el array sea de dimensión NxN. retorna un booleano.
function isNxN(array) {
    const filas = array.length;

    // itero cada fila de la matriz. Cuento sus elementos y 
    // veo que sea igual a la cantidad de filas para cumplir con NxN
    for (let i = 0; i < filas; i++) {
        if (filas != array[i].length) {
            return false
        }
    }
    return true;
}

//funcion que valida si las cadenas contienen solo ATCG. retorna un booleano.

function inATCG(array) {
    // genero la matriz
    const matriz = array.map((element) => element.split(''));

    // funcion auxiliar para el metodo "some" 
    const atcg = (currentValue) =>
        'atcg'.search(currentValue.toLowerCase()) == -1;

    // bandera para cortar el for
    let flag = false;

    // Recorro cada fila en busqueda de algo distinto a "ACTG", si lo encuentro, corto el ciclo y devuelvo false.
    for (let i = 0; i < matriz[0].length; i++) {
        flag = matriz[i].some(atcg);
        if (flag == true) {
            return !flag;
        }
    };
    return !flag;
}

// vamos a validar la cantidad de secuencias.
// Sabrás si existe una mutación si se encuentra más de una secuencia de cuatro letras iguales,
// de forma oblicua (diagonal), horizontal o vertical.
function qSecuencias(array) {
    const matriz = array.map((element) => element.split(''));
    let secuencias = 0;
    let n = matriz[0].length - 1;
    // recorro la matriz de arriba hacia abajo
    for (let i = 0; i <= n; i++) {
        // y también la recorro de izquierda a derecha.
        for (let j = 0; j <= n; j++) {
            if (j <= (n - 3)) {
                // validamos si los 4 elementos de la misma fila son iguales
                if (
                    matriz[i][j].toLowerCase() === matriz[i][j + 1].toLowerCase() &&
                    matriz[i][j + 1].toLowerCase() === matriz[i][j + 2].toLowerCase() &&
                    matriz[i][j + 2].toLowerCase() === matriz[i][j + 3].toLowerCase()
                ) {
                    secuencias += 1;
                }
            }

            // Validamos si sumamos diagonal descendente o ascendente y columna descendente o ascendente.
            if (i <= n - 3) {
                // validamos si los 4 elementos de la diagonal descendente son iguales
                if (j <= n - 3) {
                    if (
                        matriz[i][j].toLowerCase() === matriz[i + 1][j + 1].toLowerCase() &&
                        matriz[i + 1][j + 1].toLowerCase() === matriz[i + 2][j + 2].toLowerCase() &&
                        matriz[i + 2][j + 2].toLowerCase() === matriz[i + 3][j + 3].toLowerCase()
                    ) {
                        secuencias += 1;
                    }
                }
                // validamos si los 4 elementos de la misma columna son iguales
                if (
                    matriz[i][j].toLowerCase() === matriz[i + 1][j].toLowerCase() &&
                    matriz[i + 1][j].toLowerCase() === matriz[i + 2][j].toLowerCase() &&
                    matriz[i + 2][j].toLowerCase() === matriz[i + 3][j].toLowerCase()
                ) {
                    secuencias += 1;
                }
            }
            // validamos si los 4 elementos de la diagonal ascendente son iguales
            else {
                if (j <= n - 3) {
                    if (
                        matriz[i][j].toLowerCase() === matriz[i - 1][j + 1].toLowerCase() &&
                        matriz[i - 1][j + 1].toLowerCase() === matriz[i - 2][j + 2].toLowerCase() &&
                        matriz[i - 2][j + 2].toLowerCase() === matriz[i - 3][j + 3].toLowerCase()
                    ) {
                        secuencias += 1;
                    }
                }
            }
            // una vez realizadas todas las comprobaciones, verificamos que no haya más de dos secuencias.
            if (secuencias > 1) {
                return true;
            }
        }
    }
    // si no retorne true, es porque no encontré más de 1 secuencia, retorno false.
    return false;
}


exports.hasMutation = hasMutation;
exports.isNxN = isNxN;
exports.inATCG = inATCG;
exports.qSecuencias = qSecuencias;
