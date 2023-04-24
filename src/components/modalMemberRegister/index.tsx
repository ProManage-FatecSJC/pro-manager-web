import { useEffect, useState } from "react";
import api from "../../api/api";
import './styles.scss';
import { URI } from "../../api/uri";
import { useNavigate } from "react-router-dom";
import { X, UsersThree } from 'phosphor-react';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    partnerId: any
}

export function ModalMemberRegister({ isOpen, setModalOpen, partnerId }: ModalProps) {
    const [memberName, setMemberName] = useState('');
    const [memberTradeName, setMemberTradeName] = useState('');
    const [memberCNPJ, setMemberCNPJ] = useState('');
    const [memberTelephone, setMemberTelephone] = useState('');
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    let member = {
        name: memberName,
        trade_name: memberTradeName,
        CNPJ: memberCNPJ,
        telephone: memberTelephone,
        partner: {
            id: partnerId
        }
    }

    const handleNewMember= async (e: any) => {
        e.preventDefault();
        api.
            post(URI.MEMBERS, member, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                if (response.status == 200) {
                    window.location.reload()
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    useEffect(() => {
        function onEsc(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setModalOpen();
            }
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [setModalOpen]);

    if (isOpen) {
        return (
            <div className='modal_member_wrapper'>
                <main>
                    <div className="head_line">
                        <div>
                            <UsersThree size={32} weight="fill" />
                            <div>
                                <h1>Adicionar um membro</h1>
                                <p>Coloque os dados do seu membro</p>
                            </div>
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />
                    </div>
                    <form onSubmit={handleNewMember}>
                        <div className="form_content_wrapper">
                            <div className="input_wrapper">
                                <label htmlFor="name">Nome do membro</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o nome do membro'
                                    onChange={e => setMemberName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input_wrapper">
                                <label htmlFor="name">Nome fantasia do membro</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o nome fantasia do parceiro'
                                    onChange={e => setMemberTradeName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input_wrapper">
                                <label htmlFor="name">CNPJ do membro</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o nome do parceiro'
                                    onChange={e => setMemberCNPJ(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="input_wrapper">
                                <label htmlFor="name">Telefone do parceiro</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o telefone do parceiro'
                                    onChange={e => setMemberTelephone(e.target.value)}
                                    required
                                />
                            </div>

                        </div>
                        <button type="submit" className="btn_submit">Cadastrar membro</button>
                    </form>

                </main>
            </div>
        )
    };
    return null;
}