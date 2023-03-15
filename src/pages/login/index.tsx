import './style.scss'

import { EyeClosed, Eye } from 'phosphor-react';
import { NavLink } from "react-router-dom";

import Logo from '../../assets/images/logo.svg'
import Background from '../../assets/images/loginPageImage.svg'
import { useState } from 'react';

export function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    function goToHome() {
        setShowPassword(showPassword)
    }

    function handleCheck(event: any) {
        if (isDisabled) {
            event.preventDefault();
        }
    }

    return (
        <div className='container'>
            <div className='loginGrid'>
                <div className="header_title">
                    <img src={Logo} alt="Logo pro manager." />
                    <h1>PROMANAGER</h1>
                </div>
                <aside>
                    <h1>Seja bem vindo</h1>

                    <form action="">
                        <div className='input_form_container'>
                            <label htmlFor="">E-mail</label>
                            <input type="text" placeholder='Insira seu email' />
                        </div>

                        <div className='input_form_container'>
                            <label htmlFor="">Senha</label>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Insira sua senha' />
                            {showPassword ? <Eye size={30} className='iconPass' onClick={handleShowPassword} /> : <EyeClosed size={30} className='iconPass' onClick={handleShowPassword} />}
                        </div>

                        <NavLink to='/home' className='nav_link_button' onClick={handleCheck}>Acesse a plataforma</NavLink>

                    </form>
                </aside>
            </div>

            <div className='loginGrid'>
                <img src={Background} alt="" />
            </div>
        </div>
    )
}

