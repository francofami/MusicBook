const musicoRouter = require('express').Router();
const Musico = require('../models/Musico');
const { verifyToken } = require('../utils/middleware');
const bcrypt = require('bcrypt');

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

musicoRouter.post('/', async(req, res, next) => {
    try {
        const body = req.body;
        const saltRounds = 10;
        let flagUsuarioExistente = false;

        console.log("BODY: " + body)

        await Musico.find({})
        .then((musicos) => {
            musicos.forEach(musico => {
                if(musico.email == body.email) {
                    flagUsuarioExistente = true;
                }
            });
        })

        if(body.contraseña.length < 6 || body.contraseña.length > 30) {
            next({name:"validationError", message:"La contraseña debe tener entre 6 y 30 caracteres"});
        } else if (flagUsuarioExistente) {
            next({name:"validationError", message:"El usuario ya existe"});
        } else {
            body.contraseña = await bcrypt.hash(body.contraseña, saltRounds);

            createMusico(body)
            .then((nuevaCriptomoneda) => {
                nuevaCriptomoneda 
                ? res.status(201).json(nuevaCriptomoneda).end()
                :res.status(400).end();
            });
        }
    } catch (error) {
        next(error);
    }
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