import { X, UsersThree } from 'phosphor-react';
import './modalviewmemberstyles.scss';
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
        <div className='modal_info_member_wrapper'>
            <main>
            
                <div className="header_member_line">
                    <div>
                        <UsersThree size={32} weight="fill" />
                        <div>
                            <h1>Membro: {name}</h1>
                            
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="exit_icon" />  
                    </div>
                </div>
                <img src={image} alt="Foto do membro" />
                <p><strong>Nome Fantasia:</strong> {trade_name}</p>
                <p><strong>CNPJ:</strong> {CNPJ}</p>
                <p><strong>Telefone:</strong> {telephone}</p>
            </main>
        </div>
    )
};
return null;
}