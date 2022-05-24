import React from 'react';
import './App.css';
import Logo from './components/logo/logo';
import Mostrar from './mostrar';

function App() {
  return (
    <>
    <Logo />
    <div className="App">Dados aqui:
    </div>
    <Mostrar />
    </>
  );
}

export default App;
