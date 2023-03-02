import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate.entity";

@Entity('categories')

export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    name: string
}   