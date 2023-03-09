import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule, User } from "../../entities"
import { AppError } from "../../errors"
import { tScheduleReturn } from "../../interfaces/schedules.interfaces"

export const createSchedulesService = async (scheduleData: any): Promise<tScheduleReturn> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const date = scheduleData.date.toString()
    const hour = scheduleData.hour
    const realEstateId = scheduleData.realEstateId
    const userId = scheduleData.user

    const realEstate = await realEstateRepository.findOneBy({ id: realEstateId })

    if (!realEstate) {
        throw new AppError("RealEstate not found", 404)
    }

    const user = await userRepository.findOneBy({ id: scheduleData.user })

    const ScheduleRealEstateExists = await scheduleRepository
        .createQueryBuilder('schedule')
        .where("schedule.date = :date", { date })
        .andWhere("schedule.hour = :hour", { hour })
        .andWhere("schedule.realEstateId = :realEstateId", { realEstateId })
        .getOne()

    if (ScheduleRealEstateExists) {
        if (ScheduleRealEstateExists.user === userId) {
            throw new AppError("User schedule to this real estate at this date and time already exists", 409)
        }
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    const ScheduleUserExists = await scheduleRepository
        .createQueryBuilder('schedule')
        .where("schedule.date = :date", { date })
        .andWhere("schedule.hour = :hour", { hour })
        .andWhere("schedule.user = :userId", { userId })
        .getOne()

    if (ScheduleUserExists) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    if (parseInt(hour) > 18 || parseInt(hour) < 8) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }
    const formatDate = new Date(date)
    if (formatDate.getDay() < 1 || formatDate.getDay() > 5) {
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    const newSchedule = scheduleRepository.create({
        date: date,
        hour: hour,
        realEstate: realEstate,
        user: user!
    })

    await scheduleRepository.save(newSchedule)

    return newSchedule
}