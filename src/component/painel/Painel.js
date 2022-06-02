import React from 'react';
import ListarProdutos from '../list_produtos/ListarProdutos';
import Logo from '../logo/logo';


const Painel = () =>{

    return(
        <>
            <div>
                <Logo />
            </div>
            <div>
                <ListarProdutos />
            </div>
        </>
    )
}

export default Painel;