import axios from "axios";

const getToken = (data) => {

    return axios
    .post(`http://localhost:3000/api/login`, {
            email: data.email,
            contraseña: data.contraseña  
    })
    .then((response => {
        return response.data;
    }));

};

const LoginService = {
    getToken,
  };

export default LoginService;