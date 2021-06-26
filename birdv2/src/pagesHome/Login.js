import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useState } from "react"
import api from '../servidor/Server';
import { Redirect } from 'react-router-dom';
const Login= (props) => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
  const [User, setUser] = useState("")
  const [Senha, setsenha] = useState("")
  const [Resultado, setResultado] = useState("")
  const  Verificar = () => {
    if((User !== "") && (Senha !== "")){
      api.get(`/Procurar/${User}/${Senha}`).then((response) =>{
        setResultado(response.data)
      })
      if(Resultado){
        console.log("Achei")
        props.history.push("/Logado")
      }else{
        console.log("Não achei")
        return ;
      }
    }
  }
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={User} onChange={e => setUser(e.target.value)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={Senha}
          onChange={e => setsenha(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Lembrar Senha</Checkbox>
        </Form.Item>
        <p></p>
        <a className="login-form-forgot" href="">
          Esqueceu a senha
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={Verificar}>
          Log in
        </Button>
        <p></p>
        <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default Login;