import { useState } from 'react';

import Logo from '../../assets/images/Logo.svg';
import bg from '../../assets/images/bg_login.png'
import { Eye, EyeClosed } from 'phosphor-react';

import './style.scss'
import { useNavigate } from 'react-router-dom';

export function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function handleShowPassword() {
        setShowPassword(!showPassword);
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
                                disabled
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
                                disabled
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

                        <button type="submit" onClick={() => navigate('/home')}>Entrar</button>
                    </form>
                </main>
            </div>
            <img src={bg} alt="Plano de fundo do login" className='bg_login'/>
        </div>
    )
}
