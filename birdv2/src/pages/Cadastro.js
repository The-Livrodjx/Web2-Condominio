import React from 'react'
import './../Css/Cadastro.css'
import { Button, Form, Input, Checkbox} from 'antd';
import 'antd/dist/antd.css';
import api from './../servidor/Server'
function Cadastro (props){
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    async function Conectar(){
        const Nome = document.getElementById("Nome").value
        const Email = document.getElementById("Email").value
        const CNPJ = document.getElementById("CNPJ").value
        const Cidade = document.getElementById("Cidade").value
        const Estado = document.getElementById("Estado").value
        const Endereco = document.getElementById("Endereco").value
        const Senha = document.getElementById("Senha").value
        if((Nome !== "") && (Email !== "") && (CNPJ !== "") && (Cidade !== "") && (Estado !== "") && (Endereco !== "") && (Senha !== "")){
            if(document.getElementById("Acordo").checked){
                await api.post("/Cadastro",{
                    nomeCondominio: Nome,
                    cnpj: CNPJ,
                    endereco: Endereco,
                    Cidade: Cidade,
                    Email: Email,
                    Estado: Estado,
                    Senha: Senha
                });
                alert("Cadastrado com sucesso!")
                props.history.push("/Login")
            }else{
                alert("Aceite o acordo, por favor!")
            }
        }else{
            alert("Preencha todos os campos!")
        }
    }
    return(
        
        <div className="CorCadastro">
            <div className="Quadrado">
            <Form>
                <Form.Item>
                    <Input placeholder="Nome" id="Nome"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="CNPJ" id="CNPJ"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="Senha" id="Senha" type="password"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder="E-mail" id="Email"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder ="Endereço" id="Endereco"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder ="Cidade" id="Cidade"/>
                </Form.Item>
                <Form.Item>
                    <Input placeholder ="Estado" id="Estado"/>
                </Form.Item>
                <Checkbox onChange={onChange} id="Acordo">Concordo com os termos</Checkbox>
                <p></p>
                    <Button onClick={Conectar} type="primary" block>
                        Cadastrar
                    </Button>
            </Form>
            </div>
        </div>
    );
}

export default Cadastro;