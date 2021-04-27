// app.js
const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(express.static(__dirname + "/public"));

//Rutas de la api
app.use('/', require('./router/Rutas'));
app.use('/Stats', require('./router/cadena'));


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


// BBDD

const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.0sde7.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Base de datos conectada!')) 
  .catch(error => console.log('Error de conexión:', error))


  