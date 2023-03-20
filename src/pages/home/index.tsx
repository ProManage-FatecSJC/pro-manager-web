import { FileSearch } from 'phosphor-react';
import { PartnerCard } from '../../components/partnerCard';
import './style.scss';


export function Home() {
    return (
        <div className="register-container">
            <main>
                <header className='table_header'>
                    <h1>Parceiros</h1>
                    <button>Adicionar parceiro</button>
                </header>
                <table>
                    <thead>
                        <tr>
                            <PartnerCard
                            partnerName='Fatec SJC'
                            partnerStatus='ES em analise'
                            partnetResponsibilityName='Vinicius Buarque'
                            />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}