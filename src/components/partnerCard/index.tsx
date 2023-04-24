import { useState } from 'react';
import './styles.scss'
import { ModalRegister } from '../modalRegister';
import { ModalMemberRegister } from '../modalMemberRegister';

type PartnerCardTypes = {
    partnerImage?: string;
    partnerResponsibilityImage?: string;
    partnerName: string;
    partnerResponsibilityName: string;
    partnerStatus: string;
    partnerId: any
}

export function PartnerCard({ partnerImage, partnerResponsibilityImage, partnerName, partnerResponsibilityName, partnerStatus, partnerId }: PartnerCardTypes) {

    const [isRegisterMemberModalOpen, setIsRegisterMemberModalOpen] = useState(false)

    return (
        <><td className="container_card">
            <div className='partner_img'>
                <img src={partnerImage} alt="Foto do parceiro" />
            </div>

            <div className="info_card">
                <h2>{partnerName}</h2>
                <p>{partnerResponsibilityName} - {partnerStatus}</p>
            </div>

            <div className='teste'>

                <button onClick={() => {setIsRegisterMemberModalOpen(true)}}> Adicionar membro </button>
                <div className='partner_responsibility_img'>
                    <img src={partnerResponsibilityImage} alt="Foto do responsável" />
                </div>
            </div>

        </td><ModalMemberRegister
                isOpen={isRegisterMemberModalOpen}
                setModalOpen={() => setIsRegisterMemberModalOpen(!isRegisterMemberModalOpen)}
                partnerId={partnerId} /></>
    )
}