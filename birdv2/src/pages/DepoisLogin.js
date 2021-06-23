import React, {useState} from 'react'
import "./../Css/DepoisLogin.css"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
function DepoisLogin(props){
    const [cidade,setCidade] = useState("")
    const [estado,setEstado] = useState("")
    const [nome,setNome] = useState("")
    function Login(){
        setCidade(props.location.Cidade)
        setEstado(props.location.Estado)
        setNome(props.location.Nome)

    }
    return(
        <div className="FundoDPL">
            <div className="Fundo">
            <p>cidade: {cidade}</p>
            <p>estado: {estado}</p>
            <p>nome: {nome}</p>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={Login}>
              Mostrar Dados
            </Button>
            </div>
        </div>
    )
}

export default DepoisLogin;