import React, { useState, useEffect } from 'react';
import SelectTags from '../Carregamentos/SelectTags';
import { Form, Input, Cascader, Row, Col, Checkbox, Button, AutoComplete, Select } from 'antd';
import Cookies, { getJSON, set } from 'js-cookie'
import api from './../servidor/Server'
const { Option } = Select;
const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const listacom = []
const RegistrationForm = (props) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  //const N = "00:c0:37:c3:75:88:b4:32:98:87:e6:1c:2d:a3:32:4b:1b:a4:b8:1a:63:f9:74:8f:ed:2d:8a:41:0c:2f:c2:1b:12:32:f0:d3:bf:a0:24:27:6c:fd:88:44:81:97:aa:e4:86:a6:3b:fc:a7:b8:bf:77:54:df:b3:27:c7:20:1f:6f:d1:7f:d7:fd:74:15:8b:d3:1c:e7:72:c9:f5:f8:ab:58:45:48:a9:9a:75:9b:5a:2c:05:32:16:2b:7b:62:18:e8:f1:42:bc:e2:c3:0d:77:84:68:9a:48:3e:09:5e:70:16:18:43:79:13:a8:c3:9c:3d:d0:d4:ca:3c:50:0b:88:5f:e3"
  /*useEffect(() =>{
    console.log(res)
    res.forEach(element => {
      listacom.push(<Option value={element}>{element}</Option>)
  });
  }, [res])
if(res.length === 1000){
    api.get(`/GetTags/${Cookies.get("user")}`).then((response) =>{
      setRes(response.data)
    })
}*/
const listacom = []
  const [res,setRes] = useState([])
  const teste = Cookies.getJSON("user")
  useEffect(() =>{
      console.log("Entrei no effect 1")
      api.get(`/GetTags/1`).then((response) =>{
        setRes(response.data)
      })
  },[])
  console.log(res)
  res.forEach(element => {
    listacom.push(<Option key={element.Tags}>{element.Tags}</Option>)
  })
  const [Tags, setValor] = useState("")
  const [cpf, setCPF] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [nome, setNome] = useState("")
  const [ap, setAp] = useState("")

  async function Cadastrar(){
    await api.post("/SaveUser",{
      cpf: form.getFieldValue().cpf,
      Email: form.getFieldValue().email,
      Senha: form.getFieldValue().senha,
      Nome: form.getFieldsValue().Nome,
      ApBloco: form.getFieldValue().Ap,
      tags: Tags.toString(),
      idCondominio: teste
    })

  }
  return (
    <Form
      
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
      
    >
      <Form.Item
        name="Nome"
        label="Nome"
        rules={[
          {
            required: true,
            message: 'Por favor, insira um Nome',
          },
        ]}
      >
        <Input/>
        
      </Form.Item>
      <Form.Item
        name="cpf"
        label="CPF"
        rules={[
          {
            required: true,
            message: 'Por favor, insira um CPF',
          },
        ]}
      >
        <Input/>
        
      </Form.Item>

      <Form.Item
        name="Ap"
        label="Apartamento"
        rules={[
          {
            required: true,
            message: 'Por favor, insira seu apartamento'
          },
        ]}
      >
        <Input/>
        
      </Form.Item>


      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Esse e-mail não é valido',
          },
          {
            required: true,
            message: 'Por favor, insira seu e-mail',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        name="senha"
        label="Senha"
        rules={[
          {
            required: true,
            message: 'Por favor, insira sua senha',
          },
        ]}
        hasFeedback
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        style={{display: 'flex', alignItems:"center", justifyContent:"center"}}
        name="confirm"
        label="Repita a senha:"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Por favor, Repita sua senha',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('senha') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('As senhas não são as mesmas'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="select-multiple"
        label="Selecione as tags"
        rules={[{ required: true, message: 'Por favor, selecione suas tags', type: 'array' }]}
      >
        <Select mode="multiple" placeholder="Selecione as tags" onChange={e=>setValor(e)}>
        {listacom}
        </Select>
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
        <a href="">Termos</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={Cadastrar}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm ;