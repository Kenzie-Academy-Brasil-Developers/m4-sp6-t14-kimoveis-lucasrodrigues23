import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { RealEstate, Schedule } from "../../entities"
import { AppError } from "../../errors"

export const listPropertiesSchedulesService = async (reqId: number) => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheuleRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const findRealEstate = await realEstateRepository.findOne({ where: { id: reqId } })
    console.log(findRealEstate);

    if (findRealEstate === null) {
        throw new AppError("RealEstate not found", 404)
    }

    const schedules = await scheuleRepository.findOne({
        relations: {
            realEstate: true,
            user: true,
        },
        where: {
            realEstate: {
                id: reqId
            }
        }
    })
    console.log(schedules);

    return schedules

}