import { Bell, SignOut, User,  Users } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { ModalUserRegister } from '../../components/modalUserRegister';
import './styles.scss'
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const [iconBellFill, setIconBellFill] = useState(false);
    const [iconUserFill, setIconUserFill] = useState(false);
    const [iconUserPlusFill, setIconUserPlusFill] = useState(false);
    const [iconSignoutFill, setIconSignoutFill] = useState(false);
    const [userRole, setUserRole] = useState(null)
    const navigate = useNavigate()

    const getRole = () => {
        let token = localStorage.getItem('token')?.split(' ')[1] as string
        let tokenData = JSON.parse(atob(token.split('.')[1]))
        setUserRole(tokenData.role)
      }

      useEffect(() => {
        getRole()
      }, [])

    function handleIconFill(event: React.MouseEvent<HTMLButtonElement>) {
        switch (event.currentTarget.name) {

            case 'bellIcon':
                setIconBellFill(!iconBellFill);
            case 'userplusicon':
                setIconUserPlusFill(!iconUserPlusFill);
                break;
            case 'signoutIcon':
                setIconSignoutFill(!iconSignoutFill);
                localStorage.clear()
                navigate('/');
                break;
        }
    }

    return (
        <div className='nav_menu'>
            <h1>PROMANAGER</h1>
            <div className='icon_div'>
                <button name='userIcon' onClick={handleIconFill}>
                    {iconBellFill ? <Bell size={24} weight='fill' color='#f8f8f8'/> : <User size={24} color='#f8f8f8'/>}
                </button>

                <button name='bellIcon' onClick={handleIconFill}>
                    {iconUserFill ? <User size={24} weight='fill' color='#f8f8f8'/> : <Bell size={24} color='#f8f8f8'/>}
                </button>

                {userRole == 0 && 
                <button name='userplusIcon' onClick={() => navigate('users')}>
                    {iconUserFill ? <Users size={24} weight='fill' color='#f8f8f8'/> : <Users size={24} color='#f8f8f8'/>}
                </button>}

                <button name='signoutIcon' onClick={handleIconFill}>
                    {iconSignoutFill ? <SignOut size={24} weight='fill' color='#f8f8f8'/> : <SignOut size={24} color='#f8f8f8'/>}
                </button>

            </div>
        </div>
    )
    
}