import React,{useState} from 'react';
import ListarProdutos from '../list_produtos/ListarProdutos';
import Logo from '../logo/logo';
import Modal from '../modal/Modal'


function Painel({children}){
    //console.log(lja)
    const [modal, setModal] = useState(true)
    const [lojas, setLojas] = useState([])
    return(
        <>
            <Modal isOpen={modal} onClickClose={()=>setModal(false)} lja={setLojas}></Modal>
            <div>
                <Logo />
                {children}
            </div>
            <div>
                <ListarProdutos ljas={lojas} />
                {children}
            </div>
        </>
    )
}

export default Painel;