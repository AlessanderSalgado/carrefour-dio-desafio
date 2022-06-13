import React from "react";
import Card from './Card'

const ListaProdutosTela = ({loading, listaProd, error}) =>{

if(loading === true){
    return <div>Buscando dados..............</div>
}
if(listaProd){   
    return(
        <div className="div-class-listaProd">
            {listaProd.map((prod)=>(<Card prod={prod}/>))}
        </div>
    )
}else if(!listaProd){
    return <div>Nenhum Resultado encontrado.</div>
}
if(error){
    return <div>Erro de conexao com API</div>
}

return(
    <>
    </>
)
}
export default ListaProdutosTela;