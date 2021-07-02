import { Table,Space, Tag, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import api from './../servidor/Server'
import Cookies from 'js-cookie'

const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Apartamento',
      dataIndex: 'apartamento',
      key: 'apartamento',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <>
            {tags.map(tag => {
              /*let color = tag.length > 5 ? 'geekblue' : 'green';
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
              }*/
              return (
                <Tag>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: 'Ação',
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
      apartamento: 'Bloco 21 apartamento 35',
      tags: ['Funcionario', 'Zelador', 'Morador'],
    },
    {
      key: '2',
      name: 'Jim Green',
      apartamento: 'Bloco 45 apartamento 15',
      tags: ['Funcionario' , 'Porteiro', 'Morador'],
    },
    {
      key: '3',
      name: 'Joe Black',
      apartamento: 'bloco 10 apartamento 20',
      tags: ['Funcionario', 'Sub-Sindico', 'Morador'],
    },
  ];


  function CadastrarTag() {
    const [resultado, setResultado] = useState()
    const [contador, setContador] = useState(0)
    const [isLoading, setIsloading] = useState(true)

    useEffect(() => {
        (async () => {
            console.log("Entrei")
            let response = await api.get(`/GetUser/${Cookies.getJSON("user").idcondominio}`)

            setResultado(response.data)

            setIsloading(false)
        })
    }, [])

    console.log("Resultado: ", resultado)

    const data2 = []

    resultado.map(element => {
        setContador(contador + 1)
        data2.push({
            key: `${contador}`,
            name: `${element.Nome}`,
            apartamento: `${element.ApBloco}`,
            tags: element.tags,
        })
    });
    //<Table columns={columns} dataSource={data}/>

    return ((isLoading)?<Spin/>:<Table columns={columns} dataSource={data2}/>)
}
  
export default CadastrarTag;