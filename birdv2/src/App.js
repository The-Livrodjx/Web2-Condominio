import React, { useState } from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb} from 'antd'
import {} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Route, Switch, browserHistory} from 'react-router-dom'
import PageLogin from './pagesHome/Login'
import RegistrationForm from './pagesHome/CadastrarCondo'
import Logado from './pages/Logado'

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
        <Menu.Item key="1" onClick={Home}>Home</Menu.Item>
        <Menu.Item key="2" onClick={Cadastro}>Cadastro</Menu.Item>
        <Menu.Item key="3" onClick={Login}>Login</Menu.Item>
        <Menu.Item key="4" onClick={Sobre}>Sobre</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 450 , marginTop: 50}}>
        {Estado}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2021 Created by Nathan Silva</Footer>
  </Layout>,
    <Switch>
      <Route path="/Login" component={Logado}/>
    </Switch>
    </div> 
  );
}

export default App;
