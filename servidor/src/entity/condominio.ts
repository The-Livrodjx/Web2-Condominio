import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Tags } from "./tags";
import { Morador } from "./usuario";
@Entity()
export class condominio {

    @PrimaryGeneratedColumn()
    idcondominio: number;

    @Column()
    nomeCondominio: string;

    @Column()
    cnpj: string;

    @Column()
    endereco: string;

    @Column()
    Cidade: string;

    @Column()
    Email: string;

    @Column()

    Estado: string;

    @Column()

    Senha: string;

    @OneToMany(type => Morador, morador => morador.idCondominio)
    Morador: Morador;

    @OneToMany(type => Tags, tags => tags.Tags)
    Tags: Tags;

}