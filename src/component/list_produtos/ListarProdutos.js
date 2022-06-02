import React, {useEffect, useState} from 'react';
//import ReactDOM from 'react-dom';
import conect from '../api/conect';

const ListarProdutos = ({children}) =>{
    const [lista, setLista] = useState([])
    if(!lista.length){
        //alert('estou vazio')
        ListaGeral()
    }else{
        //alert('estou carregado')
    }
    useEffect(()=>{
        console.log('atualizei')
    },[lista])

    async function ListaGeral(){
        await conect.get(`/api/catalog_system/pub/products/search?fq=`)
            .then((response)=>{
                response.data.forEach((valor)=>{
                    console.log('Init proc')
                    setLista(valor)
                    console.log('Fim proc')
                    //valor.sellers.map((valora)=>(
                    //    lista.push(valora)
                    //))               
                })
            }).catch((response)=>{
                console.log(response)
                //setDivret(<div className='div-class-retorno-cep-vazio'>CEP inválido. Digite novamente.</div>)
            })
    }



    return (
    <div>
        Testando
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>
        <p>oloha</p>

    </div>)
}

export default ListarProdutos;