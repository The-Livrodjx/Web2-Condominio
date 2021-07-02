import { getRepository } from 'typeorm'
import { Morador } from '../entity/usuario'
import { Request, Response } from 'express'

export const saveUser = async (request: Request, response: Response) =>{
    console.log("Salvando os dados: Morador...")
    console.log(request.body)
    const con = await getRepository(Morador).save(request.body)
    response.json(con)
}
export const getUsers = async (request: Request, response: Response) =>{
    const { id } = request.params
    console.log("Recebi: " + id)
    const con = await getRepository(Morador).find({relations: ["idCondominio"], where:{idCondominio:id}})
    console.log("Retornando: " + con)
    return response.json(con)
}