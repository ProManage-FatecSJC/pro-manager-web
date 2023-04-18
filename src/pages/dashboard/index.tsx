import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Highcharts from 'highcharts';


import './style.scss'

export function Dashboard(){

    const navigate = useNavigate ()
    const [userName, setUserName] = useState('')
    const chartRef = useRef(null);
    const chartRef2 = useRef(null)

  useEffect(() => {
    // Configurações do gráfico
    const options = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'GRÁFICO DE TESTE'
      },
      series: [{
        data: [1, 2, 9, 4, 5]
      }]
    };
  
    const options2 = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'GRÁFICO DE TESTE 2'
      },
      series: [{
        data: [1, 2, 9, 4, 5]
      }]
    };


    // Inicializa o gráfico
    Highcharts.chart(chartRef.current, options);
    Highcharts.chart(chartRef2.current, options2)
  }, []);

    // const getName = () => {
    //      let token = localStorage.getItem('token')?.split(' ')[1] as string
    //      let tokenData = JSON.parse(atob(token.split('.')[1]))
    //      setUserName(tokenData.name)
    //  }

    //  useEffect(() => {
    //      getName()
    //  }, [])

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

                <div className="dashboard">

                <div ref={chartRef}></div>
                <div ref={chartRef2}></div>

                </div>

                <div className="graphics-container">
               
                <button onClick={() => navigate('/partners')}>PARCEIROS</button>
                </div> 
            </main>
        </div>
    )
}