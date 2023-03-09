import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { tListCategories } from "../../interfaces/category.interfaces";


export const listCategoriesService = async (): Promise<tListCategories> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categories = await categoryRepository.find()

    return categories

}