import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";

import { tListRealEstate } from "../../interfaces/realEstate.interfaces";
import { listRealEstateSchema } from "../../schemas/realState.schema";

export const listRealStatesService = async (): Promise<tListRealEstate> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate: Array<RealEstate> = await realEstateRepository.find({
        relations: {
            address: true,
            category: true
        }
    })



    const listRealEstate = listRealEstateSchema.parse(findRealEstate)


    return listRealEstate
}