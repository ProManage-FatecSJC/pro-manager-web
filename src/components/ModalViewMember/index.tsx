import { X, UsersThree } from 'phosphor-react';
import './styles.scss';
import { useEffect, useState } from 'react';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    image: any
    name: string
    trade_name: string
    CNPJ: string
    telephone: string
}

export function ModalViewMember({ isOpen, setModalOpen, image, name, trade_name, CNPJ, telephone }: ModalProps) {

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
        <div className='modal_user_wrapper'>
            <main>
            
                <div className="header_line">
                    <div>
                        <UsersThree size={32} weight="fill" />
                        <div>
                            <h1>Parceiro: {name}</h1>
                            
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />  
                    </div>
                </div>
                <img src={image} alt="Foto do parceiro" />
                <p><strong>Nome Fantasia:</strong> {trade_name}</p>
                <p><strong>CNPJ:</strong> {CNPJ}</p>
                <p><strong>Telephone:</strong> {telephone}</p>
                <div className='buttons_modal'>
                <button type="submit" className="btn_user_submit">Editar Parceiro</button>
                <button type="submit" className="btn_user_submit2">Arquivar Parceiro</button>
                </div>
            </main>
        </div>
    )
};
return null;
}