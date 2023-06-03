import { X, UsersThree } from 'phosphor-react';
import './styles.scss';
import { useEffect, useState } from 'react';
import { ModalUpdatePartner } from '../modalUpdatePartner';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    partnerName: string;
    partnerStatus: string;
    partnerPrivacy: string;
    partnerType: string;
    partnerAmount: string;
    partnerContact: string;
    partnerResponsible: string;
    partnerState: string;
    partnerImage?: string;
    partnerId: string;

}

export function ModalViewPartner({ isOpen, setModalOpen, partnerName, partnerStatus, partnerImage, partnerPrivacy, partnerType, partnerAmount, partnerContact, partnerResponsible, partnerState, partnerId }: ModalProps) {

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

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
            <div className='modal_info_user_wrapper'>
                <main>
                
                    <div className="header_line">
                        <div>
                            <UsersThree size={32} weight="fill" />
                            <div>
                                <h1>Parceiro: {partnerName}</h1>
                                
                            </div>
                            <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />  
                        </div>
                    </div>
                    <img src={partnerImage} sizes='32' alt="Foto do parceiro" />
                    <p><strong>Status:</strong> {partnerStatus}</p>
                    <p><strong>Privacidade:</strong> {partnerPrivacy}</p>
                    <p><strong>Tipo:</strong> {partnerType}</p>
                    <p><strong>Quantidade:</strong>{partnerAmount}</p>
                    <p><strong>Contato:</strong> {partnerContact}</p>
                    <p><strong>Responsável:</strong> {partnerResponsible}</p>
                    <p><strong>Estado:</strong> {partnerState}</p>
                    <div className='buttons_modal'>
                    <button onClick={() => {setIsModalUpdateOpen(true)}} type="submit" className="btn_user_submit">Editar Parceiro</button>
                    <button type="submit" className="btn_user_submit2">Arquivar Parceiro</button>
                    </div>
                </main>
                <ModalUpdatePartner
               isOpen={isModalUpdateOpen}
               setModalOpen={() => setIsModalUpdateOpen(!isModalUpdateOpen)}
               partnerId={partnerId}/>   
            </div>
        )
    };
    return null;
}
