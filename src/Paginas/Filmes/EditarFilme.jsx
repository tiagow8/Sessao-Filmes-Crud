import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MensagemSucesso from "../../Componentes/Mensagem/MensagemSucesso";
import MensagemErro from "../../Componentes/Mensagem/MensagemErro";
import editarFilme from '../../imagens/editar-filme.png'

const EditarFilme = () => {

    const { Id } = useParams();
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [lancamento, setLancamento] = useState('');
    const [avaliacao, setAvaliacao] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:3000/filmes/` + id)
            .then((resposta) => {
                setId(resposta.data.id);
                setNome(resposta.data.nome);
                setDescricao(resposta.data.descricao);
                setLancamento(resposta.data.lancamento);

            })
    }, [id])

    const salvar = (evento) => {
        evento.preventDefault();

        const filmeEditado = {
            id,
            nome, 
            descricao,
            lancamento,
            avaliacao
        }

        axios.put(`http://localhost:3000/filmes/` + id, filmeEditado)
            .then((resposta) => {
                console.log(resposta.data);
                setMensagemSucesso('Atualização realizada com sucesso!')
                setTimeout(() => {
                    setMensagemSucesso('')
                }, 3000)

            })
            .catch((erro) => {
                console.log(erro);
                setMensagemSucesso('Opss, parece que algo deu errado!')
                setTimeout(() => {
                    setMensagemErro('')
                }, 3000)
            })

        setId('');
        setNome('');
        setDescricao('');
        setLancamento('');
        setAvaliacao('');
    }


    return (
        <>
            <div className="d-flex justify-content-center">
                <img src={editarFilme} alt="editar-filme" className="img-fluid titulo filmes-titulo" />
            </div>
            <form onSubmit={salvar} className="container form-novo-filme">
                <div className="row g-3">
                <div class="col-12">
                        <label>Id 🔍​</label>
                        <input value={id} onChange={(evento) => setId(evento.target.value)}type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Nome do filme 👻​</label>
                        <input value={nome} onChange={(evento) => setNome(evento.target.value)}type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Descrição 🗨️​</label>
                        <textarea value={descricao} onChange={(evento) => setDescricao(evento.target.value)} type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Lançamento 💥​</label>
                        <input value={lancamento} onChange={(evento) => setLancamento(evento.target.value)} type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Avaliação ⭐​</label>
                        <input value={avaliacao} onChange={(evento) => setAvaliacao(evento.target.value)} type="text" class="form-control" />
                    </div>
                    <div className=" container container-botao-cadastrar">
                        <button className="btn btn-outline-primary botao-cadastrar">Atualizar</button>
                    </div>

                </div>
            </form>
            <div className="col-12 mensagem-sucesso d-flex justify-content-center mt-4">
                {mensagemSucesso && <MensagemSucesso msgSucesso={mensagemSucesso} />}
                {mensagemErro && <MensagemErro msgErro={mensagemErro} />}
            </div>

        </>
    )
}

export default EditarFilme;