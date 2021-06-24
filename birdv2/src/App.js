import React, { useState } from 'react';
import './App.css';
import {Layout, Menu, Breadcrumb} from 'antd'
import {} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {Link, Route, Switch} from 'react-router-dom'
import Logado from './pages/Logado'

const { Header, Content, Footer } = Layout;

function App(props) {
  const [Estado,setEstado] = useState("")
  function Home(){
    setEstado("Home")
  }
  function Cadastro(){
    setEstado("Cadastro")
  }
  function Login(){
    setEstado("Login")
  }
  function Sobre(){
    setEstado("Sobre")
  }
  return (
    <>
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
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 450 , marginTop: 20}}>
        {Estado}
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>©2021 Created by Nathan Silva</Footer>
  </Layout>,
    </> 
  );
}

export default App;
