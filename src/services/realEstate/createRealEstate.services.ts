import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, RealEstate } from "../../entities"
import { tRealEstateCreateData, tRealEstateReturn } from "../../interfaces/realEstate.interfaces"
import { retunrRealEstateSchema } from "../../schemas/realState.schema"


export const createRealEstateService = async (realEstateData: tRealEstateCreateData): Promise<tRealEstateReturn> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const newAddress: Address = addressRepository.create(realEstateData.address)

    await addressRepository.save(newAddress)
    console.log("newaddress", newAddress);

    const realEstate: RealEstate = realEstateRepository.create({
/*         value: realEstateData.value,
        size: realEstateData.size,
        categoryId: realEstateData.category,
        address: newAddress */
    })

    await realEstateRepository.save(realEstate)

    const newRealEstate = retunrRealEstateSchema.parse(realEstate)


    return newRealEstate

}