import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./RealEstate.entity";
import { User } from "./user.entity";

@Entity('schedules_users_properties')

export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => RealEstate, realstate => realstate.schedule)
    realEstate: RealEstate

    @ManyToOne(() => User, user => user.id)
    user: User
}