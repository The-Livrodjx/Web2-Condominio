import React, { useState } from 'react'
import RegistrationForm from './CadastrarMorador'
import { Layout, Menu, Calendar } from 'antd';
import { ExclamationCircleOutlined, UserOutlined, MenuOutlined, CalendarOutlined } from '@ant-design/icons';
import './../Css/Logado.css'
import Avisos from './CadastrarAviso'
import CadastrarTag from './CadastrarTag';
import {dateCellRender,monthCellRender} from './Calendario'
import { NavLink, Switch, Route} from 'react-router-dom';
const { Header, Content, Footer, Sider } = Layout;


function Logado (props){
    const [Estado,setEstado] = useState("")
    function Calendario(props){
        return <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
    }
    return(
        <>
    <Layout>
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
            console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}
        >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}><NavLink to="/Cadastrar">
                Cadastrar
            </NavLink></Menu.Item>
            <Menu.Item key="2" icon={<ExclamationCircleOutlined />}><NavLink to="/Aviso">
                Avisos
            </NavLink></Menu.Item>
            <Menu.Item key="3" icon={<MenuOutlined /> }><NavLink to="/CadastrarMorador">
                Funcionarios/Morador
            </NavLink></Menu.Item>
            <Menu.Item key="4" icon={<CalendarOutlined />}><NavLink to="/Calendario">
                Eventos
            </NavLink></Menu.Item>
        </Menu>
        </Sider>
        <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0, backgroundColor:"#001529"}} />
        <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 520}}>
                <Switch>
                  <Route path="/Calendario" component={Calendario}/>
                  <Route path="/Cadastrar" component={RegistrationForm}/>
                  <Route path="/CadastrarMorador" component={CadastrarTag}/>
                  <Route path="/Aviso" component={Avisos}/>
                </Switch>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>©2021 Created by Nathan Silva</Footer>
        </Layout>
  </Layout>,
        </>
    );
}

export default Logado;