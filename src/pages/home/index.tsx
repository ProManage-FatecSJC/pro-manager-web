import { useEffect, useState } from 'react';

import { URI } from '../../api/uri';
import api from '../../api/api';
import unidecode from 'unidecode';

import { MagnifyingGlass } from 'phosphor-react';
import { PartnerCard } from '../../components/partnerCard';
import { ModalRegister } from '../../components/modalRegister';
import empty_image from '../../assets/images/Ilustração.svg'

import './style.scss';

interface Partner {
    id: number;
    name: string;
    trade_name: string;
    status: string;
}

export function Home() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [partner, setPartner] = useState<Partner[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        api
            .get(URI.PARTNER)
            .then((response) => {
                setPartner(response.data);
            })
    }, []);

    const filteredPartner = partner.filter((p) => {
        const nameMatch = unidecode(p.name).toLowerCase().includes(unidecode(searchTerm).toLowerCase());
        const statusMatch = unidecode(p.status).toLowerCase().includes(unidecode(searchTerm).toLowerCase());
        const responsibleNameMatch = unidecode(p.trade_name).toLowerCase().includes(unidecode(searchTerm).toLowerCase());
        return nameMatch || statusMatch || responsibleNameMatch;
      });

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
                            <option value="active">Em prospecção</option>
                            <option value="active">Primeiro contato feito</option>
                            <option value="active">Primeira reunião marcada/realizada</option>
                            <option value="active">Documentação enviada/em análise (Parceiro)</option>
                            <option value="active">Documentação devolvida (Em análise Academy)</option>
                            <option value="active">Documentação devolvida (Em análise Legal)</option>
                            <option value="active">Documentação analisada devolvida (Parceiro)</option>
                            <option value="active">Em preparação de Executive Sumary (Academy)</option>
                            <option value="active">ES em análise (Legal)</option>
                            <option value="active">ES em análise (Academy Global)</option>
                            <option value="active">Pronto para assinatura</option>
                            <option value="active">Parceria Firmada</option>
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
                    {filteredPartner.length === 0 ? (
                        <tbody className='empty_table'>
                            <div className="empty_content">
                                <img src={empty_image} alt="" />
                                <div className="empty_description">
                                    <h1>Nenhum parceiro cadastrado no momento</h1>
                                    <p>clique em adicionar parceiro para poder visualiza-lo.</p>
                                </div>
                            </div>
                        </tbody>
                    ) : (
                        <tbody>
                            <tr>
                                {filteredPartner.map((member, index) => (
                                    <PartnerCard
                                        key={index}
                                        partnerName={member.name}
                                        partnerResponsibilityName={member.trade_name}
                                        partnerStatus={member.status}
                                    />
                                ))}
                            </tr>
                        </tbody>
                    )}
                </table>
            </main>

            <ModalRegister
                isOpen={isRegisterModalOpen}
                setModalOpen={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
            />
        </div>
    )
}