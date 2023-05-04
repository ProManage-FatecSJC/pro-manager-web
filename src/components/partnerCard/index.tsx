import { useState } from 'react';
import './styles.scss'
import { ModalRegister } from '../modalRegister';
import { ModalMemberRegister } from '../modalMemberRegister';
import { useNavigate } from 'react-router-dom';

type PartnerCardTypes = {
    partnerImage?: string;
    partnerResponsibilityImage?: string;
    partnerName: string;
    partnerResponsibilityName: string;
    partnerStatus: string;
    partnerId: any
}

export function PartnerCard({ partnerImage, partnerResponsibilityImage, partnerName, partnerResponsibilityName, partnerStatus, partnerId }: PartnerCardTypes) {

    const navigate = useNavigate()

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

                <button onClick={() => {navigate('/Members')}}> Visualizar membros </button>
                <div className='partner_responsibility_img'>
                    <img src={partnerResponsibilityImage} alt="Foto do responsável" />
                </div>
            </div>

        </td></>
    )
}