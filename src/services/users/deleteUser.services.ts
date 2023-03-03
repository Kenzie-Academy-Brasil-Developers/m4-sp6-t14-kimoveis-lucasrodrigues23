import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"

const softDeleteUserService = async (userId: number): Promise<void> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            id: userId
        }
    })

    if (user && user.admin === true) {

        throw new AppError('Insufficient Permission', 403)
    }
    await userRepository.softRemove(user!)
}


export default softDeleteUserService