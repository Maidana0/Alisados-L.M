import ReactDOM from 'react-dom';
import styles from '@Fran&Miguel/styles/Modal.module.css'


const Modal = ({ onClose, children }) => {
    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={handleModalClick}>
                <button className={styles.modalClose} onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default Modal;