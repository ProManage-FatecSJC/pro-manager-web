import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Highcharts from 'highcharts';


import './style.scss'
import api from "../../api/api";
import { URI } from "../../api/uri";

export function Dashboard() {

  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const chartRef = useRef(null);
  const chartRef2 = useRef(null)
  const chartRef3 = useRef(null)
  const chartRef4 = useRef(null)
  const chartRef5 = useRef(null)
  const token = localStorage.getItem('token')
  const [partner, setPartner]: any[] = useState([]);
  const [member, setMember]: any[] = useState([]);

  useEffect(() => {
    api.get(URI.PARTNER, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setPartner(response.data);
      })
  },[])

  useEffect(() => {
    api.get(URI.MEMBERS, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        setMember(response.data);
      })
  },[])

  useEffect(() => {

    const partnersEmProspec = partner.filter((x: any) => x.status == 0).length
    const partnersPrimeiroContato = partner.filter((x: any) => x.status == 1).length
    const partnersPrimeiraReuniao = partner.filter((x: any) => x.status == 2).length
    const partners4 = partner.filter((x: any) => x.status == 3).length
    const partners5 = partner.filter((x: any) => x.status == 4).length
    const partners6 = partner.filter((x: any) => x.status == 5).length
    const partners7 = partner.filter((x: any) => x.status == 6).length
    const partners8 = partner.filter((x: any) => x.status == 7).length
    const partners9 = partner.filter((x: any) => x.status == 8).length
    const partners10 = partner.filter((x: any) => x.status == 9).length
    const partners11 = partner.filter((x: any) => x.status == 10).length

    const xAxis = ["Em prospecção",
      "Primeiro contato feito",
      "Primeira reunião marcada/realizada",
      "Documentação enviada/em análise(Parceiro)",
      "Documentação devolvida (Em análise Academy)",
      "Documentação devolvida (Em análise Legal)",
      "Documentação Analisada devolvida (Parceiro)",
      "Em preparação de Executive Summary (Academy)",
      "ES em análise (Legal)",
      "ES em análise (Academy Global)",
      "Pronto para assinatura",
      "Parceria Firmada"]

    const chartData = [{ name: xAxis[0], y: partnersEmProspec }, { name: xAxis[1], y: partnersPrimeiroContato }, { name: xAxis[2], y: partnersPrimeiraReuniao },
    { name: xAxis[3], y: partners4 }, { name: xAxis[4], y: partners5 }, { name: xAxis[5], y: partners6 }, { name: xAxis[6], y: partners7 }, { name: xAxis[7], y: partners8 },
    { name: xAxis[8], y: partners9 }, { name: xAxis[9], y: partners10 }, { name: xAxis[10], y: partners11 }]

    // Configurações do gráfico
    const area = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'PARCEIROS'
      },
      series: [{
        data: chartData
      }]
    };

    const pieChart = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'PARCEIROS'
      },
      series: [{
        data: chartData
      }]
    };

    const bar = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'PARCEIROS'
      },
      series: [{
        data: chartData
      }]
    };

    const line = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'PARCEIROS'
      },
      series: [{
        data: chartData
      }]
    };


    // Inicializa o gráfico
    Highcharts.chart(chartRef.current, area);
    Highcharts.chart(chartRef2.current, pieChart)
    Highcharts.chart(chartRef3.current, bar)
    Highcharts.chart(chartRef4.current, line)
    Highcharts.chart(chartRef5.current, line)
  }, []);

  const getName = () => {
    let token = localStorage.getItem('token')?.split(' ')[1] as string
    let tokenData = JSON.parse(atob(token.split('.')[1]))
    setUserName(tokenData.name)
  }

  useEffect(() => {
    getName()
  }, [])

  return (
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

        <div className="chartRow">

          <div ref={chartRef}></div>
          <div className="contador">
            <h3>Membros:</h3>
            <h4>{member.length}</h4>
          </div>
          <div ref={chartRef2}></div>

        </div>

        <div className="chartRow">

          <div ref={chartRef3}></div>
          <div ref={chartRef4}></div>
          <div ref={chartRef5}></div>
        </div>

        <div className="graphics-container">

          <button onClick={() => navigate('/partners')}>PARCEIROS</button>
        </div>
      </main>
    </div>
  )
}