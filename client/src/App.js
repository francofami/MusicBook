import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AltaCriptomoneda from './componentes/AltaCriptomoneda'
import Home from './componentes/Home'
import Login from './componentes/Login'
import Registro from './componentes/Registro'

function App() {
  return (        
      <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route exact path="/registro" element={<Registro/>} />
                    <Route exact path="/home" element={<Home/>} />
                    <Route exact path="/altaCriptomoneda" element={<AltaCriptomoneda/>} />
                    <Route path="*" element={
                        <div>
                            <h2>404 Page not found etc</h2>
                        </div>
                        }
                    />
                </Routes>
            </Router>
        </div>
  );
}

export default App;
