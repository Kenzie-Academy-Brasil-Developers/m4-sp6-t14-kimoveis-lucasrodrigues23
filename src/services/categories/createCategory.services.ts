import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Category } from "../../entities"
import { AppError } from "../../errors"
import { tCategoryCreateData, tCategoryrReturn } from "../../interfaces/category.interfaces"
import { createCategorySchema, returnCategorySchema } from "../../schemas/categories.schema"


export const createCategoryService = async (categoryData: any): Promise<tCategoryrReturn> => {
    const data: tCategoryCreateData = createCategorySchema.parse(categoryData)

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory = await categoryRepository.findOne({
        where: {
            name: data.name
        }
    })

    if (findCategory) {
        throw new AppError('Category already exists', 409)
    }
    const category: Category = categoryRepository.create(data)

    await categoryRepository.save(category)

    const newCategory = returnCategorySchema.parse(category)

    return newCategory
}