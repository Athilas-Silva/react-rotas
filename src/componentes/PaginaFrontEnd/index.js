import Reat from "react";
import BotaoVoltar from "../BotaoVoltar";
import "./estilo.css";

const PaginaFrontEnd = () => (
    <div>
        <h1>React.js</h1>
        <p>React é uma biblioteca JavaScript para a criação de interfaces de usuário e, nesse contexto, uma das tecnologias mais
        utilizadas pelo mercado.</p>

            <img src="assets/react.png" className="img-react" alt="React Logo" title="React Logo" />
            <br/>

            <button className="botao">
                <a href="https://pt-br.reactjs.org/" target="_blank">Site Oficial do React.js</a>
            </button>

            <BotaoVoltar />
    </div>
);

export default PaginaFrontEnd;