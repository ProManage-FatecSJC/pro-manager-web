type PartnerCardTypes = {
    partnerImage?: string;
    partnerResponsibilityImage?: string;
    partnerName: string;
    partnetResponsibilityName: string;
    partnerStatus: string;
}

export function PartnerCard({partnerImage, partnerResponsibilityImage, partnerName, partnetResponsibilityName, partnerStatus}: PartnerCardTypes) {
    return (
        <div>
            <img src={partnerImage} alt="Foto do parceiro" />
            <h1>{partnerName}</h1>
            <h2>{partnetResponsibilityName}</h2>
            <img src={partnerResponsibilityImage} alt="Foto do responsável" />

        </div>
    )
}