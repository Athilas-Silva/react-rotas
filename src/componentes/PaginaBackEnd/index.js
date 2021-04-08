import React from "react";
import BotaoVoltar from "../BotaoVoltar";
import "./estilo.css";

const PaginaBackEnd = () => (
    <div>
        <h1>Node.js</h1>

        <p>Node.js é uma tecnologia usada para executar código JavaScript fora do navegador. Com ele podemos construir aplicações web em geral, desde web sites até APIs e microsserviços.</p>

        <img className="img-node" src="assets/node.png" alt="Logo Node" title="Logo Node" />
        <br/>

        <button className="botao-back">
            <a href="https://nodejs.org/en/" target="_blank">Site Oficial do Node.js</a>
        </button>

        <BotaoVoltar />
    </div>
);

export default PaginaBackEnd;