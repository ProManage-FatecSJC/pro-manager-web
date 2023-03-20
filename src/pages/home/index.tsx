import { FileSearch } from 'phosphor-react';
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
                            <th className='th_name'>Nome</th>
                            <th className='th_email'>E-mail</th>
                            <th className='th_edit'>Editar</th>
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