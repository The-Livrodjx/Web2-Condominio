import React, { useState } from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb} from 'antd'
import {} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Route, Switch,NavLink, Link} from 'react-router-dom'
import Login from './pagesHome/Login'
import Cadastro from './pagesHome/CadastrarCondo'
import Logado from './pages/Logado'
import Home from './pagesHome/Home'

const { Header, Content, Footer } = Layout;

function App(props) {
  return (
    <div>
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
         <Menu.Item key="2"><Link to="/Cadastro">Cadastro</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/Login">Login</Link></Menu.Item>
          <Menu.Item key="4">Sobre</Menu.Item>
        
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64}}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 450 , marginTop: 50}}> 
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Login" component={Login} />
          <Route parth="/Cadastro" component={Cadastro}/>
        </Switch>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2021 Created by Nathan Silva</Footer>
  </Layout>,
    </div> 
  );
}

export default App;
