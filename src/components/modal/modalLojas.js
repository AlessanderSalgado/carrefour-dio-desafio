import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import './modalLojas.css'
import apiCep from '../../api/apiCarrefour'
const portalRoot = document.getElementById('portal-root');

const ModalListLojas = ({children, isOpen, onClickClose}) => {
    const [cep, setCep] = useState('01153000');
    const [lojas, setLojas] = useState([]);
    const [loja] = useState([]);
    useEffect(() => {
        apiCep.get(`/api/checkout/pub/regions?country=BRA&postalCode=${cep}`)
        .then((response)=>{
            setLojas(response.data)
        })
    },[cep])


    useEffect(() => {
        lojas.forEach((valor) => {
            if(valor.sellers){
                valor.sellers.map(item => {
                    if(item){
                        loja.push({...item})
                    }
                    return loja
                })
            }        
        })
    },[lojas]);

    console.log(loja)

    if(!isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <div className='ModalListLojas'>
            <div className='Containers'>
                <div className='div-busca-cep'>
                    <button type='button' className='ButtonFechar' onClick={onClickClose}>X</button>
                    <label>Digite seu Cep:</label>
                    <input />
                    <button type='button'>Buscar</button>
                </div>
                <div className='Content'>
                    <p>Lista de lojas</p>
                    {loja.map((loja,i) =>(<li key={i} className='li-class'>{loja.name}</li>))}
                </div>
            </div>
        </div>,
        portalRoot,
    )
}
export default ModalListLojas;