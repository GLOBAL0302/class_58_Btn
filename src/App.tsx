import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { IButton } from '../types';

const App = () =>{
  const [showModal, setShowModal] = useState(false)
  const buttons:IButton[] = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)}
  ]

  return(
    <>
      <div className="myModal">
        <Modal
          show={showModal}
          onClose={()=>setShowModal(!showModal)}
          title={"Modal"}
          buttons={buttons}
        >
          <p>This is modal content</p>
        </Modal>
        <button onClick={()=>setShowModal(!showModal)}>
          Modal
        </button>
      </div>
    </>
  );
}

export default App;
