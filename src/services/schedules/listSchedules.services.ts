import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"

export const listPropertiesSchedulesService = async (reqId: number) => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheuleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const findRealEstate = await realEstateRepository.findOne({ where: { id: reqId } })

    if (findRealEstate === null) {
        throw new AppError("RealEstate not found", 404)
    }

    const schedules = await realEstateRepository.findOne({
        relations: {
            address: true,
            category: true,
            schedules: {
                user: true
            }
        },
        where: {
            id: reqId
        }
    })


    return schedules

}