import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { tUserCreateData, tUserReturn } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schemas/users.schema"

export const createUserService = async (userData: any): Promise<tUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: any = userRepository.create(userData)

    await userRepository.save(user)

    const newUser = returnUserSchema.parse(user)

    return newUser

}