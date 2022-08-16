import React, { useEffect } from "react";
import styles from '../styles/components/SingupModal.module.css';


const Modal = props => {

    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener('keydown', closeOnEscapeKeyDown)
        return function cleanup() {
            document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
        }
    }, [])

    return(
        <div className={`${styles.modal} ${props.show ? styles.show : ''}`}>
            <div className={styles.modal_content}>
                <div className={styles.modal_header}>
                    <h4 className={styles.modal_title}>Preencha os campos abaixo:</h4>
                </div>
                <div className={styles.modal_body}>
                    {props.children}
                </div>
                <div className={styles.modal_footer}>
                    <button onClick={props.onClose} className={styles.button}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;