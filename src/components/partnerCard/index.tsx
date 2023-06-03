import { useState } from 'react';
import './styles.scss'
import { ModalRegister } from '../modalRegister';
import { ModalMemberRegister } from '../modalMemberRegister';
import { ModalViewPartner } from '../ModalViewPartner';
import { useNavigate } from 'react-router-dom';

type PartnerCardTypes = {
    partnerImage?: string;
    partnerResponsibilityImage?: string;
    partnerName: string;
    partnerResponsibilityName: string;
    partnerStatus: string;
    partnerId: any;
    partnerPrivacy: any
    partnerType: any
    partnerAmount: any
    partnerContact: any
    partnerResponsible: any
    partnerState: any

}

export function PartnerCard({ partnerImage, partnerResponsibilityImage, partnerName, partnerResponsibilityName, partnerStatus, partnerId, partnerType, partnerAmount, partnerPrivacy, partnerContact, partnerResponsible, partnerState}: PartnerCardTypes) {

    const [isModalViewPartnerOpen, setIsModalViewPartnerOpen] = useState(false);
    const [isModalArchivePartner, setIsModalArchivePartner] = useState(false)
    const navigate = useNavigate()

    function openModalArchiveMembers(): void {
        setIsModalArchivePartner(true)
    }

    return (
        <>
        <td className="container_card" onClick={() => setIsModalViewPartnerOpen(true)}>
            <div className='partner_img'>
                <img src={partnerImage} alt="Foto do parceiro" />
            </div>

            <div className="info_card">
                <h2>{partnerName}</h2>
                <p>{partnerResponsibilityName} - {partnerStatus}</p>
            </div>

            <div className='teste'>

                <button className='button_green' onClick={() => {navigate('/Members', {
                    state: {
                        partnerId: partnerId,
                        partnerStatus: partnerStatus
                        }
                    })}}> Visualizar membros </button>
            </div>

        </td>

        

        <ModalViewPartner
                partnerImage={partnerImage}
                partnerName={partnerName}
                partnerStatus={partnerStatus}
                partnerType={partnerType}
                partnerPrivacy={partnerPrivacy}
                partnerAmount={partnerAmount}
                partnerContact={partnerContact}
                partnerResponsible={partnerResponsibilityName}
                partnerState={partnerState}
                isOpen={isModalViewPartnerOpen}
                setModalOpen={() => setIsModalViewPartnerOpen(!isModalViewPartnerOpen)
                }
                partnerId={partnerId}
            />        
                </>
    )
}