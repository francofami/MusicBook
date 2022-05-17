import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import defaultProfilePicture from '../assets/images/pp.png'

export default class Registro extends Component {

    state = {
        registro:{
            fotoDePerfil:"",
            email:"",
            contraseña:"",
            nombre:"",
            apellido:"",
            ubicacion:"",
            fechaDeNacimiento:"",
            generoMusicalPreferido:"",
            queInstrumentoTocas:"",
            estasBuscandoBanda:"",
            infomracionAdicional:""
        },
    };

    // HandlerChange, si escribo en un campo estoy haciendo un change. Acordarse de poner atributo onchange en cada campo
    // Uso arrowfunction para evitar el bindeo
    handlerChange = (e)=>{
        
        console.log(e.target.name); // el nombre del campo q estoy llenando
        console.log(e.target.value); // el valor del campo q estoy llenando

       this.setState({registro:{...this.state.registro, [e.target.name]:e.target.value }}) 
       // Actualizar el estado cuando es un objeto.
       // En el setState le paso el nuevo estado (es decir un objeto)
       // Y en el campo registro, le paso un objeto que tiene campo registro
       // registro:{nuevo objeto}, en el nuevo objeto le pongo {registro anterior, [campoDondeAsignamosValor]:valorQueAsignamos}
    };

    // Validaciones
    validarregistro({nombre, prepaga, fecha, hora, sintomas}) {
        return nombre.trim().length === 0 
         || prepaga.trim().length === 0
         || fecha.trim().length === 0
         || hora.trim().length === 0
         || sintomas.trim().length === 0 ? false : true
         // Si esto se cumple retorno false, si no true
    }

    // Poner onSubmit en el form
    handlerSubmit = (e) => {
        e.preventDefault(); // Evito que haga el comportamiento por defecto

        if(!this.validarRegistro(this.state.registro)) {
            this.setState({
                error: true
            })
            return;
        }

        // Si no entra en el if entonces no hay error
        this.setState({
            error: false
        })

        console.log("Enviando...");

        // En vez de escribir this.state.registro escribo registro
        const {registro} = this.state;

        // npm install uuid y luego hago el import arriba de todo
        registro.id = uuidv4();

        // Acá me comunico con la clase padre, pasándole el registro:
        this.props.agregarRegistro(registro); 

        // Dejamos los campos en blanco despues de enviarlo
        this.setState({
            registro:{
                fotoDePerfil:"",
                email:"",
                contraseña:"",
                nombre:"",
                apellido:"",
                ubicacion:"",
                fechaDeNacimiento:"",
                generoMusicalPreferido:"",
                queInstrumentoTocas:"",
                estasBuscandoBanda:"",
                infomracionAdicional:""
            },
        })

    }

    render() {

        const { fotoDePerfil, email, contraseña, nombre, apellido, ubicacion, fechaDeNacimiento, generoMusicalPreferido, queInstrumentoTocas, estasBuscandoBanda, infomracionAdicional } = this.state.registro

        return(
            <>
            <h3>Ingresá tus datos para crear tu cuenta. ¡Es muy fácil!</h3>
            {
                this.state.error?<p className='alerta-error'>Todos los campos son requeridos</p>:null
            } 
            <form onSubmit={this.handlerSubmit}>
                <label htmlFor="fotoDePerfil">Foto de Perfil:</label>
                <img src={ defaultProfilePicture }></img>
                <input
                    type="file"
                    id='fotoDePerfil'
                    name='fotoDePerfil'
                    placeholder='Subir'
                    autoComplete='off'
                    className='u-full-width'
                    onChange={this.handlerChange}
                    value = {fotoDePerfil}
                />
                <label htmlFor="txtEmail">E-Mail *:</label>
                <input
                    type="email"
                    id='txtEmail'
                    name='email'
                    placeholder='Ingrese email'
                    autoComplete='off'
                    className='u-full-width'
                    onChange={this.handlerChange}
                    value = {email}
                />
                <label htmlFor="txtContraseña">Contraseña *:</label>
                <input
                    type="password"
                    id='txtContraseña'
                    name='contraseña'
                    placeholder='Ingrese contraseña'
                    autoComplete='off'
                    className='u-full-width'
                    onChange={this.handlerChange}
                    value = {contraseña}
                />
                <label htmlFor="txtNombre">Nombre *:</label>
                <input
                    type="text"
                    id='txtNombre'
                    name='nombre'
                    placeholder='Ingrese nombre'
                    autoComplete='off'
                    className='u-full-width'
                    onChange={this.handlerChange}
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
                    onChange={this.handlerChange}
                    value = {apellido}
                />
                <label htmlFor="txtFechaDeNacimiento">Fecha de Nacimiento *:</label>
                <input
                    type="date"
                    id='txtFechaDeNacimiento'
                    name='fechaDeNacimiento'
                    className='u-full-width'
                    onChange={this.handlerChange}
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
                    onChange={this.handlerChange}
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
                    onChange={this.handlerChange}
                    value = {queInstrumentoTocas}
                />


                <div>
                    ¿Estás buscando banda? * {this.state.selectedOption}
                </div>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="Si"
                        //checked={this.state.estasBuscandoBanda === "Si"}
                        onChange={this.onValueChange}
                        />
                        Si
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input
                        type="radio"
                        value="No"
                        //checked={this.state.estasBuscandoBanda === "No"}
                        //checked="checked"
                        onChange={this.onValueChange}
                        />
                        No
                    </label>
                </div>
                
                



                <label htmlFor="txtInfomracionAdicional">Información adicional:</label>
                <textarea 
                    name="infomracionAdicional" 
                    id="txtInfomracionAdicional" 
                    className='u-full-width'
                    onChange={this.handlerChange}
                    value = {infomracionAdicional}>
                </textarea>
            </form>
            <button type="submit" className="button-primary u-full-width">Alta Registro</button>
            </>
        );
    }    
  
}