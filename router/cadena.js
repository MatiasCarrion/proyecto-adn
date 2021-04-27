const express = require('express');
const router = express.Router();

const Cadena = require('../models/cadena')

router.get('/Stats', async (req, res) => {
    try {
        const arrayDNA = await Cadena.find();
        console.log(arrayDNA)
        res.status(404).send("Welcome to API REST")
        // res.render("stats", {
        //     array: arrayDNA,
        //     titulo : "Estadísticas"
        // })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;