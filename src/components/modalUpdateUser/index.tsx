import { X, UsersThree } from 'phosphor-react';
import './style.scss';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeClosed } from 'phosphor-react';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;

}

export function ModalUpdateUser({ isOpen, setModalOpen }: ModalProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [UserName, setUserName] = useState('');
    const [UserEmail, setUserEmail] = useState('');
    const [UserSenha, setUserSenha] = useState('');
    const [UserNivel, setUserNivel] = useState('');
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    let user = {
        name: UserName,
        email: UserEmail,
        password: UserSenha,
        role: parseInt(UserNivel),
    }

    const handleNewPartner = async (e: any) => {
        e.preventDefault();
        api.
        post(URI.REGISTER, user, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            if(response.status == 200){
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
            <div className='modal_user_wrapper'>
                <main>
                    <div className="header_line">
                        <div>
                            <UsersThree size={32} weight="fill" />
                            <div>
                                <span>Atualização de Usuário</span>
                                <p>Coloque os dados do seu Usuário </p>
                            </div>
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />
                    </div>
                    <form onSubmit={handleNewPartner}>
                        <div className="form_user_content_wrapper">
                            <div className="input_user_wrapper">
                                <label htmlFor="name">Nome do Usuario</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o nome do Usuário'
                                    onChange={e => setUserName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form_user_content_wrapper">
                            <div className="input_user_wrapper">
                                <label htmlFor="email">e-Mail</label>
                                <input
                                    id="email"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o e-Email'
                                    onChange={e => setUserEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                            <div className="form_user_content_wrapper">
                            <div className="input_user_wrapper">
                                <label htmlFor="password">Senha</label>
                                
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder='Digite uma senha'
                                    onChange={e => setUserSenha(e.target.value)}
                                    required
                                />

                            {showPassword ?
                                (<Eye 
                                    size={20} 
                                    className="eyes" 
                                    onClick={handleShowPassword}
                                />)
                                :
                                (<EyeClosed 
                                    size={20} 
                                    className="eyes" 
                                    onClick={handleShowPassword}
                                />
                            )}
                            </div>

                        </div>
                            <div className="form_user_content_wrapper">
                            <div className="input_user_wrapper">
                                <label htmlFor="privacy">Nível de Acesos / Cargo</label>
                                <select
                                    name="acesso"
                                    id="acesso"
                                    onChange={e => setUserNivel(e.target.value)}
                                >
                                    <option>Selecione</option>
                                    <option value="0">Administrador</option>
                                    <option value="1">Observador</option>
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