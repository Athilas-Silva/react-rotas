import React from "react";
import { Link } from "react-router-dom";
import "./estilo.css";

const PaginaInicial = () => (
    <div>
        <h1>Escolha seu caminho no Javascript</h1>
        <img className="img-javascript" src="https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png" />

        <div className="conteudo-opcoes">
            <Link className="opcao-front-end" to="/front-end">Front-End</Link>
            <Link className="opcao-back-end" to="/back-end">Back-End</Link>
            <Link className="opcao-banco-dados" to="/mysql">MySql</Link>
            <Link className="opcao-scrum" to="/scrum">Scrum</Link>
            <Link className="opcao-seo-google" to="/google">SEO - Google</Link>
        </div>
    </div>
);

export default PaginaInicial;