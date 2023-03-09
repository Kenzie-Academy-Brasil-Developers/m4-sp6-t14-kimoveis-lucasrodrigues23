import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('addresses')
@Unique(['street', 'zipCode', 'city', 'state'])
export class Address {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ length: 45 })
    street: string

    @Column({ length: 8 })
    zipCode: string

    @Column({ length: 7, nullable: true })
    number: string

    @Column({ length: 20 })
    city: string

    @Column({ length: 2 })
    state: string
}