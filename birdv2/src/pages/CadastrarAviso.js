import React from 'react'
import {Space, Table} from 'antd'
const columns = [
    {
      title: 'Assunto',
      dataIndex: 'assunto',
      key: 'assunto',
    },
    {
      title: 'Arquivo',
      dataIndex: 'arquvo',
      key: 'arquivo',
      render: (text) => (
        <Space size="middle">
          <a>Baixar</a>
        </Space>
      ),
    },
];
const data = [
    {
      key: '1',
      assunto: "Teste"
    }
];

function CadastrarAviso() {return( <Table columns={columns} dataSource={data}/>)}
export default CadastrarAviso;