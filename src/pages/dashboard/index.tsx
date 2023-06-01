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
  const chartRef6 = useRef(null)
  const chartRef7 = useRef(null)
  const token = localStorage.getItem('token')
  const [partner, setPartner]: any[] = useState([]);
  const [member, setMember]: any[] = useState([]);

  let filter = {
    privacy: 2,
    type: 2,
    state: 'all'
  }

  useEffect(() => {
    api.post(URI.PARTNER + '/byFiltro', filter, {
      headers: {
        Authorization: token
      }
    })
      .then((response) => {
        console.log(filter)
        console.log(response.data)
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

    const bars = {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'MEMBROS'
      },
      series: [{
        data: chartData
      }]
    };

    const pie = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'MEMBROS'
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
    Highcharts.chart(chartRef6.current, bars)  
    Highcharts.chart(chartRef7.current, pie)
  });

  const getName = () => {
    let token = localStorage.getItem('token')?.split(' ')[1] as string
    let tokenData = JSON.parse(atob(token.split('.')[1]))
    setUserName(tokenData.name)
  }

  useEffect(() => {
    getName()
  }, [])

  const changeState = (value: string) => {
    filter.state = value

    api.post(URI.PARTNER + '/byFiltro', filter, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setPartner(response.data);
    })
  }

  const changeType = (value: string) => {
    filter.type = parseInt(value)

    api.post(URI.PARTNER + '/byFiltro', filter, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setPartner(response.data);
    })
  }

  const changePrivacy = (value: string) => {
    filter.privacy = parseInt(value)

    api.post(URI.PARTNER + '/byFiltro', filter, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setPartner(response.data);
    })
  }

  return (
    <div className="dashboard-container">
      <main>
        <header className="dashboard-header">
          <h1>BEM VINDO, {userName}</h1>

          <div className="filter-container">
            <h2>Filtrar por:</h2>
            <div className="filter-group">
              <select name="" id="" className="filter" onChange={(e) => changeState(e.target.value)}>

                        <option value="all">Estados</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>

              </select>


              
              <select name="" id="" className="filter" onChange={(e) => changeType(e.target.value)}>

              <option value="2">Tipo</option>
              <option value="0">Único</option>
              <option value="1">Múltiplo</option>

              </select>

              <select name="" id="" className="filter" onChange={(e) => changePrivacy(e.target.value)}>

              <option value="2">Privacidade</option>
              <option value="0">Privado</option>
              <option value="1">Público</option>

              </select>
            </div>
          </div>
        </header>

        <div className="chartRow">

          <div ref={chartRef}></div>
          <div className="contador">
            <h1>Membros:</h1>
            <h1>{member.length}</h1>
          </div>
          <div ref={chartRef2}></div>

        </div>

        <div className="graphics-container">
          <div ref={chartRef3}></div>
          <div ref={chartRef4}></div>
          <div ref={chartRef5}></div>
        </div>

        <div className="member-graphics">
         <div ref={chartRef6}></div>
         <div ref={chartRef7}></div>

        </div>

        <div className="buttonFooter">
          <button onClick={() => navigate('/partners')}>PARCEIROS</button>
        </div>
      </main>
    </div>
  )
}