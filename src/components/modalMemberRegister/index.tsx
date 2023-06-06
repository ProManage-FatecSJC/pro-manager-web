import { useEffect, useState } from "react";
import api from "../../api/api";
import './styles.scss';
import { URI } from "../../api/uri";
import { useNavigate } from "react-router-dom";
import { X, UsersThree } from 'phosphor-react';
import { IMaskInput } from "react-imask";
import { ModalError } from "../modalError";

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;
    partnerId: any
}

export function ModalMemberRegister({ isOpen, setModalOpen, partnerId }: ModalProps) {
    const [modalErrorOpen, setModalErrorOpen] = useState(false)
    const [memberName, setMemberName] = useState('');
    const [memberTradeName, setMemberTradeName] = useState('');
    const [memberCNPJ, setMemberCNPJ] = useState('');
    const [memberTelephone, setMemberTelephone] = useState('');
    const [memberCEP, setMemberCEP] = useState('');
    const [memberLogradouro, setMemberLogradouro] = useState('');
    const [memberNumero, setMemberNumero] = useState('');
    const [memberComplemento, setMemberComplemento] = useState('')
    const [memberEstado, setMemberEstado] = useState('')
    const [memberCidade, setMemberCidade] = useState('')
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    let member = {
        name: memberName,
        trade_name: memberTradeName,
        CNPJ: memberCNPJ,
        telephone: memberTelephone,
        address: {
            CEP: memberCEP,
            street: memberLogradouro,
            number: memberNumero,
            complement: memberComplemento,
            state: memberEstado,
            city: memberCidade
        },
        partner: {
            id: partnerId
        }
    }

    const handleNewMember = async (e: any) => {
        e.preventDefault();
        api.
            post(URI.MEMBERS, member, {
                headers: {
                    Authorization: token
                }
            })
            .then(response => {
                if (response.status == 200) {
                    window.location.reload()
                }
            })
            .catch(error => {
                setModalErrorOpen(true)
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
            <>
                <div className='modal_wrapper'>
                    <main>
                        <div className="head_line">
                            <div>
                                <UsersThree size={32} weight="fill" />
                                <div>
                                    <h1>Adicionar um membro</h1>
                                    <p>Coloque os dados do seu membro</p>
                                </div>
                            </div>
                            <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit" />
                        </div>
                        <form onSubmit={handleNewMember}>
                            <div className="form_content_wrapper">
                                <div className="input_wrapper">
                                    <label htmlFor="name">Nome do membro</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder='Digite o nome do membro'
                                        onChange={e => setMemberName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="trade_name">Nome fantasia do membro</label>
                                    <input
                                        id="trade_name"
                                        type="text"
                                        name="trade_name"
                                        placeholder='Digite o nome fantasia do parceiro'
                                        onChange={e => setMemberTradeName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="cnpj">CNPJ do membro</label>
                                    <IMaskInput
                                        mask={"00.000.000/0000-00"}
                                        id="cnpj"
                                        type="text"
                                        name="cnpj"
                                        placeholder='Digite o nome do parceiro'
                                        onChange={e => setMemberCNPJ(e.currentTarget.value)}
                                        required
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="telefone">Telefone do membro</label>
                                    <IMaskInput
                                        mask={"(00)00000-0000"}
                                        id="telefone"
                                        type="text"
                                        name="telefone"
                                        placeholder='Digite o telefone do parceiro'
                                        onChange={e => setMemberTelephone(e.currentTarget.value)}
                                        required
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="cep">CEP</label>
                                    <IMaskInput
                                        mask={"00000-000"}
                                        id="cep"
                                        type="text"
                                        name="cep"
                                        placeholder="Digite um cep; ex: 12246-190"
                                        onChange={e => setMemberCEP(e.currentTarget.value)}
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="logradouro">Logradouro</label>
                                    <input
                                        id="logradouro"
                                        type="text"
                                        name="logradouro"
                                        placeholder="Digite um logradouro; ex: Rua Lavapés"
                                        onChange={e => setMemberLogradouro(e.target.value)}
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="numero">Número</label>
                                    <input
                                        id="numero"
                                        type="text"
                                        name="numero"
                                        placeholder="Digite um número; ex: 281"
                                        onChange={e => setMemberNumero(e.target.value)}
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="complemento">Complemento</label>
                                    <input
                                        id="complemento"
                                        type="text"
                                        name="complemento"
                                        placeholder="Digite um complemento; ex: apto. 214"
                                        onChange={e => setMemberComplemento(e.target.value)}
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <label htmlFor="state">Estado em que se encontra</label>
                                    <select
                                        name="state"
                                        id="state"
                                        onChange={e => setMemberEstado(e.target.value)}
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
                                <div className="input_wrapper">
                                    <label htmlFor="cidade">Cidade</label>
                                    <input
                                        id="cidade"
                                        type="text"
                                        name="cidade"
                                        placeholder="Digite uma cidade; ex: Jacareí"
                                        onChange={e => setMemberCidade(e.target.value)}
                                    />
                                </div>

                            </div>
                            <button type="submit" className="btn_submit">Cadastrar membro</button>
                        </form>

                    </main>
                </div>
                <ModalError
                    isOpen={modalErrorOpen}
                    setModalOpen={() => setModalErrorOpen(!modalErrorOpen)}
                    errorMessage='Falha ao cadastrar membro. Verifique os dados e tente novamente.'
                />
            </>
        )
    };
    return null;
}