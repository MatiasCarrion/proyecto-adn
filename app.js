// app.js
const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
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

app.listen(port, () => {
    console.log('Escuchando en puerto', port)
})