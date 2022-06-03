import React from 'react';
import ListarProdutos from '../list_produtos/ListarProdutos';
import Logo from '../logo/logo';


function Painel({children}){

    return(
        <>
            <div>
                <Logo />
                {children}
            </div>
            <div>
                <ListarProdutos />
                {children}
            </div>
        </>
    )
}

export default Painel;