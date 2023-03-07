import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"
import { tScheduleReturn } from "../../interfaces/schedules.interfaces"
import { returnScheduleSchema } from "../../schemas/schedules.schema"

export const createSchedulesService = async (scheduleData: any): Promise<tScheduleReturn> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const validateRealEstate = await realEstateRepository.findOne({
        where: {
            id: scheduleData.realEstate
        }
    })

    if (!validateRealEstate) {
        throw new AppError('RealEstate not found', 404)
    }
    const validateUser = await userRepository.findOne({
        where: {
            id: scheduleData.user
        },
        relations: {
            schedule: true
        }
    })
    console.log(validateUser?.schedule);

    if (validateUser?.schedule.find(schedule => schedule.hour.toString() === scheduleData.hour.toString() && schedule.date.toString() === scheduleData.date.toString())) {
        throw new AppError('Hour already used.', 409)
    }


    const schedule = scheduleRepository.create(scheduleData)

    await scheduleRepository.save(schedule)

    const nerSchedule = returnScheduleSchema.parse(schedule)

    return nerSchedule
}