// app.js

//declaramos nuestros requires
const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const testServTrue = require('./test/testGeneralTrue');
const testServFalse = require('./test/testGeneralFalse');
const testNxNTrue = require('./test/testNxNTrue');
const testNxNFalse = require('./test/testNxNFalse');
const testActgTrue = require('./test/testSoloActgTrue');
const testActgFalse = require('./test/testSoloActgTrue');
const testUnaSecTrue = require('./test/testUnaSecuenciaTrue');
const testMasUnaSecFalse = require('./test/testMasUnaSecuenciaFalse');

// TEST AUTOMATICOS

// Validando cadena con mutacion
if ( testServTrue.resultado !== testServTrue.esperado ) {
    throw new Error( `${ testServTrue.resultado } es distinto de ${ testServTrue.esperado }` )
}
else {
console.log( '¡Test OK (Validación de cadena con mutación)!' )
}

// Validando cadena sin mutacion
if ( testServFalse.resultado !== testServFalse.esperado ) {
    throw new Error( `${ testServFalse.resultado } es distinto de ${ testServFalse.esperado }` )
}
else {
console.log( '¡Test OK (Validación de cadena sin mutación)!' )
}

// Validando cadena de n fiilas por n columnas
if ( testNxNTrue.resultado !== testNxNTrue.esperado ) {
    throw new Error( `${ testNxNTrue.resultado } es distinto de ${ testNxNTrue.esperado }` )
}
else {
console.log( '¡Test OK (Validacion de cadena que cumple N filas por N columnas)!' )
}

// Validando cadena que no cumpla con n fiilas por n columnas
if ( testNxNFalse.resultado !== testNxNFalse.esperado ) {
    throw new Error( `${ testNxNFalse.resultado } es distinto de ${ testNxNFalse.esperado }` )
}
else {
console.log( '¡Test OK (Validacion de cadena que no cumple con N filas por N columnas)!' )
}

// Validando que las cadenas solo contengan letras ACTG
if ( testActgTrue.resultado !== testActgTrue.esperado ) {
    throw new Error( `${ testActgTrue.resultado } es distinto de ${ testActgTrue.esperado }` )
}
else {
console.log( '¡Test OK (Validacion que las cadenas solo contengan letras ACTG)!' )
}

// Validando que las cadenas solo contengan letras ACTG
if ( testActgFalse.resultado !== testActgFalse.esperado ) {
    throw new Error( `${ testActgFalse.resultado } es distinto de ${ testActgFalse.esperado }` )
}
else {
console.log( '¡Test OK (Validacion de que detecta otras letras distintas de ACTG)!' )
}

// Validando que permita solo una cadena e indique que no hay mutacion
if ( testUnaSecTrue.resultado !== testUnaSecTrue.esperado ) {
    throw new Error( `${ testUnaSecTrue.resultado } es distinto de ${ testUnaSecTrue.esperado }` )
}
else {
console.log( '¡Test OK (Validando que permita solo una cadena e indique que no hay mutacion)!' )
}

// Validando que permita con más de una cadena de repeticiones ya indique true
if ( testMasUnaSecFalse.resultado !== testMasUnaSecFalse.esperado ) {
    throw new Error( `${ testMasUnaSecFalse.resultado } es distinto de ${ testMasUnaSecFalse.esperado }` )
}
else {
console.log( '¡Test OK (Validando que permita con más de una cadena de repeticiones ya indique true)!' )
}

// FIN TEST AUTOMATICOS


//body parser
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware static
app.use(express.static(__dirname + "/public"));

//Rutas de la api
app.use('/', require('./router/Rutas'));


//si no encuentra la página que devuelva error 404
app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Error"
    })
})

// escuchando peticiones
app.listen(port, () => {
    console.log('Escuchando en puerto', port)
})


// BBDD

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.0sde7.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Base de datos conectada!')) 
  .catch(error => console.log('Error de conexión:', error))