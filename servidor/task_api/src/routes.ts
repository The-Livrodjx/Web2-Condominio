
import { Router, Request, Response, response } from 'express'

import { alterCon, delCon, getCon, getCondominio, saveCondominio } from './controller/CondominioController'

const routes = Router()
routes.get('/',(request: Request, response: Response) =>{
  console.log("conectado")
})

routes.get('/retornarDados', getCondominio)

routes.post('/Cadastro', saveCondominio)
routes.get('/Procurar/:cnpj', getCon)
routes.put('/condominio/:idcondominio', alterCon)
routes.delete('/condominio/:idcondominio', delCon)

export default routes;
