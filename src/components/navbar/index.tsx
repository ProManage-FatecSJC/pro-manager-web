import { Bell, User, UserPlus } from 'phosphor-react';
import { useState } from 'react';
import { ModalUserRegister } from '../../components/modalUserRegister';
import './styles.scss'

export function Navbar() {
    const [iconBellFill, setIconBellFill] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [iconUserFill, setIconUserFill] = useState(false);
    const [iconUserPlusFill, setIconUserPlusFill] = useState(false);

    function handleIconFill(event: React.MouseEvent<HTMLButtonElement>) {
        switch (event.currentTarget.name) {
         /*   case 'userIcon':
                setIconUserFill(!iconUserFill);

            case 'bellIcon':
                setIconBellFill(!iconBellFill);
            case 'userplusicon':
                setIconUserPlusFill(!iconUserPlusFill);
                break;*/
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

                <button name='userplusIcon' onClick={() => setIsUserModalOpen(true)}>
                    {iconUserFill ? <User size={24} weight='fill' color='#f8f8f8'/> : <UserPlus size={24} color='#f8f8f8'/>}
                </button>

            </div>

            <ModalUserRegister
                isOpen={isUserModalOpen}
                setModalOpen={() => setIsUserModalOpen(!isUserModalOpen)}
            />
        
        </div>
    )
    
}