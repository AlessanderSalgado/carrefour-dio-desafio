import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'
import conect from '../api/conect'
const portalRoot = document.getElementById('portal-root');

const ModalListLojas = ({children, isOpen, onClickClose,lja}) => {
    const [divret, setDivret] = useState(<div className='div-class-retorno-cep-vazio'></div>)
    
    var lojas = []
    async function BuscaLojas(){
        var cep = document.getElementById('value-busca').value
        if(cep === ''){
            setDivret(<div className='div-class-retorno-cep-vazio'>CEP inválido. Digite novamente.</div>)
        }else{
            setDivret(<div className='div-class-retorno-cep-vazio'>Busacando.....</div>)
            //console.log('buca cep')
            await conect.get(`/api/checkout/pub/regions?country=BRA&postalCode=${cep}`)
            .then((response)=>{
                response.data.forEach((valor)=>{
                    valor.sellers.map((valora)=>(
                        lojas.push(valora)
                    ))               
                })
            }).catch((response)=>{
                //console.log(response)
                setDivret(<div className='div-class-retorno-cep-vazio'>CEP inválido. Digite novamente.</div>)
            })
            if(lojas.length >= 1){
                return(
                    lja(lojas),
                    onClickClose()
                )
            }       
        }
    }
    function RetTela(){
        return divret
    }
    if(!isOpen){
        return null;
    }
    return ReactDOM.createPortal(
        <>
        <div className='div-class-externa-fundo-transparente'>
            <div className='div-class-painel-central'>
                <div className='div-class-button-close-modal'>
                    <button type='button' className='bnt-class' onClick={onClickClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16pt" viewBox="0 0 329.26933 329" width="16pt">
                    <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0">
                    </path>
                    </svg>
                    </button>
                {children}
                </div>

                <p className='p-class-cep'>Digite seu CEP para visualizar ofertas para sua região</p>
                <div className='div-class-menu-busca'>
                    <form className='form-class'>
                        <input className='input-class' type='text' id='value-busca' placeholder="00000-000" required/>
                        <button className='bnt-class-buscar button button:hover' type='button' onClick={BuscaLojas}>Buscar</button>
                    </form>
                    <a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" rel="noreferrer" className='ahref-clas'>Não sei o CEP</a>
                {children}
                </div>
                <div className='div-class-retorno-busca'>
                    <RetTela />
                    {children}
                </div>
            </div>
        </div>
        </>,
        portalRoot,
    )
}
export default ModalListLojas;