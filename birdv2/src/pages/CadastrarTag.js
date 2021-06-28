import { Table,Space, Tag } from 'antd';
import React from 'react'
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

function CadastrarTag (){return ( <Table columns={columns} dataSource={data} />)}

export default CadastrarTag;