import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';
import { IButton } from '../types';
import Alert from './components/Alert/Alert';

const App = () =>{
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const buttons:IButton[] = [
    {type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue')},
    {type: 'danger', label: 'Close', onClick: () => setShowModal(false)}
  ]


  const closeAlert=()=>{
    setShowAlert(!showAlert)
  }

  return(
    <div className="d-flex align-items-center justify-content-center pt-5">
      <div className="myModal col-6">
        <Modal
          show={showModal}
          onClose={()=>setShowModal(!showModal)}
          title={"Modal"}
          buttons={buttons}
        >
          <p>This is modal content</p>
        </Modal>
        <button onClick={()=>setShowModal(true)}>
          Modal
        </button>
      </div>
      <div className="myAlert col-6">
        {showAlert?(<Alert
          onDismiss={closeAlert}
          type={"warning"}
        >This is a warning alert</Alert>):""}
        <button onClick={()=>setShowAlert(true)}>Alert</button>
      </div>
    </div>
  );
}

export default App;
