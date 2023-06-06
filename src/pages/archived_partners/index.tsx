import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MagnifyingGlass } from "phosphor-react";
import diacritics from 'diacritics';

import mock_avatar from '../../assets/images/avatar.svg';
import mock_avatar_2 from '../../assets/images/avatar_2.svg';
import empty_image from '../../assets/images/Ilustração.svg';
import './style.scss';
import api from "../../api/api";
import { URI } from "../../api/uri";
import { PartnerCard } from "../../components/partnerCard";
import { EStatus } from "../../enum/EStatus";

export function ArquivedPartners() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredPartner, setFilteredPartner] = useState<any[]>([]);
    const token = localStorage.getItem('token')
    const [partner, setPartner] = useState<any[]>([]);

    useEffect(() => {
        let filteredPartners = partner;

        // filter by search term
        filteredPartners = filteredPartners.filter(
            p =>
                diacritics
                    .remove(p.name)
                    .toLowerCase()
                    .includes(diacritics.remove(searchTerm).toLowerCase())
        );

        setFilteredPartner(filteredPartners);
    }, [partner, searchTerm]);

    useEffect(() => {
        api
            .get(URI.PARTNER + '/archived', {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setPartner(response.data);
            })
    }, []);

    return (
        <div className="register-container">
            <header className="table_header">
                <h1> Parceiros Arquivados </h1>
                <div className="search_bar_container">
                    <input placeholder="Pesquisar Parceiro Arquivado" onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="search_icon">
                        <MagnifyingGlass size={24} />
                    </div>
                </div>
                <button onClick={() => navigate('/partners')}>PARCEIROS</button>
                <button onClick={() => navigate('/dashboard')}>DASHBOARD</button>
            </header>
            <main>
                {
                    filteredPartner.length === 0 ? (
                        <div className="empty_content">
                            <img src={empty_image} alt="" />
                            <div className="empty_description">
                                <h1>Nenhum parceiro cadastrado no momento</h1>
                                <p>clique em adicionar parceiro para poder visualiza-lo.</p>
                            </div>
                        </div>
                    ) : (
                        <table>
                            <tbody>
                                <tr>
                                    {filteredPartner.map((member, index) => (
                                        <PartnerCard
                                            key={index}
                                            partnerPrivacy={member.privacy}
                                            partnerType={member.type}
                                            partnerAmount={member.membersQuantity}
                                            partnerContact={member.telephone}
                                            partnerState={member.state}
                                            partnerName={member.name}
                                            partnerResponsibilityName={member.intermediateResponsible}
                                            partnerStatus='ARQUIVADO'
                                            partnerImage={mock_avatar}
                                            partnerResponsibilityImage={mock_avatar_2}
                                            partnerId={member.id}
                                            partnerResponsible={member.Responsible}
                                            isArchived={true}
                                        />
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </main>
        </div>
    )

}
