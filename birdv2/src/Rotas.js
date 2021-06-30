import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App'
import Logado from './pages/Logado'
const Routes = () => (
  <Router>
    <Route  exact path="/" component={App}/>
    <Route  exact path="/Cadastro" component={App}/>
    <Route  exact path="/Login" component={App}/>
    <Route  exact path="/Logado" component={Logado}/>
    <Route  exact path="/Calendario" component={Logado}/>
    <Route  exact path="/Cadastrar" component={Logado}/>
    <Route  exact path="/CadastrarMorador" component={Logado}/>
    <Route  exact path="/Aviso" component={Logado}/>
    <Route exact path="/Tags" component={Logado}/>
  </Router>
);

export default Routes;