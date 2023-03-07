import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category, RealEstate } from "../../entities"
import { AppError } from "../../errors"
import { tListCategoriesProperties } from "../../interfaces/category.interfaces"
import { tListRealEstate } from "../../interfaces/realEstate.interfaces"
import { listCategoryPropertiesSChema } from "../../schemas/categories.schema"
import { listRealEstateSchema } from "../../schemas/realState.schema"


export const listCategoryPropertiesService = async (catId: number): Promise<tListCategoriesProperties> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const category = await categoryRepository.findOne({
        where: {
            id: catId
        }
    })

    if (!category) {
        throw new AppError('Category not found', 404)
    }

    const categoryProperties = categoryRepository.find({
        where: {
            id: catId
        },
        relations: {
            realEstate: true
        }
    })



    const returnCategoryProperties = listCategoryPropertiesSChema.parse(categoryProperties)

    return returnCategoryProperties


}