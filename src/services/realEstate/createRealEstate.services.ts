import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Address, Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { tRealEstateCreateData, tRealEstateReturn } from "../../interfaces/realEstate.interfaces"
import { retunrRealEstateSchema } from "../../schemas/realState.schema"


export const createRealEstateService = async (realEstateData: tRealEstateCreateData): Promise<tRealEstateReturn> => {
    console.log(realEstateData);

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    const categoryId: number = Number(realEstateData.categoryId)
    const categoryData = await categoryRepository.findOne({
        where: {
            id: categoryId
        }
    })
    if (!categoryData) {
        throw new AppError("Category not exists", 404)
    }
    const findAddress: Array<Address> = await addressRepository.find()


    if (findAddress.find(add => add.street === realEstateData.address.street && add.zipCode === realEstateData.address.zipCode)) {
        throw new AppError('Address already exists', 409)
    }

    const newAddress: Address = addressRepository.create(realEstateData.address)

    await addressRepository.save(newAddress)


    const realEstate = realEstateRepository.create({
        value: realEstateData.value,
        size: realEstateData.size,
        category: categoryData,
        address: newAddress
    })

    await realEstateRepository.save(realEstate)



    const newRealEstate = retunrRealEstateSchema.parse(realEstate)



    return newRealEstate

}