import { X, UsersThree } from 'phosphor-react';
import './styleModalArchivePartner.scss';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import { useNavigate } from 'react-router-dom';
import { ModalError } from '../modalError';


type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    partnerId: string;
    partnerName: string;
}

export function ModalArchivePartner({ isOpen, setModalOpen, partnerId, partnerName }: ModalProps) {
    const [modalErrorOpen, setModalErrorOpen] = useState(false)
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const handleArchivePartner = async () => {
        api.put(URI.PARTNER + `/archive/${partnerId}`, {}, {
            headers: {
                Authorization: token
            }
        })
            .then(response => {
                if (response.status == 200) {
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
            <>
                <div className='modal_archive_user_wrapper'>
                    <main>
                        <div className="head_line">
                            <div>
                                <h1>Deseja arquivar o parceiro: {partnerName} ?</h1>
                            </div>
                        </div>
                        <div className="buttons_modal_archive">

                            <button className='btn_user_archive2' onClick={() => setModalOpen()}>
                                Não
                            </button>

                            <button className='btn_user_archive' onClick={() => handleArchivePartner()}>
                                Sim
                            </button>
                        </div>
                    </main>
                </div>
                <ModalError
                    isOpen={modalErrorOpen}
                    setModalOpen={() => setModalErrorOpen(!modalErrorOpen)}
                    errorMessage='Falha ao arquivar parceiro. Tente novamente mais tarde.'
                />
            </>

        )
    };
    return null;
}
