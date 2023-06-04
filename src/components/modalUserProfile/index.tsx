import { X, UsersThree } from 'phosphor-react';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeClosed } from 'phosphor-react';

import './styles.scss';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
}

export function ModalUserProfile({ isOpen, setModalOpen }: ModalProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [userId, setUserId] = useState('')
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserSenha, setUserSenha] = useState('');
    const [UserSenhaAtual, setUserSenhaAtual] = useState('');
    const [UserNivel, setUserNivel] = useState('');
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    function handleShowOldPassword() {
        setShowOldPassword(!showOldPassword);
    }

    let user = {
        name: UserName,
        email: UserEmail,
        oldPassword: UserSenhaAtual,
        password: UserSenha,
        role: UserNivel
    }

    const handleUpdatePartner = async (e: any) => {
        e.preventDefault();
        api.
            put(URI.USERS + `/${userId}`, user, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                if (response.status == 200) {
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGetPartner = async () => {
        if (isOpen) {
            let token2 = localStorage.getItem('token')?.split(' ')[1] as string
            let tokenData = JSON.parse(atob(token2.split('.')[1]))
            setUserId(tokenData.id)

            api.get(`${URI.USERS}/${userId}`, {
                headers: {
                    Authorization: token
                }
            }).then(res => {
                console.log(res.data)
                setUserName(res.data.name)
                setUserEmail(res.data.email)
                setUserNivel(res.data.role)
            })
        }
    }

    useEffect(() => {
        handleGetPartner()
    }, [isOpen])

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
            <div className='modal_update_user_wrapper'>
                <main>
                    <div className="header_line_wrapper">
                        <div>
                            <UsersThree size={32} weight="fill" />
                            <div>
                                <span>Perfil do usuário</span>
                                <p>Visualize seus dados</p>
                            </div>
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit_update" />
                    </div>
                    <form onSubmit={handleUpdatePartner}>
                        <div className="form_update_user_content_wrapper">
                            <div className="input_update_user_wrapper">
                                <label htmlFor="name">Nome do Usuario</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o nome do Usuário'
                                    onChange={e => setUserName(e.target.value)}
                                    value={UserName}
                                    required
                                />
                            </div>
                            <div className="input_update_user_wrapper">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    id="email"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o e-mail'
                                    onChange={e => setUserEmail(e.target.value)}
                                    value={UserEmail}
                                    disabled
                                />
                            </div>

                            <div className="input_update_user_wrapper">
                                <label htmlFor="senhaAtual">Senha atual</label>
                                <input
                                    id="senhaAtual"
                                    type="text"
                                    name="senhaAtual"
                                    placeholder='Digite a senha atual'
                                    onChange={e => setUserSenhaAtual(e.target.value)}
                                />
                            </div>

                            <div className="input_user_wrapper">
                                <label htmlFor="novaSenha">Nova senha</label>
                                <input
                                    id="novaSenha"
                                    type="text"
                                    name="novaSenha"
                                    placeholder='Digite a nova senha'
                                    onChange={e => setUserSenha(e.target.value)}
                                />
                            </div>

                            <div className="input_update_user_wrapper">
                                <label htmlFor="privacy">Nível de Acesos / Cargo</label>
                                <select
                                    name="acesso"
                                    id="acesso"
                                    onChange={e => setUserNivel(e.target.value)}
                                    value={UserNivel}
                                >
                                    <option>Selecione</option>
                                    <option value={0}>Administrador</option>
                                    <option value={1}>Observador</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn_user_submit">Cadastrar Usuário</button>
                    </form>

                </main>
            </div>
        )
    };
    return null;
}