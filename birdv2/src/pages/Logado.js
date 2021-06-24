import React, { useState } from 'react'
import { Layout, Menu, Calendar, Space, Tag } from 'antd';
import { ExclamationCircleOutlined, UserOutlined, VideoCameraOutlined, CalendarOutlined } from '@ant-design/icons';
import './../Css/Logado.css'
import { Table } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function Logado (props){
    const [Estado,setEstado] = useState("")
    function Calendario(props){
        setEstado(<Calendar/>)
    }
    function CadastrarM(props){
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Endereço',
              dataIndex: 'endereco',
              key: 'endereco',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                  <>
                    {tags.map(tag => {
                      let color = tag.length > 5 ? 'geekblue' : 'green';
                      if (tag === 'Morador') {
                        color = 'volcano';
                      }
                      if (tag === "Porteiro"){
                          color = "green"
                      }
                      if ( tag === "Zelador"){
                          color = "yellow"
                      }
                      if (tag === "Sub-Sindico"){
                          color = "gray"
                      }
                      return (
                        <Tag color={color} key={tag}>
                          {tag.toUpperCase()}
                        </Tag>
                      );
                    })}
                  </>
                ),
              },
              {
                title: 'Action',
                key: 'action',
                render: (text) => (
                  <Space size="middle">
                    <a>Alterar</a>
                    <a>Deletar</a>
                  </Space>
                ),
              }
        ];
        const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              endereco: 'Bloco 21 apartamento 35',
              tags: ['Funcionario', 'Zelador', 'Morador'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              endereco: 'Bloco 45 apartamento 15',
              tags: ['Funcionario' , 'Porteiro', 'Morador'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              endereco: 'bloco 10 apartamento 20',
              tags: ['Funcionario', 'Sub-Sindico', 'Morador'],
            },
          ];
        setEstado(<Table columns={columns} dataSource={data} />)
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
        <Menu.Item key="1" icon={<UserOutlined />}>
          nav 1
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          nav 2
        </Menu.Item>
        <Menu.Item key="3" icon={<ExclamationCircleOutlined /> } onClick ={CadastrarM}>
          nav 3
        </Menu.Item>
        <Menu.Item key="4" icon={<CalendarOutlined />} onClick = {Calendario}>
          nav 4
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0, backgroundColor:"#001529"}} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 520}}>
            {Estado}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>©2021 Created by Nathan Silva</Footer>
    </Layout>
  </Layout>,
        </>
    );
}

export default Logado;