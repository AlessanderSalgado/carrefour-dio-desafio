import React, { Component } from 'react';
import apiCep from './api/apiCarrefour';

class App extends Component{
  state={
    lojas: [],
  }

  async componentDidMount(){
    const response = await apiCep.get('/api/checkout/pub/regions?country=BRA&postalCode=28921212');
    console.log(response.data)
  }

  render(){
    return(
      <div>
        <h1>Lojas Proximas:</h1>
      </div>
    );
  };
};

export default App;
