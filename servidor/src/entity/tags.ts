
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import {condominio} from './condominio';

@Entity()
export class Tags{

    @PrimaryGeneratedColumn()
    idTags: number;

    @Column()
    Tags: String;

    @ManyToOne(() => condominio)
    @JoinColumn({name: "Condominio"})
    idCondominio: condominio;

}