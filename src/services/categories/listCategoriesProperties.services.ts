import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { tListRealEstate } from "../../interfaces/realEstate.interfaces"
import { listRealEstateSchema } from "../../schemas/realState.schema"


export const listCategoryPropertiesService = async (catId: number): Promise<tListRealEstate> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const category = await categoryRepository.find({
        where: {
            id: catId
        }
    })

    if (!category) {
        throw new AppError('Category not found', 404)
    }
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const categoryProperties = await realEstateRepository.find({
        relations: {
            address: true,
            category: true
        },
        where: {
            category: {
                id: catId
            }
        }
    })

    const returnCategoryProperties = listRealEstateSchema.parse(categoryProperties)


    return returnCategoryProperties


}