import React,{useState} from 'react'
import Modal from './component/modal/Modal'
import Painel from './component/painel/Painel';

function App() {
  const [modal, setModal] = useState(true)
  return (
      <>
        <Modal isOpen={modal} onClickClose={()=>setModal(false)}></Modal>
        <Painel />
      </>
  );
}

export default App;
