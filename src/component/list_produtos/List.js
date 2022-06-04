import React from "react";

const ListaProdutosTela = ({loading, listaProd, error}) =>{

if(loading === true){
    return <div>Buscando dados..............</div>
}
if(listaProd){   
    return(
        <div className="div-class-listaProd">
            <h1>Estou aqui</h1>
            {listaProd.map((prod)=>(
                <li key={prod.productId}>
                    {(prod.productName)}
                </li>
            ))}
        </div>
    )
}else if(!listaProd){
    return <div>Nenhum Resultado encontrado.</div>
}
if(error){
    return <div>Erro de conexao co API</div>
}

return(
    <>
    </>
)
}
export default ListaProdutosTela;