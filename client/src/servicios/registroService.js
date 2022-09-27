import axios from "axios";

const crearUsuario = (data) => {

    return axios
    .post(`http://localhost:3000/api/users`, {
        email: data.email,
        contraseña: data.contraseña
    })
    .then((response => {
        return response.data;
    }));

}

const RegistroService = {
    crearUsuario,
  };

export default RegistroService;