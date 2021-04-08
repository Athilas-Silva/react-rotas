import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import PaginaInical from "../PaginaInicial";
import PaginaFrontEnd from "../PaginaFrontEnd";
import PaginaBackEnd from "../PaginaBackEnd";
import MySql from '../MySql';
import Scrum from '../Scrum';
import Seo from '../Google';

const Rotas = () => (
    <HashRouter>
            <Route exact path="/" component= { PaginaInical } />
            <Route exact path="/front-end" component= { PaginaFrontEnd } />
            <Route exact path="/back-end" component= { PaginaBackEnd } />
            <Route exact path="/mysql" component= { MySql } />
            <Route exact path="/scrum" component= { Scrum } />
            <Route exact path="/google" component= { Seo } />
    </HashRouter>
);

export default Rotas;