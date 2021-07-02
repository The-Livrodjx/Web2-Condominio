import { Column, Entity, ManyToOne, PrimaryGeneratedColumn ,JoinColumn } from "typeorm";
import {condominio} from './condominio';

@Entity()
export class Morador{

    @PrimaryGeneratedColumn()
    idMorador: number

    @Column()
    cpf: String

    @Column()
    Email: String

    @Column()
    Senha: String

    @Column()
    Nome: String

    @Column()
    ApBloco: String

    @Column()
    tags: String

    @ManyToOne(() => condominio)
    @JoinColumn({name: "Condominio"})
    idCondominio: condominio;

}