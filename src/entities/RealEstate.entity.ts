import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";

@Entity('real_state')

export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2 })
    value: number

    @Column({ type: 'integer' })
    size: number

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @ManyToOne(() => Category, { nullable: true })
    categories?: Category | null | undefined

}