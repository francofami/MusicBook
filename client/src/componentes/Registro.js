import React, {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import RegistroService from "../servicios/registroService";
import defaultProfilePicture from '../assets/img/pp.png';
import PruebaMapa from './PruebaMapa';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Registro = () => {

    const [email, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const [fotoDePerfil, setFotoDePerfil] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [ubicacion, setUbicacion] = useState([])
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState("")
    const [generoMusicalPreferido, setGeneroMusicalPreferido] = useState("")
    const [queInstrumentoTocas, setQueInstrumentoTocas] = useState("")
    const [estasBuscandoBanda, setEstasBuscandoBanda] = useState("")
    const [informacionAdicional, setInformacionAdicional] = useState("")

    const navigate = useNavigate();

    const state  = {
        email: email,
        password: password,

        fotoDePerfil: fotoDePerfil,
        nombre: nombre,
        apellido: apellido,
        ubicacion: ubicacion,
        fechaDeNacimiento: fechaDeNacimiento,
        generoMusicalPreferido: generoMusicalPreferido,
        queInstrumentoTocas: queInstrumentoTocas,
        estasBuscandoBanda: estasBuscandoBanda,
        informacionAdicional: informacionAdicional
    };


    const handlerEmail = (e) => {
        setUsername(e.target.value);
    }

    const handlerPassword = (e) => {
        setPassword(e.target.value);
    }

    const handlerPasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value);
    }

    const handlerFotoDePerfil = (e) => {
        setFotoDePerfil(e.target.value);
    }

    const handlerNombre = (e) => {
        setNombre(e.target.value);
    }

    const handlerApellido = (e) => {
        setApellido(e.target.value);
    }

    const handlerUbicacion = (e) => {
        
        let { latLng } = e;
        let lat = latLng.lat();
        let lng = latLng.lng();
        // console.log("Handler ubicacion: ", lat, lng)
        console.log("Handler ubicacion: ", lat, lng)
        setUbicacion([lat, lng]);
    }

    const handlerMarcador = (e) => {
        // setMarcador(e.target.value);
        console.log(e)
    }

    const handlerFechaDeNacimiento = (e) => {
        setFechaDeNacimiento(e.target.value);
    }

    const handlerGeneroMusicalPreferido = (e) => {
        setGeneroMusicalPreferido(e.target.value);
    }

    const handlerQueInstrumentoTocas = (e) => {
        setQueInstrumentoTocas(e.target.value);
    }

    const handlerEstasBuscandoBanda = (e) => {
        estasBuscandoBanda ? setEstasBuscandoBanda(false): setEstasBuscandoBanda(true);        
    }

    const handlerInformacionAdicional = (e) => {
        setInformacionAdicional(e.target.value);
    }

    const crearUsuario = async (e) => {
        e.preventDefault();

        if (state.password !== passwordConfirm) {
            alert("Las contraseñas no coinciden.");
        } else {
            try {
                await RegistroService.crearUsuario(state).then(
                  () => {
                    alert("Cuenta creada satisfactioriamente.");
                    navigate("/");
                  },
                  (error) => {
                    alert(error.response.data.message)
                  }
                );
              } catch (err) {
                console.log(err);
              }
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
    
    
                                    <form>
                                        <h3>Ingresá tus datos para crear tu cuenta. ¡Es muy fácil!</h3>
    
                                        <br></br>
    
                                        <div className="mb-3">
                                        <label htmlFor="txtEmail">Email *:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Ingrese email"
                                            style={{width: "80vh", height:"4vh", textAlign:"center", justifyContent:"center", alignItems: "center"}}
                                            name="email"
                                            value={email}
                                            onChange={handlerEmail}
                                        />
                                        
                                        </div>
    
                                        <div className="mb-3">
                                        <label htmlFor="txtContraseña">Contraseña *:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Ingrese contraseña"
                                            style={{width: "80vh", height:"4vh", textAlign:"center", justifyContent:"center", alignItems: "center"}}
                                            name="password"
                                            value={password}
                                            onChange={handlerPassword}
                                        />
                                        </div>

                                        <div className="mb-3">
                                        <label htmlFor="txtContraseña">Confirmar contraseña *:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Reingrese contraseña"
                                            style={{width: "80vh", height:"4vh", textAlign:"center", justifyContent:"center", alignItems: "center"}}
                                            name="passwordConfirm"
                                            onChange={handlerPasswordConfirm}
                                        />
                                        </div>

                                        <label htmlFor="fotoDePerfil">Foto de Perfil:</label>
                                        <img src={ defaultProfilePicture }></img>
                                        <input
                                            type="file"
                                            id='fotoDePerfil'
                                            name='fotoDePerfil'
                                            placeholder='Subir'
                                            autoComplete='off'
                                            className='u-full-width'
                                            onChange={handlerFotoDePerfil}
                                            value = {fotoDePerfil}
                                        />
                                        
                                        
                                        
                                        <label htmlFor="txtNombre">Nombre *:</label>
                                        <input
                                            type="text"
                                            id='txtNombre'
                                            name='nombre'
                                            placeholder='Ingrese nombre'
                                            autoComplete='off'
                                            className='u-full-width'
                                            onChange={handlerNombre}
                                            value = {nombre}
                                        />
                                        <label htmlFor="txtApellido">Apellido *:</label>
                                        <input
                                            type="text"
                                            id='txtApellido'
                                            name='apellido'
                                            placeholder='Ingrese apellido'
                                            autoComplete='off'
                                            className='u-full-width'
                                            onChange={handlerApellido}
                                            value = {apellido}
                                        />
                                        <label htmlFor="txtFechaDeNacimiento">Fecha de Nacimiento *:</label>
                                        <input
                                            type="date"
                                            id='txtFechaDeNacimiento'
                                            name='fechaDeNacimiento'
                                            className='u-full-width'
                                            onChange={handlerFechaDeNacimiento}
                                            value = {fechaDeNacimiento}
                                        />
                                        <label htmlFor="txtGeneroMusical">Género musical preferido *:</label>
                                        <input
                                            type="text"
                                            id='txtGeneroMusical'
                                            name='generoMusicalPreferido'
                                            placeholder='Ingrese generoMusicalPreferido'
                                            autoComplete='off'
                                            className='u-full-width'
                                            onChange={handlerGeneroMusicalPreferido}
                                            value = {generoMusicalPreferido}
                                        />
                                        <label htmlFor="txtQueInstrumentoTocas">¿Qué instrumento tocás? *:</label>
                                        <input
                                            type="text"
                                            id='txtQueInstrumentoTocas'
                                            name='queInstrumentoTocas'
                                            placeholder='Ingrese queInstrumentoTocas'
                                            autoComplete='off'
                                            className='u-full-width'
                                            onChange={handlerQueInstrumentoTocas}
                                            value = {queInstrumentoTocas}
                                        />


                                        <div>
                                            ¿Estás buscando banda? * {estasBuscandoBanda}
                                        </div>
                                        <ToggleButton onClick={handlerEstasBuscandoBanda}>{ estasBuscandoBanda ? 'Si' : 'No' }</ToggleButton>
                                        
                                        
                                        <PruebaMapa setMarcador={handlerUbicacion}></PruebaMapa>


                                        <label htmlFor="txtInfomracionAdicional">Información adicional:</label>
                                        <textarea 
                                            name="infomracionAdicional" 
                                            id="txtInfomracionAdicional" 
                                            className='u-full-width'
                                            onChange={handlerInformacionAdicional}
                                            value = {informacionAdicional}>
                                        </textarea>

    
                                        <div>
                                            
                                        </div>
                                        
                                        <div>
                                            <br></br><br></br><br></br><br></br><br></br><br></br>
                                            
                                            
                                            <button className="btn btn-secondary" style={{width: "30vh"}}>
                                                <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Volver</NavLink>
                                            </button>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button type="submit" className="btn btn-success" style={{width: "30vh"}} onClick={crearUsuario}>
                                                Registrarme
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

export default Registro;