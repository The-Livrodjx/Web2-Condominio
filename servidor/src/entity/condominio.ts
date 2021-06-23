import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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

}