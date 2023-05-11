import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import api from "../../api/api";
import { URI } from "../../api/uri";
import mock_avatar from '../../assets/images/avatar.svg';
import empty_image from '../../assets/images/Ilustração.svg';
import { MemberCard } from "../../components/memberCard";
import { MagnifyingGlass } from "phosphor-react";

import './style.scss';
import { ModalMemberRegister } from "../../components/modalMemberRegister";

interface Member {
    id: number
    name: string
    trade_name: string
    CNPJ: string
}

export function Members(){
    const navigate = useNavigate()
    const location = useLocation()
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [member, setMember]: any[] = useState([])
    const [searchTerm, setSearchTerm] = useState<string>('');
    const token = localStorage.getItem('token');

    const partnerId = location.state.partnerId


    useEffect(() => {
        console.log(partnerId)
        api
            .get(URI.MEMBERS + `/${partnerId}`, {
                headers: {
                    Authorization: token
                }
            })
            .then((response) => {
                setMember(response.data);
            })
    }, []);

    return(
        <div className="register-container">
            <header className="table_header">
                <h1> Membros </h1>
                <div className="search_bar_container">
                    <input placeholder="Pesquisar membro" onChange={(e) => setSearchTerm(e.target.value)}/>
                    <div className="search_icon">
                        <MagnifyingGlass size={24}/>
                    </div>
                </div>
                <button onClick={() => setIsRegisterModalOpen(true)}>Adicionar Membro</button>
                <button onClick={() => navigate('/partners')}>PARCEIROS</button>
                <button onClick={() => navigate('/dashboard')}>DASHBOARD</button>
            </header>
            <main>
            {
                    member.length === 0 ? (
                        <div className="empty_content">
                            <img src={empty_image} alt="" />
                            <div className="empty_description">
                                <h1>Nenhum membro cadastrado no momento</h1>
                                <p>clique em adicionar membro para poder visualizá-lo.</p>
                            </div>
                        </div>
                    ) : (
                        <table>
                            <tbody>
                                <tr>
                                    {member.map((member: any, index: any) => (
                                        <MemberCard
                                            key={index}
                                            image={mock_avatar}
                                            name={member.name}
                                            trade_name={member.trade_name}
                                            CNPJ={member.CNPJ}
                                        />
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    )
                }
            </main>

            <ModalMemberRegister 
                isOpen ={isRegisterModalOpen}
                setModalOpen={() => setIsRegisterModalOpen(!isRegisterModalOpen)}
                partnerId={partnerId}
            />
        </div>
    )
}