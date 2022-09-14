const Musico = require('../models/Musico');


const getMusicos = () => {
    return Musico.find({});
};

const getMusico = (id) => {    
    return Musico.findById(id);
};

const deleteMusico = (id) => {
    return Musico.findByIdAndRemove(id);   
};

const createMusico = (data) => {

    const { contraseña, email, nombre, apellido, ubicacion, instrumento, fechaDeNacimiento, buscandoBanda, fotoDePerfil, informacionAdicional, bloqueado, esRepresentante } = data;

    if(contraseña && email && nombre && apellido && ubicacion && instrumento && fechaDeNacimiento && buscandoBanda && fotoDePerfil && informacionAdicional && bloqueado && esRepresentante) {
        const nuevoMusico = new Musico({
            contraseña,
            email,
            nombre,
            apellido,
            ubicacion,
            instrumento,
            fechaDeNacimiento,
            buscandoBanda,
            fotoDePerfil,
            informacionAdicional,
            bloqueado,
            esRepresentante            
        });

        return nuevoMusico.save();
    } 

    return null;
    
}

const updateMusico = (musico) => {

    return Musico.findByIdAndUpdate(musico.id, musico)

};

module.exports = {
    getMusicos,
    getMusico,
    deleteMusico,
    createMusico,
    updateMusico,
}