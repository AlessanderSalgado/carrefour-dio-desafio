import React, { Component, useState } from 'react';
import apiCep from './api/apiCarrefour';
import Logo from './components/logo/logo';

class App extends Component{
  render(){
    return(
      <>
      <Logo />
      <div>
        <h1>Lojas Proximas:</h1>
      </div>
      </>
    );
  };
};

export default App;
