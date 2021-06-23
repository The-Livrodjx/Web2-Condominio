import { getRepository } from 'typeorm'
import { condominio } from '../entity/condominio'
import { Request, Response } from 'express'

export const getCondominio = async (request: Request, response: Response) =>{
    console.log("Retornando os dados...")
    const con = await getRepository(condominio).find()
    return response.json(con)
}
export const saveCondominio = async (request: Request, response: Response) =>{
    console.log("Salvando os dados...")
    console.log(request.body)
    const con = await getRepository(condominio).save(request.body)
    response.json(con)
}
export const getCon = async (request: Request, response: Response) => {
    console.log("Pesquisando...")
    const { cnpj } = request.params
    const con = await getRepository(condominio).findOne({cnpj: cnpj})
    return response.json(con)
}
export const alterCon = async (request: Request, response: Response) => {
    const{ idcondominio } = request.params
    const con = await getRepository(condominio).update(idcondominio,request.body)
    if(con.affected == 1){
       return response.json({message:"Alterado"})
    }
    return response.json({message:"Deu merda"})
    
}
export const delCon = async (request: Request, response: Response) =>{
    const {idcondominio} = await request.params
    const con = await getRepository(condominio).delete(idcondominio)
    if(con.affected == 1){
        
        return response.json({message: "Deletado"})
    }else{
        return response.status(404).json({message:"Deu merda"})
    }
}