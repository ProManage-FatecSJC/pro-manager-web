import './styles.scss'

type PartnerCardTypes = {
    partnerImage?: string;
    partnerResponsibilityImage?: string;
    partnerName: string;
    partnerResponsibilityName: string;
    partnerStatus: string;
}

export function PartnerCard({partnerImage, partnerResponsibilityImage, partnerName, partnerResponsibilityName, partnerStatus}: PartnerCardTypes) {
    return (
        <button className="container_card">
            <div className='partner_img'>
                <img src={partnerImage} alt="Foto do parceiro" />
            </div>

            <div className="info_card">
                <h2>{partnerName}</h2>
                <p>{partnerResponsibilityName} - {partnerStatus}</p>
            </div>

            <div  className='partner_responsibility_img'>
                <img src={partnerResponsibilityImage} alt="Foto do responsável" />
            </div>
        </button>
    )
}