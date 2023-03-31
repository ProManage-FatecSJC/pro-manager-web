import { X, UsersThree } from 'phosphor-react';
import './styles.scss';

type ModalProps = {
    isOpen: boolean;
    setModalOpen: () => void;

}

export function ModalRegister({ isOpen, setModalOpen }: ModalProps) {


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
                    <form action="">
                        <div className="input_wrapper">
                            <label htmlFor="namePartner">Nome do parceiro</label>
                            <input
                                id="namePartner"
                                type="text"
                                name="namePartner"
                                placeholder='Digite o nome do parceiro'
                                required
                            />
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="privacyPartner">Público ou privado</label>
                            <select>
                                <option>Selecione</option>
                                <option value="public">Público</option>
                                <option value="private">Privado</option>
                            </select>
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="typePartner">Tipo do parceiro</label>
                            <select>
                                <option>Selecione</option>
                                <option value="public">Publico</option>
                                <option value="private">Privado</option>
                            </select>
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="amountPartner">Quantidade de membros</label>
                            <input
                                id="amountPartner"
                                type="text"
                                name="amountPartner"
                                placeholder='Digite a quantidade de membros'
                                required
                            />
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="status">Status</label>
                            <select name="status" id="status">
                                <option value="all">Todos</option>
                                <option value="active">Em prospecção</option>
                                <option value="active">Primeiro contato feito</option>
                                <option value="active">Primeira reunião marcada/realizada</option>
                                <option value="active">Documentação enviada/em análise (Parceiro)</option>
                                <option value="active">Documentação devolvida (Em análise Academy)</option>
                                <option value="active">Documentação devolvida (Em análise Legal)</option>
                                <option value="active">Documentação analisada devolvida (Parceiro)</option>
                                <option value="active">Em preparação de Executive Sumary (Academy)</option>
                                <option value="active">ES em análise (Legal)</option>
                                <option value="active">ES em análise (Academy Global)</option>
                                <option value="active">Pronto para assinatura</option>
                                <option value="active">Parceria Firmada</option>
                            </select>
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="contactPartner">Número de contato</label>
                            <input
                                id="contactPartner"
                                type="text"
                                name="contactPartner"
                                placeholder='Digite o número de contato'
                                required
                            />
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="responsiblePartner">Responsável</label>
                            <input
                                id="responsiblePartner"
                                type="text"
                                name="responsiblePartner"
                                placeholder='Digite o nome do responsável'
                                required
                            />
                        </div>

                        <div className="input_wrapper">
                            <label htmlFor="typePartner">Estado em que se encontra</label>
                            <select>
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
                    </form>
                    <button type="submit" className="btn_submit">Cadastrar parceiro</button>
                </main>
            </div>
        )
    };
    return null;
}