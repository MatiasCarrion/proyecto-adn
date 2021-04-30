const express = require('express');
const router = express.Router();
const hM = require('../hayMutacion');


// acceso a la base de datos
const Cadena = require('../models/cadena')

//seteamos variables para las estadisticas.
let countMutation = 0;
let countNoMutation = 0;
let ratio = 0;


// página de inicio
router.get('/', (req, res) => {

    res.render("index", {titulo : "Página de inicio"})
})

// página de estadisticas
router.get('/stats', async (req, res) => {
    
    // Me traigo la info de la bbdd
    const datos = await Cadena.find();

    // itero la info para contar.
    datos.forEach(cadena => {
        if (cadena.isMutation) {
            countMutation++
        }
        else {
            countNoMutation++
        }
    })

    //calculo ratio
    ratio = countMutation/countNoMutation;

    // armo JSON
    let json = JSON.stringify({
        "count_mutations": countMutation,
        "count_no_mutation": countNoMutation,
        "ratio": ratio.toFixed(1)
    })

    // renderizo mi pag stats
    res.render("stats", {titulo : "Estadísticas", json})

    // seteo a 0
    countNoMutation = 0;
    countMutation = 0;
    ratio = 0;
})



router.post('/mutation', async (req, res) => {
    const body = req.body.dna 
    /* console.log(body) */
    const resultado = await hM.hasMutation(body)
    
    if (resultado){
        res.sendStatus(200)
        estado = true;
    }
    else {
        res.sendStatus(403)
        estado = false;
    }

    // subiendo petición a bbdd
    try {
        const Adn = new Cadena({dna: body, isMutation: estado})
        await Adn.save()
        console.log("Agregado correctamente..")
    } catch (error) {
        console.log('error', error)
    }

})

module.exports = router;