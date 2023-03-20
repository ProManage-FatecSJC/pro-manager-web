import { useState } from 'react';
import './style.scss'

import { EyeClosed, Eye } from 'phosphor-react';
import { NavLink } from "react-router-dom";

import Logo from '../../assets/images/logo.svg';
import Background from '../../assets/images/undraw_selecting_team_re_ndkb.svg';


export function Login() {
    const [showPassword, setShowPassword] = useState(false)

    function handleShowPassword() {
        setShowPassword(!showPassword)
    }

    return (
        <div className='container'>
            <div className='loginGrid'>
                <div className="header_title">
                    <div className='header_logo'>
                        <img src={Logo} alt="Logo pro manager." />
                        <h1>PROMANAGER</h1>
                    </div>
                    <h1>Seja bem vindo</h1>
                </div>
                <aside>
                    <form action="">
                        <div className='input_form_container'>
                            <label htmlFor="">E-mail</label>
                            <input type="text" placeholder='Insira seu email' />
                        </div>

                        <div className='input_form_container'>
                            <label htmlFor="">Senha</label>
                            <input type={showPassword ? 'text' : 'password'} placeholder='Insira sua senha' />
                            {showPassword ? <Eye size={24} className='iconPass' onClick={handleShowPassword} /> : <EyeClosed size={24} className='iconPass' onClick={handleShowPassword} />}
                        </div>
                    </form>
                </aside>
                <NavLink to='/home' className='nav_link_button'>Acesse a plataforma</NavLink>
            </div>

            <div className='loginGrid'>
                <img src={Background} alt="" />
            </div>
        </div>
    )
}

