import classes from './Modal.module.css'
import ReactDOM from 'react-dom';
import { Fragment } from 'react';
const portalElement=document.getElementById('modal');
const BackDrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.closeCart}></div>
    )
}
const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const Modal=(props)=>{
    return(
        <Fragment>
        {ReactDOM.createPortal(<BackDrop closeCart={props.closeCart}/>,portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
        </Fragment>
    )
}
export default Modal;