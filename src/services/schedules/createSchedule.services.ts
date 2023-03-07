import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Schedule } from "../../entities"
import { tScheduleCreateData, tScheduleReturn } from "../../interfaces/schedules.interfaces"
import { returnScheduleSchema } from "../../schemas/schedules.schema"

export const createSchedulesService = async (scheduleData: any): Promise<tScheduleReturn> => {

    const scheduleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const schedule = scheduleRepository.create(scheduleData)

    await scheduleRepository.save(schedule)

    const nerSchedule = returnScheduleSchema.parse(schedule)

    return nerSchedule
}