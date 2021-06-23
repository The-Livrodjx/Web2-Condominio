import React from 'react'
import "./../Css/Login.css"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import api from '../servidor/Server'
function AntesDoLogin(props){
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    function Login(){
      const Login = document.getElementById("Login").value
      const Senha = document.getElementById("Senha").value
      props.setando(false)
    }
    return(
      <div className = 'CorLogin'>
        <div className = 'Fundo'>
                <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="Login"
            rules={[
              {
                required: true,
                message: 'Por favor, insira seu Login!',
              },
            ]}
          >
            <Input id="Login" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="CNPJ" />
          </Form.Item>
          <Form.Item
            name="Senha"
            rules={[
              {
                required: true,
                message: 'Por favor, insira sua senha!',
              },
            ]}
          >
            <Input
              id="Senha"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Senha"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Lembrar-se</Checkbox>
            </Form.Item>
            <p></p>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={Login}>
              Logar
            </Button>
            <p></p>
            <a className="login-form-forgot" href="">
              Esqueci a senha
            </a>
          <p></p> <a href="">Registrar-se!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
    );
}
export default AntesDoLogin;