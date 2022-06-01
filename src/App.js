import React,{useState} from 'react'
import Logo from './component/logo/logo'
import Modal from './component/modal/Modal'

function App() {
  const [modal, setModal] = useState(true)
  return (
    <>
      <Logo />
      <div>
        <Modal isOpen={modal} onClickClose={()=>setModal(false)}>
        </Modal>
      </div>
      </>
  );
}

export default App;
