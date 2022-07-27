import axios from 'axios';
import { useState } from 'react';
import './estilos.css'
import cadastrarFilme from '../../imagens/cadastrar-filme.png';
import MensagemSucesso from '../../Componentes/Mensagem/MensagemSucesso';
import MensagemErro from '../../Componentes/Mensagem/MensagemErro';
const NovoFilme = () => {
   
    const [mensagemSucesso, setMensagemSucesso] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
   const [id , setId] = useState('');
   const [nome , setNome] = useState('');
   const [descricao , setDescricao] = useState('');
   const [lancamento , setLancamento] = useState('');
   const [avaliacao , setAvaliacao] = useState('');

   const cadastrar = (evento) => {
        evento.preventDefault();

        const novoFilme = {
            id,
            nome, 
            descricao,
            lancamento,
            avaliacao
        }

        console.log(novoFilme);

        axios.post('http://localhost:3000/filmes' , novoFilme)
        .then((resposta) => {
            console.log(resposta.data);
            setMensagemSucesso("Filme cadastrado com sucesso")
            setTimeout(() => {
                setMensagemSucesso('')
              }, 3000);
        })

        .catch(erro => {
            console.log('Algo deu errado !')
             if (erro.resposta.data && erro.resposta.data.message) {
               setMensagemErro(erro.resposta.data.message)
             } else {
               setMensagemErro('Opss... ocorreu um erro não esperado.')
             }
             setTimeout(() => {
               setMensagemErro('')
             }, 4500);
          })
   }
   
    return (
        <>
        <div className="d-flex justify-content-center">
            <img src={cadastrarFilme} alt="cadastrar-filme" className="img-fluid titulo filmes-titulo" />
        </div>
            <form onSubmit={cadastrar} className="container form-novo-filme">
                <div class="row g-3">
                    <div class="col-12">
                        <label>Id</label>
                        <input value={id} onChange={(evento) => setId(evento.target.value)}type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Nome do filme</label>
                        <input value={nome} onChange={(evento) => setNome(evento.target.value)}type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Descrição</label>
                        <textarea value={descricao} onChange={(evento) => setDescricao(evento.target.value)} type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Lançamento</label>
                        <input value={lancamento} onChange={(evento) => setLancamento(evento.target.value)} type="text" class="form-control" />
                    </div>
                    <div class="col-12">
                        <label>Avaliação</label>
                        <input value={avaliacao} onChange={(evento) => setAvaliacao(evento.target.value)} type="text" class="form-control" />
                    </div>
                    
                    <div className=" container container-botao-cadastrar">
                    <button className="btn btn-outline-primary botao-cadastrar">Cadastrar 🖱️​</button>
                    </div>

                </div>
            </form>
            <div className="col-12 mensagem-sucesso d-flex justify-content-center mt-4">
            { mensagemSucesso && <MensagemSucesso msgSucesso={mensagemSucesso} /> }
            { mensagemErro && <MensagemErro msgErro={mensagemErro} /> }
            </div>

        </>
    )

}

export default NovoFilme;