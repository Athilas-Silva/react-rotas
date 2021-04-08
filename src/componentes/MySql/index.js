import React from "react";
import BotaoVoltar from "../BotaoVoltar";
import "./estilo.css";

const MySql = () => (
    <div>
        <h1>MySQL</h1>
        
        <p>O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. 
        É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, 
        com mais de 10 milhões de instalações pelo mundo.</p>

        <img className="img-mysql" src="assets/mysql.png" alt="MySQL Logo" title="MySQL Logo" />
        <br/>
        
        <button className="botao-sql">
            <a href="https://www.mysql.com/" target="_blank">Site Oficial da MySql</a>
        </button>

        <BotaoVoltar />
    </div>
);

export default MySql;