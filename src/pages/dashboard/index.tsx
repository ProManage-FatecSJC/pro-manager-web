import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import './style.scss'

export function Dashboard(){

    const navigate = useNavigate ()
    const [userName, setUserName] = useState('FULANO')

    // const getName = () => {
    //     let token = localStorage.getItem('token')?.split(' ')[1] as string
    //     let tokenData = JSON.parse(atob(token.split('.')[1]))
    //     setUserName(tokenData.name)
    // }

    // useEffect(() => {
    //     getName()
    // }, [])

    return(
        <div className="dashboard-container">
            <main>
                <header className="dashboard-header">
                    <h1>BEM VINDO, {userName}</h1>

                    <div className="filter-container">
                        <h2>Filtrar por:</h2>
                        <div className="filter-group">
                            <select name="" id="" className="filter"></select>
                            <select name="" id="" className="filter"></select>
                            <select name="" id="" className="filter"></select>
                        </div>
                    </div>
                </header>
                <div className="graphics-container">
                <button onClick={() => navigate('/partners')}>PARCEIROS</button>
                </div> 
            </main>
        </div>
    )
}