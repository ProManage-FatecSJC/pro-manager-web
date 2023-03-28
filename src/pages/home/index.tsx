import { useEffect, useState } from 'react';

import { MagnifyingGlass } from 'phosphor-react';
import { PartnerCard } from '../../components/partnerCard';
import './style.scss';
import { URI } from '../../api/uri';
import api from '../../api/api';
import { ModalRegister } from '../../components/modalRegister';

interface Partner {
    id: number;
    name: string;
    trade_name: string;
    status: string;
}

export function Home() {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [partner, setPartner] = useState<Partner[]>([]);
    
    useEffect(() => {
        api
        .get(URI.PARTNER)
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
                        <input placeholder='Pesquisar parceiro' />
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
                    <tbody>
                            <tr>
                            {partner.map((member, index) => (
                                <PartnerCard
                                    key={index}
                                    partnerName={member.name}
                                    partnerResponsibilityName={member.trade_name}
                                    partnerStatus={member.status}
                                />
                                ))}
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

