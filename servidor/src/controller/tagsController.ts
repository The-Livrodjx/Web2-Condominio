import { getRepository } from 'typeorm'
import { Tags } from '../entity/tags'
import { Request, Response } from 'express'

export const saveTag = async (request: Request, response: Response) =>{
    console.log("Salvando os dados: tag...")
    console.log(request.body)
    const con = await getRepository(Tags).save(request.body)
    response.json(con)
}
export const getTags = async (request: Request, response: Response) =>{
    const { id } = request.params
    console.log("Recebi: " + id)
    const con = await getRepository(Tags).find({relations: ["idCondominio"], where:{idCondominio:id}})
    console.log("Retornando: " + con)
    return response.json(con)
}