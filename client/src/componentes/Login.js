import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import LoginService from "../servicios/loginService";
import logoMusicBook from '../assets/img/logoMusicBook.png';


const Login = () => {

    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")

    const navigate = useNavigate();

    const state  = {
        email: email,
        contraseña: contraseña,
    };

    const usrn = (e) => {
        setEmail(e.target.value);
    }

    const psswd = (e) => {
        setContraseña(e.target.value);
    }

    const obtenerToken = async (e) => {
        e.preventDefault();

        try {
            await LoginService.getToken(state).then(
              (res) => {
                localStorage.setItem("token", res.token);
                navigate("/home");
              },
              (error) => {
                alert(error.response.data.message)
              }
            );
          } catch (err) {
            console.log(err);
          }

}


    
        return(
            <>
                <table className='table table-dark table-hover mt-3'>
                
                    <div className="container">
                        <div className="row">
                            <div className="panel panel-primary text-center">
                                
                                <br></br>
                                
                                <div className="panel-body" style={{ display: "flex", justifyContent: 'center' }}>
    
    
                                    <form >
                                        <h3>¡Te damos la bienvenida a MusicBook!</h3>
    
                                        <br></br>

                                        <img src={logoMusicBook}/>

                                        <br></br>
    
                                        <div className="mb-3">
                                        <label>Usuario</label>
                                        
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Ingrese email"
                                            style={{width: "80vh", height:"4vh", textAlign:"center", justifyContent:"center", alignItems: "center"}}
                                            name="email"
                                            value={email}
                                            onChange={usrn}
                                        />
                                        
                                        </div>
    
                                        <div className="mb-3">
                                        <label>Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Ingrese contraseña"
                                            style={{width: "80vh", height:"4vh", textAlign:"center", justifyContent:"center", alignItems: "center"}}
                                            name="contraseña"
                                            value={contraseña}
                                            onChange={psswd}
                                        />
                                        </div>
    
                                        <div>
                                            
                                        </div>
                                        
                                        <div>
                                            <br></br><br></br><br></br><br></br><br></br><br></br>
                                            
                                            
                                            <button type="submit" className="btn btn-primary" style={{width: "30vh"}} onClick={obtenerToken}>
                                                Iniciar Sesión
                                            </button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            
                                            
                                            <button className="btn btn-success" style={{width: "30vh"}}>
                                                <NavLink to="/registro" style={{ textDecoration: 'none', color: 'inherit' }}>Registro</NavLink>
                                            </button>
                                        </div>
                                        
                                    
                                    </form>

                                            
                                
                                </div>
    
                                <br></br>
    
                            </div>
                        </div>
                    </div>
                    
                </table>
            </>
        )
    
    
}

export default Login;