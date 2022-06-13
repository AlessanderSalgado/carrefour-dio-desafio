import React, {useState,useEffect} from 'react';
import useApi from '../api/useApi';
import ListaProdutosTela from './List'
import './ListarProdutos.css'

function ListarProdutos({children,ljas,onClickOpen,cep}){
    const [search, setSearch] = useState('')

    const [load, loadInfo] = useApi({
        method: 'get',
        url: 'https://95cca9b7-ec4b-4aaa-81ea-4c98fa2f155f.mock.pstmn.io/api/catalog_system/pub/products/search?fq=C:26&fq=',
        //url: 'https://00411bbc-6601-43da-85b8-048b253b7f03.mock.pstmn.io/api/catalog_system/pub/products/search?fq=',
    });
    
    useEffect(()=>{
        if(ljas.length){
            console.log('funcao busca por loja')
        }else{
            load();
        }
    // eslint-disable-next-line  
    },[ljas])
    
    useEffect(()=>{
      if(search.length >= 4){
        console.log(search)
        
      }
    // eslint-disable-next-line  
    },[search])

    return (
    <div>
      <div className='div-class-sombra sombra'>
        <div className='div-class-painel-fixo fixo'>
          <span className='span-class-logo'>
            <img className='logo' alt='Logo' src="https://carrefourbr.vtexassets.com/arquivos/logo-carrefour-site.png" />
          </span>
          <div className='div-class-input-busca'>
            <input className='input-class-busca' 
            value={search} 
            onChange={(ev) =>{setSearch(ev.target.value)}}
            role="searchbox" 
            type="search" 
            aria-controls="id-od4t01" 
            aria-haspopup="dialog" 
            aria-label="Pesquise por produtos ou marcas" 
            placeholder="Pesquise por produtos ou marcas"/>
            <div id="id-od4t01" className='div-class-oculta' role="dialog" tabIndex="0" data-dialog="true" aria-label="Searchbar Input" hidden="">
            </div>
            <button className='bnt-class-busca'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                </path>
              </svg>
            </button>
          </div>
          <div>carrinho e outros</div>
        </div>
      </div>
      <div className='div-class-editar-cep'>
          <div className='div-class-ret-cep'>
              {cep}
              </div>
              <button className='bnt-class-editar-cep'
              onClick={onClickOpen}>
              Alterar
          </button>
      </div>
        <div className='div-class-lista-card'>
            <ListaProdutosTela loading={loadInfo.loading} listaProd={loadInfo.data} error={loadInfo.error}>
            </ListaProdutosTela>
        {children}
        </div>
    </div>)
}

export default ListarProdutos;