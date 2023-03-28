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
                        <X size={32} weight="bold" onClick={setModalOpen} className="icon_exit"/>
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
                            <label htmlFor="privacyPartner">Publico ou privado</label>
                            <select>
                                <option>Selecione</option>
                                <option value="public">Publico</option>
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
                    </form>
                    <button type="submit" className="btn_submit">Cadastrar parceiro</button>
                </main>
            </div>
        )
    };
    return null;
}