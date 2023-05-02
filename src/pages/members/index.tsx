import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './style.scss';

interface Member {
    id: number
    name: string
    trade_name: string
    CNPJ: string
}

export function Members(){
    const navigate = useNavigate()
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const token = localStorage.getItem('token');

    return(
        <>
        </>
    )
}