import './styles.scss'

type MemberCardTypes = {
    image: any
    name: string
    trade_name: string
    CNPJ: string
}

export function MemberCard({ image, name, trade_name, CNPJ }: MemberCardTypes){
    return (
        <><td className="container_card">
            <div className='partner_img'>
                <img src={image} alt="Foto do parceiro" />
            </div>

            <div className="info_card">
                <h2>{name}</h2>
                <p>Nome fantasia: {trade_name}</p>
                <p>CNPJ: {CNPJ}</p>
            </div>
        </td></>
    )
}