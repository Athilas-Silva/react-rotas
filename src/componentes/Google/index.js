import React from "react";
import BotaoVoltar from "../BotaoVoltar";
import "./estilo.css";

const Seo = () => (
    <div>
        <h1>Seo - Google</h1>

        <p>SEO significa Search Engine Optimization (otimização para mecanismos de busca). É um conjunto de 
        técnicas de otimização para sites, blogs e páginas na web. Essas otimizações visam alcançar bons rankings 
        orgânicos gerando tráfego e autoridade para um site ou blog.</p>

        <img className="img-seo" src="assets/seo.png" alt="Imagem referente ao SEO Google" title="Imagem referente ao SEO Google"/>
        <br/>

        <button className="botao-seo">
            <a href="https://rockcontent.com/br/blog/o-que-e-seo/" target="_blank">Saiba mais sobre o Seo da Google</a>
        </button>

        <BotaoVoltar />
    </div>
);

export default Seo;