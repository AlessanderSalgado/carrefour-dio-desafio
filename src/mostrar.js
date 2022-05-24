import React from 'react';
import Api from './api/apiCarrefour'

function Mostrar(){
    const dados = Api('28921212')
    console.log(dados)
    return(
        <h1>oi</h1>
    )

}

export default Mostrar;