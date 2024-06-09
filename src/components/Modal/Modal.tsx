import React from 'react';
import { IButton } from '../../../types';

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
      <div className="modal-backdrop show" style={{display: show ? "block": "none"}}/>
      <div className="modal show" style={{display: show ? "block": "none"}} onClick={onClose}>
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
    </>

  );
};

export default Modal;

