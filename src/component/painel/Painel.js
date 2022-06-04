import React,{useState} from 'react';
import ListarProdutos from '../list_produtos/ListarProdutos';
import Modal from '../modal/Modal'


function Painel({children}){
    //console.log(lja)
    const [modal, setModal] = useState(true)
    const [lojas, setLojas] = useState([])
    const [zipcode, setZipcode] = useState('')
    return(
        <>
            <Modal isOpen={modal} onClickClose={()=>setModal(false)} lja={setLojas} zipcode={setZipcode}></Modal>
            <div>
            </div>
            <div>
                <ListarProdutos ljas={lojas} onClickOpen={()=>setModal(true)} cep={zipcode}/>
                {children}
            </div>
        </>
    )
}

export default Painel;