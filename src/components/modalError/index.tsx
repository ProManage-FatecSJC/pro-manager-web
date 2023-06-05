import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './modalErrorStyles.scss';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    errorMessage: string
}

export function ModalError({ isOpen, setModalOpen, errorMessage }: ModalProps) {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')


    useEffect(() => {
        function onEsc(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setModalOpen();
            }
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [setModalOpen]);

    if (isOpen) {
        return (
            <div className='modal_error_wrapper'>
                <main>
                    <div className="header_line_error">
                        <div>
                            <h1>{errorMessage}</h1>
                        </div>
                    </div>
                    <div className="buttons_modal_error">

                        <button className='btn_error' onClick={() => setModalOpen()}>
                            OK
                        </button>
                    </div>
                </main>
            </div>
        )
    };
    return null;
}
