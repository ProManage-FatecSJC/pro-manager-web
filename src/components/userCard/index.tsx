import { useState } from "react";
import { ModalUserRegister } from "../modalUserRegister";
import { ModalUpdateUser } from "../modalUpdateUser";

export function UserCard({userImage, userName, userRole, userEmail, userId}: any) {

    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    return (
        <>
        <td className="container_card">
            <div className='partner_img'>
                <img src={userImage} alt="Foto do parceiro" />
            </div>

            <div className="info_card">
                <h2>{userName}</h2>
                <p>{userRole}</p>
                <p>{userEmail}</p>
            </div>

            <div className='teste'>
                <button onClick={() => {setIsModalUpdateOpen(true)}}> Editar usuário </button>
            </div>

        </td>

        <ModalUpdateUser
            isOpen={isModalUpdateOpen}
            setModalOpen={() => setIsModalUpdateOpen(!isModalUpdateOpen)}
            userId={userId}/>
        </>
    )
}