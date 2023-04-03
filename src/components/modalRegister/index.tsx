import { X, UsersThree } from 'phosphor-react';
import './styles.scss';
import { useEffect, useState } from 'react';
import api from '../../api/api';
import { URI } from '../../api/uri';
import { useNavigate } from 'react-router-dom';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;

}

export function ModalRegister({ isOpen, setModalOpen }: ModalProps) {
    const [partnerName, setPartnerName] = useState('');
    const [partnerPrivacy, setPartnerPrivacy] = useState('');
    const [partnerType, setPartnerType] = useState('');
    const [partnerAmount, setPartnerAmount] = useState('');
    const [partnerStatus, setPartnerStatus] = useState('');
    const [partnerContact, setPartnerContact] = useState('');
    const [partnerResponsible, setPartnerResponsible] = useState('');
    const [partnerState, setPartnerState] = useState('');
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    let partner = {
        name: partnerName,
        privacy: parseInt(partnerPrivacy),
        type: parseInt(partnerType),
        membersQuantity: partnerAmount,
        status: partnerStatus,
        telephone: partnerContact,
        intermediateResponsible: partnerResponsible,
        state: partnerState
    }

    const handleNewPartner = async (e: any) => {
        e.preventDefault();
        api.
        post(URI.PARTNER, partner, {
            headers: {
                Authorization: token
            }
        })
        .then(response => {
            if(response.status == 200){
                window.location.reload()
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        function onEsc(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setModalOpen();
            }
        }
        window.addEventListener('keydown', onEsc);

        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [setModalOpen]);

    if (isOpen) {
        return (
            <div className='modal_wrapper'>
                <main>
                    <div className="head_line">
                        <div>
                            <UsersThree size={32} weight="fill" />
                            <div>
                                <h1>Adicionar um parceiro</h1>
                                <p>Coloque os dados do seu parceiro</p>
                            </div>
                        </div>
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />
                    </div>
                    <form onSubmit={handleNewPartner}>
                        <div className="form_content_wrapper">
                            <div className="input_wrapper">
                                <label htmlFor="name">Nome do parceiro</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder='Digite o nome do parceiro'
                                    onChange={e => setPartnerName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="privacy">Público ou privado</label>
                                <select
                                    name="privacy"
                                    id="privacy"
                                    onChange={e => setPartnerPrivacy(e.target.value)}
                                >
                                    <option>Selecione</option>
                                    <option value="0">Público</option>
                                    <option value="1">Privado</option>
                                </select>
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="type">Tipo do parceiro</label>
                                <select
                                    name="type"
                                    id="type"
                                    onChange={e => setPartnerType(e.target.value)}
                                >
                                    <option>Selecione</option>
                                    <option value="0">Único</option>
                                    <option value="1">Multiplo</option>
                                </select>
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="membersQuantity">Quantidade de membros</label>
                                <input
                                    id="membersQuantity"
                                    type="text"
                                    name="membersQuantity"
                                    placeholder='Digite a quantidade de membros'
                                    onChange={e => setPartnerAmount(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="status">Status</label>
                                <select
                                    name="status"
                                    id="status"
                                    onChange={e => setPartnerStatus(e.target.value)}
                                >
                                    <option value="0">Selecione</option>
                                    <option value="1">Em prospecção</option>
                                    <option value="2">Primeiro contato feito</option>
                                    <option value="3">Primeira reunião marcada/realizada</option>
                                    <option value="4">Documentação enviada/em análise (Parceiro)</option>
                                    <option value="5">Documentação devolvida (Em análise Academy)</option>
                                    <option value="6">Documentação devolvida (Em análise Legal)</option>
                                    <option value="7">Documentação analisada devolvida (Parceiro)</option>
                                    <option value="8">Em preparação de Executive Sumary (Academy)</option>
                                    <option value="9">ES em análise (Legal)</option>
                                    <option value="10">ES em análise (Academy Global)</option>
                                    <option value="11">Pronto para assinatura</option>
                                    <option value="12">Parceria Firmada</option>
                                </select>
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="telephone">Número de contato</label>
                                <input
                                    id="telephone"
                                    type="text"
                                    name="telephone"
                                    placeholder='Digite o número de contato'
                                    onChange={e => setPartnerContact(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="intermediateResponsible">Responsável</label>
                                <input
                                    id="intermediateResponsible"
                                    type="text"
                                    name="intermediateResponsible"
                                    onChange={e => setPartnerResponsible(e.target.value)}
                                    placeholder='Digite o nome do responsável'
                                    required
                                />
                            </div>

                            <div className="input_wrapper">
                                <label htmlFor="state">Estado em que se encontra</label>
                                <select
                                    name="state"
                                    id="state"
                                    onChange={e => setPartnerState(e.target.value)}                                
                                >
                                    <option>Selecione</option>
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
                            </div>
                        </div>
                        <button type="submit" className="btn_submit">Cadastrar parceiro</button>
                    </form>

                </main>
            </div>
        )
    };
    return null;
}