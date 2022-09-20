import axios from "axios";

const altaMusico = (data) => {

    console.log("MUSICO SERVICE");
    console.log(data);

    return axios
    .post(`http://localhost:3000/api/musico`, {
        contraseña: data.contraseña,
        email: data.email,
        nombre: data.nombre,
        apellido: data.apellido,
        ubicacion: data.ubicacion,
        instrumento: data.instrumento,
        fechaDeNacimiento: data.fechaDeNacimiento,
        buscandoBanda: data.buscandoBanda.toString(),
        fotoDePerfil: data.fotoDePerfil,
        informacionAdicional: data.informacionAdicional,
        bloqueado: data.bloqueado.toString(),
        esRepresentante: data.esRepresentante.toString()
    }, 
    {
        /*headers: {
            'Authorization':'Bearer '+(localStorage.getItem("token")).toString()
        }*/
    })
    .then((response => {
        return response.data;
    }));
};

const modificacionMusico = (data) => {

    console.log(data)

    return axios
    .put(`http://localhost:3000/api/musico/`, {
        contraseña: data.contraseña,
        email: data.email,
        nombre: data.nombre,
        apellido: data.apellido,
        ubicacion: data.ubicacion,
        instrumento: data.instrumento,
        fechaDeNacimiento: data.fechaDeNacimiento,
        buscandoBanda: data.buscandoBanda.toString(),
        fotoDePerfil: data.fotoDePerfil,
        informacionAdicional: data.informacionAdicional,
        bloqueado: data.bloqueado.toString(),
        esRepresentante: data.esRepresentante.toString(),
        id: data.id
    },  
    {
        headers: {
            'Authorization':'Bearer '+(localStorage.getItem("token")).toString()
        }
    })

};

const bajaMusico = (data) => {

    console.log(data)

    return axios
    .delete(`http://localhost:3000/api/musico/`+data.id,  
    {
        headers: {
            'Authorization':'Bearer '+(localStorage.getItem("token")).toString()
        }
    })

};

const MusicoService = {
    altaMusico,
    modificacionMusico,
    bajaMusico
};

export default MusicoService;