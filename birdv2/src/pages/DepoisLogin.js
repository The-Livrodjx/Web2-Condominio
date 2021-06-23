import React, {useState} from 'react'
import "./../Css/DepoisLogin.css"
import { Route, Switch, Link } from 'react-router-dom';
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
    function MoradorCad(){

    }
    return(
        <div className="FundoDPL">
            <div className="BarraMenu">
                <p>Perfil</p>
                <Link to="CadastroMorador" style={{color:'white', textDecoration:"none"}} onClick={MoradorCad}><p>Cadastrar Morador</p></Link>
                <p>Cadastrar Funcionario</p>
                <p>Cadastrar Aviso</p>
                <p>Sobre</p>
            </div>
            <div className="Mostrar">
                
            </div>
        </div>
    )
}

export default DepoisLogin;