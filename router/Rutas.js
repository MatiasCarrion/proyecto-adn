const express = require('express');
const router = express.Router();

// página de inicio
router.get('/', (req, res) => {

    res.render("index", {titulo : "Página de inicio"})
})

// página de stats
// router.get('/Stats', (req, res) => {

//     res.render("stats", {titulo : "Estadísticas"})
// })

// página de mutacion
router.get('/Mutacion', (req, res) => {

    res.render("mutation", {titulo : "Validación de mutaciones"})
})


// página de error
// router.get('/404', (req, res) => {
//     res.render("404", {
//         titulo: "Página de error",
//         descripcion: "Error"})
// })

module.exports = router;