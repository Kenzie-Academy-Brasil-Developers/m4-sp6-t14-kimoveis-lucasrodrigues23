import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"
import { tListCategoriesProperties } from "../../interfaces/category.interfaces"
import { listCategoryPropertiesSChema } from "../../schemas/categories.schema"

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

    const categoryProperties = await categoryRepository.findOne({
        where: {
            id: catId
        },
        relations: {
            realEstate: true
        }
    })

    console.log(categoryProperties);


    const returnCategoryProperties = listCategoryPropertiesSChema.parse(categoryProperties)

    return returnCategoryProperties


}