import React from 'react';
import './logo.css';

function Logo() {
  return (
    <>
      <div className='div-class-sombra sombra'>
        <div className='div-class-painel-fixo fixo'>
          <span className='span-class-logo'>
            <img className='logo' alt='Logo' src="https://carrefourbr.vtexassets.com/arquivos/logo-carrefour-site.png" />
          </span>
          <div className='div-class-input-busca'>
            <input className='input-class-busca' role="searchbox" type="search" aria-controls="id-od4t01" aria-haspopup="dialog" aria-label="Pesquise por produtos ou marcas" placeholder="Pesquise por produtos ou marcas"/>
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
    </>
  );
}

export default Logo;