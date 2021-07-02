/* eslint-disable no-unused-expressions */
import { Table, Space, Tag, Spin } from 'antd';
import React, { useEffect, useState } from 'react'
import api from './../servidor/Server'
import '../Css/table.css'
import Cookies from 'js-cookie'

const columns = [
  {
    title: 'Nome',
    dataIndex: 'Nome',
    key: 'Nome',
    render: text => <a>{text}</a>,
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
    tags: ['Funcionario', 'Porteiro', 'Morador'],
  },
  {
    key: '3',
    name: 'Joe Black',
    apartamento: 'bloco 10 apartamento 20',
    tags: ['Funcionario', 'Sub-Sindico', 'Morador'],
  },
];


function CadastrarTag() {
  const [resultado, setResultado] = useState([])
  // const [contador, setContador] = useState(0)
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {

    // (async function() {
    //   console.log("Entrei")
    //   // 
    //   let response = await api.get(`/GetUser/1`)

    //   setResultado(response.data)

    // })


    console.log("Entrei")
    // ${Cookies.getJSON("user").idcondominio }
    api.get(`/GetUser/1`).then(response => {


     
      setResultado(response.data)


    })

    setIsloading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log("Resultado: ", resultado)



  // const data2 = resultado.map(element => {
  //   setContador(contador + 1)
  //   return ({
  //     key: `${contador}`,
  //     name: `${element.Nome}`,
  //     apartamento: `${element.ApBloco}`,
  //     tags: element.tags,
  //   })
  // });
  //<Table columns={columns} dataSource={data}/>

  // eslint-disable-next-line no-undef
  return (isLoading || resultado.length <= 0 ? <Spin /> : (

    <>

      <table className="tagTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Apartamento</th>
            <th>Tags</th>
          </tr>
        </thead>

        <tbody>
          {resultado.map(element => (

            <tr key={element.idCondominio.idcondominio}>

              <td>{element.idCondominio.idcondominio}</td>
              <td>{element.Nome}</td>
              <td>{element.ApBloco}</td>
              <td>{element.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  ))
}

export default CadastrarTag;