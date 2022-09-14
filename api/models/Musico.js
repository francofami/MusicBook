const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const musicoSchema = new Schema({
    contraseña: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
    },
    nombre: {
        type: String,
        required:true,
    },
    apellido: {
        type: String,
        required:true,
    },
    ubicacion: {
        type: Object,
        required:true,
    },
    instrumento: {
        type: String,
        required: true,
    },
    fechaDeNacimiento: {
        type: String,
        required: true,
    },
    buscandoBanda: {
        type: Boolean,
        required: true,
    },
    fotoDePerfil: {
        type: Object,
        required: true,
    },
    informacionAdicional: {
        type: Object,
        required: true,
    },
    bloqueado: {
        type: Boolean,
        required: true,
    },
    esRepresentante: {
        type: Boolean,
        required: true,
    }

});

musicoSchema.set('toJSON', {
    transform:((document, musicoToJSON) => {
        musicoToJSON.id = musicoToJSON._id.toString();
        delete musicoToJSON._id;
        delete musicoToJSON.__v;
    })
})

module.exports = model('Musico', musicoSchema);