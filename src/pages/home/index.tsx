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