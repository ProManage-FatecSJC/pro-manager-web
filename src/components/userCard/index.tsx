export function UserCard({userImage, userName, userRole, userEmail, userId}: any) {
    return (
        <td className="container_card">
            <div className='partner_img'>
                <img src={userImage} alt="Foto do parceiro" />
            </div>

            <div className="info_card">
                <h2>{userName}</h2>
                <p>{userRole}</p>
                <p>{userEmail}</p>
            </div>
        </td>
    )
}