import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')

export class User {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    name: string

    @Column({ length: 45, unique: true })
    email: string

    @Column({ type: 'boolean', default: false })
    admin?: boolean | null | undefined

    @Column({ length: 120 })
    password: string

    @CreateDateColumn({ name: 'createdAt' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updatedAt' })
    updatedAt!: Date;

    @DeleteDateColumn({ name: 'deletedAt' })
    deletedAt: string
}