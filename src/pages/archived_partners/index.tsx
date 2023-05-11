import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { MagnifyingGlass } from "phosphor-react";

import './style.scss';

export function ArquivedPartners() {
    const navigate = useNavigate()
    const [searchTerm, setSearchTerm] = useState<string>('');

    return(
        <div className="register-container">
            <header className="table_header">
                <h1> Parceiros Arquivados </h1>
                <div className="search_bar_container">
                    <input placeholder="Pesquisar Parceiro Arquivado" onChange={(e) => setSearchTerm(e.target.value)}/>
                    <div className="search_icon">
                        <MagnifyingGlass size={24}/>
                    </div>
                </div>
                <button onClick={() => navigate('/partners')}>PARCEIROS</button>
                <button onClick={() => navigate('/dashboard')}>DASHBOARD</button>
            </header>
      </div>      
    )

}
