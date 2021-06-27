import React, { useState } from 'react';
import { Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
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

  const registerForm = document.forms.register

// registerForm.<nome do input>.value retorna o valor do input de acordo com o atributo name=""

const [Senha, setSenha] = useState("")
const [Email, setEmail] = useState("")
const [CNPJ, setCNPJ] = useState("")
const [Nome, setNome] = useState("")
const [Cidade, setCidade] = useState("")
const [Estado, setEstado] = useState("")
const [Endereco, setEndereco] = useState("")

const register = () => {
 if((Senha != "") && (Email != "") && (Cidade != "") && (Estado != "") && (Nome != "") && (CNPJ != "") && (Endereco != "")){
      api.post("/Cadastro", {
        nomeCondominio: Nome,
        cnpj: CNPJ,
        endereco: Endereco,
        Cidade: Cidade,
        Email: Email,
        Estado: Estado,
        Senha: Senha  
        })
        props.history.push("/Login")
  }
}
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
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
        name="cnpj"
        label="cnpj"
        rules={[
          {
            required: true,
            message: 'Por favor, insira um CNPJ',
          },
        ]}
      >
        <Input value={CNPJ} onChange={ e => setCNPJ(e.target.value)}/>
        
      </Form.Item>

      <Form.Item
        name="Nome"
        label="Nome: "
        rules={[
          {
            required: true,
            message: 'Por favor, insira um Nome',
          },
        ]}
      >
        <Input value={Nome} onChange={ e => setNome(e.target.value)}/>
        
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Insira um e-mail valido!',
          },
          {
            required: true,
            message: 'Por favor, insira seu e-mail',
          },
        ]}
      >
        <Input value={Email} onChange={ e => setEmail(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="Senha"
        label="Senha"
        rules={[
          {
            required: true,
            message: 'Por favor, insira sua senha!',
          },
          
        ]}
        hasFeedback
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item
        name="Confirmar"
        label="Repita a senha: "
        dependencies={['Senha']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Porfavor, confirme sua senha!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('Senha') === value) {
                  
                return Promise.resolve();
              }

              return Promise.reject(new Error('As duas senha nao batem'));
            },
          }),
        ]}
      >
        <Input.Password value={Senha} onChange={ e => setSenha(e.target.value)}/>
      </Form.Item>

      <Form.Item
        name="Endereco"
        label="Endereço: "
        rules={[
          {
            required: true,
            message: 'Por favor, insira um endereço'
          },
        ]}
      >
        <Input value={Endereco} onChange={ e => setEndereco(e.target.value)}/>
        
      </Form.Item>

      <Form.Item
        name="Cidade"
        label="Cidade: "
        rules={[
          {
            required: true,
            message: 'Por favor, insira uma Cidade',
          },
        ]}
      >
        <Input value={Cidade} onChange={ e => setCidade(e.target.value)}/>
        
      </Form.Item>

      <Form.Item
        name="Estado"
        label="Estado: "
        rules={[
          {
            required: true,
            message: 'Por favor, insira um Estado',
          },
        ]}
      >
        <Input value={Estado} onChange={ e => setEstado(e.target.value)}/>
        
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Você precisa aceitar os termos')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
        <a href="">Termos</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={register}>
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrationForm ;