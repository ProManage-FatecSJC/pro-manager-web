import { X, UsersThree } from 'phosphor-react';
import './styles.scss';
import { useEffect, useState } from 'react';
import { PartnerCard } from '../../components/partnerCard';
import api from '../../api/api';
import { URI } from '../../api/uri';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeClosed } from 'phosphor-react';
import { ModalRegister } from '../modalRegister';
import { Partners } from '../../pages';

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

}

export function ModalViewPartner({ isOpen, setModalOpen, partnerName, partnerStatus, partnerImage, partnerPrivacy, partnerType, partnerAmount, partnerContact, partnerResponsible, partnerState }: ModalProps) {

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
                <img src={partnerImage} alt="Foto do parceiro" />
                    <div className="header_line">
                        <div>
                            <UsersThree size={32} weight="fill" />
                            <div>
                                <h1>Parceiro: {partnerName}</h1>
                                <p>Status: {partnerStatus}</p>
                                <p>Privacidade: {partnerPrivacy}</p>
                                <p>Tipo: {partnerType}</p>
                                <p>Quantidade: {partnerAmount}</p>
                                <p>Contato: {partnerContact}</p>
                                <p>Responsável: {partnerResponsible}</p>
                                <p>Estado: {partnerState}</p>
                            </div>
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />
                    </div>
                        <button type="submit" className="btn_user_submit">Editar Parceiro</button>

                </main>
            </div>
        )
    };
    return null;
}
