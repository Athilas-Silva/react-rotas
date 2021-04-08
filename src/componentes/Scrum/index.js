import React from "react";
import BotaoVoltar from "../BotaoVoltar";
import "./estilo.css";

const Scrum = () => (
    <div>
        <h1>Scrum</h1>
        <p>A metodologia Scrum é um framework simples para trabalhar com projetos complexos, criada pelos 
        desenvolvedores Ken Schwaber e Jeff Sutherland. Ela faz parte das metodologias ágeis e é comumente 
        utilizada por desenvolvedores de softwares e sistemas.</p>

        <img className="img-scrum" src="assets/scrum.png" alt="Imagem referente a metodologia Scrum" title="Imagem referente a metodologia Scrum" />
        <br/>

        <button className="botao-scrum">
            <a href="https://blog.contaazul.com/metodologia-scrum" target="_blank">Saiba mais sobre Scrum</a>
        </button>

        <BotaoVoltar />
    </div>
);

export default Scrum;