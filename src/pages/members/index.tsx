import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss';
import api from "../../api/api";
import { URI } from "../../api/uri";
import mock_avatar from '../../assets/images/avatar.svg';
import empty_image from '../../assets/images/Ilustração.svg';
import { MemberCard } from "../../components/memberCard";

interface Member {
    id: number
    name: string
    trade_name: string
    CNPJ: string
}

export function Members(){
    const navigate = useNavigate()
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [member, setMember]: any[] = useState([])
    const token = localStorage.getItem('token');

    useEffect(() => {
        api
            .get(URI.MEMBERS, {
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
            <header className="table-header">
                <h1> Membros </h1>
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
        </div>
    )
}