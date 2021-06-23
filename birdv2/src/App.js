import React from 'react';
import './App.css';
import {Menu, Dropdown} from 'antd'
import { DownOutlined, MenuOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link, Route, Switch} from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Login from './pages/Login'
import DepoisLogin from './pages/DepoisLogin';
import CadMorador from './pages/CadMorador';

function App(props) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
          <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="1">
          <Link to="/Cadastro">Cadastro</Link>
      </Menu.Item>
      <Menu.Item key="2">
          <Link to="/Login">Login</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="Fontes">
        <div className="nav-bar">
          <div className="cor">
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{position:"relative", top:"0.5rem", left:"0.4rem"}}>
                <MenuOutlined/> 
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Cadastro" component={Cadastro}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Logado" component={DepoisLogin}></Route>
        <Route path="/CadastroMorador" component={CadMorador}/>
        </Switch>
    </div> 
  );
}

export default App;
