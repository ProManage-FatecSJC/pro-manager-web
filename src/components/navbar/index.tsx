import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SignOut, User, Users } from 'phosphor-react';
import { ModalUserProfile } from '../modalUserProfile';
import './styles.scss';

export function Navbar() {
  const [userRole, setUserRole] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const getRole = () => {
    let token = localStorage.getItem('token')?.split(' ')[1] as string;
    let tokenData = JSON.parse(atob(token.split('.')[1]));
    setUserRole(tokenData.role);
  };

  useEffect(() => {
    getRole();
  }, []);

  function handleSignOut() {
    localStorage.clear();
    navigate('/');
  }

  function handleUserIconClick() {
    setModalOpen(true);
    console.log(modalOpen)
  }

  return (
    <div className='nav_menu'>
      <h1>PROMANAGER</h1>
      <div className='icon_div'>
        <button name='userIcon' onClick={handleUserIconClick}>
          <User size={24} color='#f8f8f8' />
        </button>

        {userRole === 0 && (
          <button name='userplusIcon' onClick={() => navigate('users')}>
            <Users size={24} color='#f8f8f8' />
          </button>
        )}

        <button name='signoutIcon' onClick={handleSignOut}>
          <SignOut size={24} color='#f8f8f8' />
        </button>
      </div>

      <ModalUserProfile isOpen={modalOpen} setModalOpen={() => setModalOpen(!modalOpen)} />
    </div>
  );
}
