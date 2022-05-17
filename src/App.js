import React from 'react';
import './App.css';
import Header from './components/Header';
import PruebaMapa from './components/PruebaMapa';
import Registro from './components/Registro'; 

class App extends React.Component {

  state = {
    lista : [] // Lista de registros en componente padre
  }

  // El padre le pasa al hijo
  // Para que hijo pase a padre hay un truco:
  // Mas abajo le paso la referencia de este método al hijo
  // El hijo lo invoca y le pasa por parámetro el nuevo registro

  agregarRegistro = (registro)=>{
    this.setState({
      lista: [...this.state.lista, registro]
    })
  }

  removerRegistro = (id) => {
    const listaActualizada = this.state.lista.filter((registro) => registro.id !== id);
    this.setState({
      lista:[]
    })
  }

  render() {

    return (
      <>
      <div>
          <Header titulo="Registro"/>
          <div className="container">
            <div className="row">
              <div className='one-half column'>
                <Registro agregarRegistro = { this.agregarRegistro }/>
                <PruebaMapa></PruebaMapa>
              </div>
            </div>
          </div>
      </div>
      </>
    );
  }
}

export default App;
