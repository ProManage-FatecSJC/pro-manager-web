import { useNavigate } from "react-router-dom";
import { UserCard } from "../../components/userCard";
import mock_avatar from '../../assets/images/avatar.svg';
import mock_avatar_2 from '../../assets/images/avatar_2.svg';
import empty_image from '../../assets/images/Ilustração.svg';
import { MagnifyingGlass } from "phosphor-react";
import { useEffect, useState } from "react";
import diacritics from 'diacritics';
import api from "../../api/api";
import { URI } from "../../api/uri";
import { ERole } from "../../enum/ERole";
import { ModalUserRegister } from "../../components/modalUserRegister";

export function Users() {
    const navigate = useNavigate()
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [user, setUser] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredUser, setFilteredUser] = useState<any[]>([]);
    const token = localStorage.getItem('token')
    const [alphaOrderFilter, setAlphaOrderFilter] = useState('all');

    useEffect(() => {
        let filteredPartners = user.filter(p => p.isArchived != true);

        // filter by status if a status is selected

        // sort by alphabetical order if an option is selected
        if (alphaOrderFilter === 'ascending') {
            filteredPartners.sort((a, b) => a.name.localeCompare(b.name));
        } else if (alphaOrderFilter === 'descending') {
            filteredPartners.sort((a, b) => b.name.localeCompare(a.name));
        }

        // filter by search term
        filteredPartners = filteredPartners.filter(
            p =>
                diacritics
                    .remove(p.name)
                    .toLowerCase()
                    .includes(diacritics.remove(searchTerm).toLowerCase())
        );

        setFilteredUser(filteredPartners);
    }, [user, searchTerm, alphaOrderFilter]);

    useEffect(() => {
        api
            .get(URI.USERS, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setUser(response.data);
            })
    }, []);

    return(
        <div className="register-container">
            <header className='table_header'>
                <h1>Usuários</h1>
                <div className='search_bar_container'>
                    <input placeholder='Pesquisar usuário' onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="search_icon">
                        <MagnifyingGlass size={24} />
                    </div>
                </div>
                <button onClick={() => setIsUserModalOpen(true)}>Adicionar Usuário</button>
                <button onClick={() => navigate('/dashboard')}>DASHBOARD</button>
            </header>
            <div className="filter_container">
                <div className="filter">
                    <label htmlFor="alphaOrder">Ordem alfabética</label>
                    <select
                        name="alphaOrder"
                        id="alphaOrder"
                        value={alphaOrderFilter}
                        onChange={e => setAlphaOrderFilter(e.target.value)}
                    >
                        <option value="all">Selecione</option>
                        <option value="ascending">De A a Z</option>
                        <option value="descending">De Z a A</option>
                    </select>
                </div>
            </div>
            <main>
                {
                    filteredUser.length === 0 ? (
                        <div className="empty_content">
                            <img src={empty_image} alt="" />
                            <div className="empty_description">
                                <h1>Nenhum usuário cadastrado no momento</h1>
                                <p>clique em adicionar usuário para poder visualizá-lo.</p>
                            </div>
                        </div>
                    ) : (
                        <table>
                            <tbody>
                                <tr>
                                    {filteredUser.map((member, index) => (
                                        <UserCard
                                            key={index}
                                            userName={member.name}
                                            userEmail={member.email}
                                            userRole={ERole[member.role]}
                                            userImage={mock_avatar}
                                            userId={member.id}
                                        />
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </main>
            
            <ModalUserRegister
                isOpen={isUserModalOpen}
                setModalOpen={() => setIsUserModalOpen(!isUserModalOpen)}
            />
        </div>

        
    );
}