import React from 'react';
//import ReactDOM from 'react-dom';
import conect from '../api/conect';

function ListarProdutos({children}){
    //const [lista, setLista] = useState([])
    const lista =[]
    if(!lista.length){
        alert('estou vazio')
        ListaGeral()
    }else{
        //alert('estou carregado')
    }
    //useEffect(()=>{
    //    console.log('atualizei')
    //},[lista])

    async function ListaGeral(){
        console.log('listar produtos')
        await conect.get(`/api/catalog_system/pub/products/search?fq=`)
            .then((response)=>{
                response.data.forEach((valor)=>{
                    //console.log('Init proc')
                    lista.push(valor)
                    //console.log('Fim proc')
                    //valor.sellers.map((valora)=>(
                    //    lista.push(valora)
                    //))               
                })
            }).catch((response)=>{
                //console.log(response)
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