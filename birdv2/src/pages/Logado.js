import React, { useState, useEffect } from 'react'
import RegistrationForm from './CadastrarMorador'
import { Layout, Menu, Calendar } from 'antd';
import { LogoutOutlined,ExclamationCircleOutlined, UserOutlined, MenuOutlined, CalendarOutlined, BorderlessTableOutlined} from '@ant-design/icons';
import './../Css/Logado.css'
import Avisos from './CadastrarAviso'
import CadastrarTag from './CadastrarTag';
import Cookies from 'js-cookie'; 
import {dateCellRender,monthCellRender} from './Calendario'
import { NavLink, Switch, Route} from 'react-router-dom';
import Tags from './FazerTag'
const { Header, Content, Footer, Sider } = Layout;


function Logado (props){
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
            <Menu.Item key="1" icon={<ExclamationCircleOutlined />}><NavLink to="/Logado">
                Avisos
            </NavLink></Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}><NavLink to={{
                pathname: "/Cadastrar",
                state: {detail: true}
            }}>
                Cadastrar
            </NavLink></Menu.Item>
            <Menu.Item key="3" icon={<MenuOutlined /> }><NavLink to="/CadastrarMorador">
                Funcionarios/Morador
            </NavLink></Menu.Item>
            <Menu.Item key="4" icon={<CalendarOutlined />}><NavLink to="/Calendario">
                Eventos
            </NavLink></Menu.Item>
            <Menu.Item key="5" icon={<BorderlessTableOutlined />}><NavLink to="/Tags">
                Tags
            </NavLink></Menu.Item>
            <Menu.Item key="6" icon={<LogoutOutlined />} onClick={() => Cookies.remove("user")}><NavLink to="/">
                Sair
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
                  <Route path="/Logado" component={Avisos}/>
                  <Route path="/Tags" component={Tags}/>
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