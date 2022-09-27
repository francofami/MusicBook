const loginRouter = require('express').Router();
const Musico = require('../models/Musico');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {SECRET} = require('../utils/config');

loginRouter.post("/", async(req, res, next) => {    
    try {
        const { email, contraseña } = req.body;

        const musico = await Musico.findOne({email});

         if (musico) {
            if(!await bcrypt.compare(contraseña, musico.contraseña)) {
                return next({
                    name:"validationError", 
                    message:"Contraseña incorrecta."
                });
            }
         } else {
            return next({
                name:"validationError", 
                message:"No existe usuario con dicho email."
            });
         }

         const musicoToken = {
            email: musico.email,
            id: musico._id,
         };

         const token = await jwt.sign(musicoToken, SECRET, {expiresIn:'1000s'});

         res.status(200).json({
            token,
            email,
         })


    } catch (error) {
        next(error);
    }
})

module.exports = loginRouter;