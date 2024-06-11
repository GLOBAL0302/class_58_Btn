import React from 'react';
import { IButton } from '../../../types';
import { Transition } from 'react-transition-group';
import "./style.css"

interface Props extends React.PropsWithChildren{
  show:boolean
  title:string
  onClose: React.MouseEventHandler;
  buttons:IButton[]
}

const Modal:React.FC<Props> = ({
                                 show,
                                 title,

                                 buttons,
                                 children,
                                 onClose
                               }) => {
  return (
    <>
      <div className="modal-backdrop show" style={{display: show ? "block": "none"}}></div>
      <Transition
        in={show}
        timeout={500}
        mountOnEnter
        unmountOnExit

      >
        {state=>(
          <div className={`modal show modalAnimation ${state}`} onClick={onClose}>
            <div className="modal-dialog" onClick={(event)=> event.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header d-flex align-items-center">
                  <h1 className="modal-title fs-5">{title}</h1>
                  <img
                    onClick={onClose}
                    className='ms-auto'
                    style={{width:"25px", cursor:"pointer"}}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvvAsw7M_xQ7LK7Sl7BA4soUPJHGkRPCYFnw&s' alt='' />
                </div>
                {children}
                <div className="modal-footer">
                  {buttons.length > 0? (
                    buttons.map((button)=>(
                      <button
                        key={button.label}
                        className={`btn btn-${button.type}`}
                        onClick={button.onClick}
                      >{button.label}</button>
                    ))
                  ): ""}
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>

  );
};

export default Modal;

