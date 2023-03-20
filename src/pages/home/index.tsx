import { MagnifyingGlass, ArrowUp, ArrowDown } from 'phosphor-react';
import { PartnerCard } from '../../components/partnerCard';
import avatar from '../../assets/images/avatar.svg';
import './style.scss';


export function Home() {
    return (
        <div className="register-container">
            <main>
                <header className='table_header'>
                    <h1>Parceiros</h1>
                    <div className='search_bar_container'>
                        <input placeholder='Pesquisar parceiro' />
                        <MagnifyingGlass size={32} className='search_icon' />
                    </div>
                    <button>Adicionar parceiro</button>
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
                            <PartnerCard
                                partnerImage={avatar}
                                partnerResponsibilityImage={avatar}
                                partnerName='Fatec SJC'
                                partnerStatus='ES em analise'
                                partnerResponsibilityName='Vinicius Buarque'
                            />
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}