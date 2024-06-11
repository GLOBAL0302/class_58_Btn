import { PropsWithChildren } from 'react';
interface Props extends PropsWithChildren{
  type:string
  onDismiss?:()=>void
}

const Alert:React.FC<Props> = ({type, onDismiss, children}) => {
  return (
    <>
      <div className={`alert alert-${type}`} role="alert">
        {children}
        {onDismiss?<button
          onClick={onDismiss}
          className='ms-2' style={{border:"none", borderRadius:"50%"}}>
          X
        </button>:""}
      </div>
    </>
  );
};

export default Alert;