import './estilos.css'
import detalhe from '../../imagens/detalhe-superior.webp'
import { RiGithubLine } from 'react-icons/ri';
import { FiLinkedin } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const Rodape = () => {
  return <footer className=" rodape">

    <a target="_blank"  rel="noreferrer" href="https://github.com/tiagow8"> <RiGithubLine size="40" color="#2B2929" /></a>
    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tiago-g-95b637205/"> <FiLinkedin size="40" color="#2B2929" /></a>
    <p className="rodape-copyright"> Made by Tiago Gomes 🙋🏽‍♂️​</p>
    <img className="img-detalhe-rodape img-fluid" src={detalhe} alt="" /> 
    
  </footer>
}

export default Rodape;