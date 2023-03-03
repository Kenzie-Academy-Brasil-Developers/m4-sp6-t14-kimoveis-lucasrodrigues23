import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, BeforeInsert, AfterLoad } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";

@Entity('real_state')

export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    value: number | string

    @Column({ type: 'integer' })
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(() => Address, { nullable: true })
    @JoinColumn()
    address?: Address | null | undefined

    @OneToMany(() => Category, categories => categories.id)
    categories: Category[]

}