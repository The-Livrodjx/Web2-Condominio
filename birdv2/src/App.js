import React, { useState } from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb} from 'antd'
import {} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Route, Switch,NavLink} from 'react-router-dom'
import PageLogin from './pagesHome/Login'
import RegistrationForm from './pagesHome/CadastrarCondo'
import Logado from './pages/Logado'
import Home from './pagesHome/Home'

const { Header, Content, Footer } = Layout;

function App(props) {
  function Home(){
    setEstado("Home")
  }
  function Cadastro(){
    setEstado(<RegistrationForm Loger={Login}/>)
  } 
  function Login(){
    
    setEstado(<PageLogin/>)
  }
  function Sobre(){
    setEstado("Sobre")
  }
  const [Estado,setEstado] = useState("")
  return (
    <div>
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        
          <NavLink to="/Home"><Menu.Item key="1">Home</Menu.Item></NavLink>
          <Menu.Item key="2" onClick={Cadastro}>Cadastro</Menu.Item>
          <NavLink to="/Logado"><Menu.Item key="3">Login</Menu.Item></NavLink>
          <Menu.Item key="4" onClick={Sobre}>Sobre</Menu.Item>
        
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 450 , marginTop: 50}}> 
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2021 Created by Nathan Silva</Footer>
  </Layout>,
     <Switch>
        <Route exact path="/Logado" component={PageLogin}/>
      </Switch>
    </div> 
  );
}

export default App;
