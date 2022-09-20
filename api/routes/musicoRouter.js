const musicoRouter = require('express').Router();
const Musico = require('../models/Musico');
const { verifyToken } = require('../utils/middleware');

//criptomonedasRouter.use(verifyToken);

const {
    getMusicos, 
    getMusico, 
    createMusico, 
    deleteMusico, 
    updateMusico,
} = require('../controllers/musicoController');

musicoRouter.get('/', (req, res, next) => {
    
    getMusicos().then((personas) => {
        res.json(personas);
    })
    .catch((err) => {
        next(err);
    });
});

musicoRouter.get('/:id', (req, res) => {
    const id = req.params.id;

    getMusico(id)
    .then((persona) => {
        persona ? res.status(200).json(persona).end() : res.status(404).end();
    })
});

musicoRouter.post('/', (req, res) => {

    const body = req.body;

    console.log("MusicoRouter POST: ");
    console.log(body);

    createMusico(body)
    .then((nuevaCriptomoneda) => {
        nuevaCriptomoneda 
        ? res.status(201).json(nuevaCriptomoneda).end()
        :res.status(400).end();
    });
});

musicoRouter.delete('/:id', (req, res) => {
    const id = req.params.id;

    deleteMusico(id)
    .then((respuesta) => {
        respuesta
        ? res.status(200).json({ ok: true, error: "Musico eliminado"}).end()
        : res
            .status(200)
            .json({ ok: false, error: "No existe Musico con ese id"});
    })     
});

musicoRouter.put('/', (req, res) => {
    
    const body = req.body;

    updateMusico(body)
    .then((respuesta) => {
        respuesta ? res.status(200).json({ ok: true, error: "Musico actualizado"}).end()
        : res
            .status(200)
            .json({ ok: false, error: "No existe Musico con ese id"});
    })
        
});




module.exports = musicoRouter;