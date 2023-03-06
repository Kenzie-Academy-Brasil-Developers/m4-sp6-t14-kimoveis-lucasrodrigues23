import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, BeforeInsert, AfterLoad, ManyToOne } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

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

    @ManyToOne(() => Category, (category) => category.id)
    category: Category

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedule: Schedule
}