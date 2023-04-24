import { useState } from 'react';

import Logo from '../../assets/images/Logo.svg';
import bg from '../../assets/images/bg_login.png'
import { Eye, EyeClosed } from 'phosphor-react';

import './style.scss'
import { useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { URI } from '../../api/uri';

export function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    async function handleLogin(e: any) {
        e.preventDefault()
        let login = {
            email,
            password
        }
        api.post(URI.LOGIN, login).then(response => {
            if(response.status == 200){
                localStorage.setItem('token', 'Bearer ' + response.data.token)
                navigate('/dashboard')
            } else {
                throw new Error('Erro ao efetuar login')
            }
        })
    }
    
    return (
        <div id="page" className="flex">
            <div className="content_wrapper">
                <header>
                    <img src={Logo} alt="Logo pro manager" />
                </header>
                <main>
                    <div className="head_line">
                        <h1>Acesse a plataforma</h1>
                        <p>
                            Faça login para começar a organizar seus clientes ainda hoje.
                        </p>
                    </div>

                    <form action="">
                        <div className="input_wrapper">
                            <label htmlFor="email">E-mail</label>
                            <input
                                id="email"
                                type="email"
                                name="name"
                                placeholder='Digite seu e-mail'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="input_wrapper">
                            <div className="label_wrapper">
                                <label htmlFor="password">Senha</label>
                                <a href="#">
                                    Esqueceu a senha?
                                </a>
                            </div>
                            <input
                                id="password" 
                                type={showPassword ? 'text' : 'password'} 
                                name="password"
                                placeholder='Digite sua senha'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            
                            {showPassword ?
                                (<Eye 
                                    size={20} 
                                    className="eye" 
                                    onClick={handleShowPassword}
                                />)
                                :
                                (<EyeClosed 
                                    size={20} 
                                    className="eye" 
                                    onClick={handleShowPassword}
                                />
                            )}
                        </div>

                        <button type="submit" onClick={async (e) => await handleLogin(e)}>Entrar</button>
                    </form>
                </main>
            </div>
            <img src={bg} alt="Plano de fundo do login" className='bg_login'/>
        </div>
    )
}
