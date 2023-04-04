import { useEffect, useState } from 'react';
import diacritics from 'diacritics';

import { URI } from '../../api/uri';
import api from '../../api/api';
import { EStatus } from '../../enum/EStatus';

import { MagnifyingGlass } from 'phosphor-react';
import { PartnerCard } from '../../components/partnerCard';
import { ModalRegister } from '../../components/modalRegister';
import mock_avatar from '../../assets/images/avatar.svg';
import mock_avatar_2 from '../../assets/images/avatar_2.svg';
import empty_image from '../../assets/images/Ilustração.svg';

import './style.scss';

interface Partner {
    id: number;
    name: string;
    intermediateResponsible: string;
    status: number;
}

export function Home() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [partner, setPartner] = useState<Partner[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const token = localStorage.getItem('token')
    const [filteredPartner, setFilteredPartner] = useState<Partner[]>([]);

    useEffect(() => {
        setFilteredPartner(
            partner.filter(
                (p) =>
                    diacritics
                        .remove(p.name)
                        .toLowerCase()
                        .includes(diacritics.remove(searchTerm).toLowerCase())
            )
        );
    }, [partner, searchTerm]);

    useEffect(() => {
        api
            .get(URI.PARTNER, {
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
            <main>
                <header className='table_header'>
                    <h1>Parceiros</h1>
                    <div className='search_bar_container'>
                        <input placeholder='Pesquisar parceiro' onChange={(e) => setSearchTerm(e.target.value)} />
                        <div className="search_icon">
                            <MagnifyingGlass size={24} />
                        </div>
                    </div>
                    <button onClick={() => setIsRegisterModalOpen(true)}>Adicionar parceiro</button>
                </header>
                <div className="filter_container">
                    <div className="filter">
                        <label htmlFor="status">Status</label>
                        <select name="status" id="status">
                            <option value="all">Todos</option>
                            <option value="0">Em prospecção</option>
                            <option value="1">Primeiro contato feito</option>
                            <option value="2">Primeira reunião marcada/realizada</option>
                            <option value="3">Documentação enviada/em análise (Parceiro)</option>
                            <option value="4">Documentação devolvida (Em análise Academy)</option>
                            <option value="5">Documentação devolvida (Em análise Legal)</option>
                            <option value="6">Documentação analisada devolvida (Parceiro)</option>
                            <option value="7">Em preparação de Executive Sumary (Academy)</option>
                            <option value="8">ES em análise (Legal)</option>
                            <option value="9">ES em análise (Academy Global)</option>
                            <option value="10">Pronto para assinatura</option>
                            <option value="11">Parceria Firmada</option>
                        </select>
                    </div>
                    <div className="filter">
                        <label htmlFor="status">Ordem alfabética</label>
                        <select name="status" id="status">
                            <option value="all">Todos</option>
                            <option value="active">De A a Z</option>
                            <option value="active">De Z a A</option>
                        </select>
                    </div>
                </div>
                <table>
                    <tbody>
                        <tr>
                            {filteredPartner.length === 0 ? (
                                <td colSpan={4} className='empty_table'>
                                    <div className="empty_content">
                                        <img src={empty_image} alt="" />
                                        <div className="empty_description">
                                            <h1>Nenhum parceiro cadastrado no momento</h1>
                                            <p>clique em adicionar parceiro para poder visualiza-lo.</p>
                                        </div>
                                    </div>
                                </td>
                            ) : (
                                filteredPartner.map((member, index) => (

                                    <PartnerCard
                                        key={index}
                                        partnerName={member.name}
                                        partnerResponsibilityName={member.intermediateResponsible}
                                        partnerStatus={EStatus[member.status]}
                                        partnerImage={mock_avatar}
                                        partnerResponsibilityImage={mock_avatar_2}
                                    />

                                ))
                            )}
                        </tr>
                    </tbody>
                </table>
            </main>

            <ModalRegister
                isOpen={isRegisterModalOpen}
                setModalOpen={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
            />
        </div>
    )
}