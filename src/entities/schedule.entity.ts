import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate.entity";
import { User } from "./user.entity";

@Entity('schedules_users_properties')

export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    date: string

    @Column()
    hour: string

    @ManyToOne(() => RealEstate, realstate => realstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => User, user => user.schedule)
    user: User
}