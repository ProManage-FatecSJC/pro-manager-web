import { Bell, User } from 'phosphor-react';
import { useState } from 'react';
import './styles.scss'

export function Navbar() {
    const [iconBellFill, setIconBellFill] = useState(false);
    const [iconUserFill, setIconUserFill] = useState(false);

    function handleIconFill(event: React.MouseEvent<HTMLButtonElement>) {
        switch (event.currentTarget.name) {
            case 'bellIcon':
                setIconBellFill(!iconBellFill);
                break;
            case 'userIcon':
                setIconUserFill(!iconUserFill);
                break;
        }
    }

    return (
        <div className='nav_menu'>
            <h1>PROMANAGER</h1>
            <div className='icon_div'>
                <button name='bellIcon' onClick={handleIconFill}>
                    {iconBellFill ? <Bell size={24} weight='fill' color='#f8f8f8'/> : <Bell size={24} color='#f8f8f8'/>}
                </button>

                <button name='userIcon' onClick={handleIconFill}>
                    {iconUserFill ? <User size={24} weight='fill' color='#f8f8f8'/> : <User size={24} color='#f8f8f8'/>}
                </button>
            </div>
        </div>
    )
}