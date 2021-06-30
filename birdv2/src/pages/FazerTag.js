import React, { useState } from 'react'
import {Button, Input, Form} from 'antd'
import api from "./../servidor/Server"
import Cookies from 'js-cookie'
function Tag (props){
    const [tag, setTag] = useState("")
    const condominio = Cookies.getJSON("user")
    async function SalvarTag(){
        await api.post("/SaveTag",{
            Tags: tag,
            idCondominio: condominio
        })
        setTag("")

    }
    return (
        <Form 
        style={{display:'flex', justifyContent:"center", alignItems:"center", flexDirection:"column", margin: 20}}>
            <Form.Item label="Tag">
                <Input  placeholder="Tag" style={{ width: 300}}
                    value={tag} 
                    onChange={e => setTag(e.target.value.toUpperCase())}/>
            </Form.Item>
            <Button type="primary" stye={{margin: 20}} onClick={SalvarTag}>Adicionar</Button>
        </Form>
    )
}

export default Tag;