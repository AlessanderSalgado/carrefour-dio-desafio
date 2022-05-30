import React, { Component, useState } from 'react';
import apiCep from './api/apiCarrefour';
import Logo from './components/logo/logo';
import ModalListLojas from './components/modal/modalLojas';

function App () {
  const [modal, setModal] = useState(true)
    return (
      <>
      <Logo />
      <div>
        <h1>Lojas Proximas:</h1>
        <ModalListLojas isOpen={modal} onClickClose={()=>setModal(false)}>
        </ModalListLojas>
      </div>
      </>
    );
};

export default App;
