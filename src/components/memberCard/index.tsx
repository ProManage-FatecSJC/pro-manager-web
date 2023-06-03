import './styles.scss'
import { useState } from 'react';
import { useEffect } from 'react'
import './styles.scss'
import { ModalRegister } from '../modalRegister';
import { ModalMemberRegister } from '../modalMemberRegister';
import { ModalViewPartner } from '../ModalViewPartner';
import { useNavigate } from 'react-router-dom';
import { ModalViewMember } from '../ModalViewMember';

type MemberCardTypes = {
    image: any
    name: string
    trade_name: string
    CNPJ: string
    telephone: string
}

export function MemberCard({ image, name, trade_name, CNPJ, telephone }: MemberCardTypes) {

    const [isModalViewMemberOpen, setIsModalViewMemberOpen] = useState(false);
    const navigate = useNavigate()


    return (
        <>
            <td className="container_card" onClick={() => setIsModalViewMemberOpen(true)}>
                <div className='partner_img'>
                    <img src={image} alt="Foto do parceiro" />
                </div>

                <div className="info_card">
                    <h2>{name}</h2>
                    <p>Nome fantasia: {trade_name}</p>
                    <p>CNPJ: {CNPJ}</p>
                </div>
            </td>

            <ModalViewMember
                image={image}
                isOpen={isModalViewMemberOpen}
                name={name}
                trade_name={trade_name}
                CNPJ={CNPJ}
                telephone={telephone}
                setModalOpen={() => setIsModalViewMemberOpen(!isModalViewMemberOpen)}
            />
        </>
    )
}