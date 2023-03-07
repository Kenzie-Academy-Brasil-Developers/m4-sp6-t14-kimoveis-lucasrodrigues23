import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { tRealEstateCreateData, tRealEstateReturn } from "../../interfaces/realEstate.interfaces"
import { retunrRealEstateSchema } from "../../schemas/realState.schema"


export const createRealEstateService = async (realEstateData: tRealEstateCreateData): Promise<tRealEstateReturn> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const categoryId: number = Number(realEstateData.category)
    const categoryData = await categoryRepository.findOne({
        where: {
            id: categoryId
        }
    })
    if (!categoryData) {
        throw new AppError("Category not exists", 404)
    }
    const findAddress: Array<Address> = await addressRepository.find()
    console.log('antes do finde');

    if (findAddress.find(add => add.street === realEstateData.address.street && add.zipCode === realEstateData.address.zipCode)) {
        throw new AppError('Address already exists', 409)
    }
    console.log('nao é repetido');

    const newAddress: Address = addressRepository.create(realEstateData.address)

    await addressRepository.save(newAddress)
    console.log("address");

    const realEstate = realEstateRepository.create({
        value: realEstateData.value,
        size: realEstateData.size,
        category: categoryData,
        address: newAddress
    })

    await realEstateRepository.save(realEstate)

    console.log(realEstate);

    const newRealEstate = retunrRealEstateSchema.parse(realEstate)
    console.log('final do service');


    return newRealEstate

}