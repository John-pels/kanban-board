import classNames from 'classnames'
import { FC, MouseEvent, useEffect, useRef } from 'react'
import './style.css'
import { ModalProps } from './types'
import { AiOutlineCloseCircle } from "react-icons/ai";



const CustomModal: FC<ModalProps> = ({ showModal, setShowModal, children, title = 'Add New List' }) => {
    let shouldOpen = {
        'open': showModal,
        'close': !showModal
    }
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (showModal) {
            window.document.body.style.overflow = 'hidden';
        } else {
            window.document.body.style.removeProperty('overflow');
        }
    }, [showModal]);

    const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === modalRef?.current) {
            handleClose();
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <section className={classNames('modal__overlay', { ...shouldOpen })} ref={modalRef} onClick={handleOverlayClick}>
            <div className={classNames('modal__container', { ...shouldOpen })}>
                <span className='modal__close-icon' onClick={handleClose}><AiOutlineCloseCircle />
                </span>
                <div className='modal__content'>
                    <h3 className="modal__title">{title}</h3>
                    {children}
                </div>
            </div>
        </section>
    )
}

export { CustomModal }
