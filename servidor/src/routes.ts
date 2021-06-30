
import { Router, Request, Response, response } from 'express'

import { alterCon, delCon, getCon, getCondominio, saveCondominio } from './controller/CondominioController'

import { getTags, saveTag } from './controller/tagsController'
const routes = Router()
routes.get('/',(request: Request, response: Response) =>{
  console.log("conectado")
})

//condominio
routes.get('/retornarDados', getCondominio)
routes.post('/Cadastro', saveCondominio)
routes.get('/Procurar/:cnpj/:Senha', getCon)
routes.put('/condominio/:idcondominio', alterCon)
routes.delete('/condominio/:idcondominio', delCon)
//Tag
routes.post("/SaveTag", saveTag)
routes.get("/GetTags/:id", getTags)
//Usuario

export default routes;
