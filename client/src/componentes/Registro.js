import React, {useState} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import MusicoService from "../servicios/musicoService";
import defaultProfilePicture from '../assets/img/pp.png';
import PruebaMapa from './PruebaMapa';
import ToggleButton from 'react-bootstrap/ToggleButton';


const Registro = () => {

    const [email, setUsername] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseñaConfirm, setContraseñaConfirm] = useState("")

    const [fotoDePerfil, setFotoDePerfil] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [ubicacion, setUbicacion] = useState([])
    const [fechaDeNacimiento, setFechaDeNacimiento] = useState("")
    const [generoMusicalPreferido, setGeneroMusicalPreferido] = useState("")
    const [instrumento, setInstrumento] = useState("")
    const [buscandoBanda, setBuscandoBanda] = useState("")
    const [informacionAdicional, setInformacionAdicional] = useState("")

    const navigate = useNavigate();

    const state  = {
        email: email,
        contraseña: contraseña,

        fotoDePerfil: fotoDePerfil,
        nombre: nombre,
        apellido: apellido,
        ubicacion: ubicacion,
        fechaDeNacimiento: fechaDeNacimiento,
        generoMusicalPreferido: generoMusicalPreferido,
        instrumento: instrumento,
        buscandoBanda: buscandoBanda,
        informacionAdicional: informacionAdicional,
        bloqueado: false,
        esRepresentante: false
    };


    const handlerEmail = (e) => {
        setUsername(e.target.value);
    }

    const handlerContraseña = (e) => {
        setContraseña(e.target.value);
    }

    const handlerContraseñaConfirm = (e) => {
        setContraseñaConfirm(e.target.value);
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

    const handlerFechaDeNacimiento = (e) => {
        setFechaDeNacimiento(e.target.value);
    }

    const handlerGeneroMusicalPreferido = (e) => {
        setGeneroMusicalPreferido(e.target.value);
    }

    const handlerinstrumento = (e) => {
        setInstrumento(e.target.value);
    }

    const handlerbuscandoBanda = (e) => {
        buscandoBanda ? setBuscandoBanda(false): setBuscandoBanda(true);        
    }

    const handlerInformacionAdicional = (e) => {
        setInformacionAdicional(e.target.value);
    }

    const crearUsuario = async (e) => {
        e.preventDefault();

        if (state.contraseña !== contraseñaConfirm) {
            alert("Las contraseñas no coinciden.");
        } else {
            try {
                await MusicoService.altaMusico(state).then(
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
                                            name="contraseña"
                                            value={contraseña}
                                            onChange={handlerContraseña}
                                        />
                                        </div>

                                        <div className="mb-3">
                                        <label htmlFor="txtContraseña">Confirmar contraseña *:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Reingrese contraseña"
                                            style={{width: "80vh", height:"4vh", textAlign:"center", justifyContent:"center", alignItems: "center"}}
                                            name="contraseñaConfirm"
                                            onChange={handlerContraseñaConfirm}
                                        />
                                        </div>

                                        <label htmlFor="fotoDePerfil">Foto de Perfil:</label>
                                        <img src={ fotoDePerfil }></img>
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
                                        <label htmlFor="txtinstrumento">¿Qué instrumento tocás? *:</label>
                                        <input
                                            type="text"
                                            id='txtinstrumento'
                                            name='instrumento'
                                            placeholder='Ingrese instrumento'
                                            autoComplete='off'
                                            className='u-full-width'
                                            onChange={handlerinstrumento}
                                            value = {instrumento}
                                        />


                                        <div>
                                            ¿Estás buscando banda? * {buscandoBanda}
                                        </div>
                                        <ToggleButton onClick={handlerbuscandoBanda}>{ buscandoBanda ? 'Si' : 'No' }</ToggleButton>
                                        
                                        
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