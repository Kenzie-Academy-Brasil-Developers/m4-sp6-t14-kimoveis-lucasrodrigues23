import { Request } from "express"
import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { AppError } from "../../errors"
import { tUserReturn } from "../../interfaces/user.interfaces"
import { returnUserSchema } from "../../schemas/users.schema"

const updateUserService = async (req: Request): Promise<tUserReturn> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const validateUser = await userRepository.findOne({
        where: {
            id: Number(req.params.id)
        }
    })

    if (validateUser && validateUser.admin && Number(req.params.id) !== req.user.id) {

        throw new AppError('Insufficient permission', 403)
    }
    if (validateUser && !validateUser.admin && req.body.admin) {
        req.body.admin = false
    }

    const oldUserData = await userRepository.findOneBy({
        id: Number(req.params.id)
    })

    const user = userRepository.create({
        ...oldUserData,
        ...req.body
    })

    await userRepository.save(user)

    const updatedUser = returnUserSchema.parse(user)

    return updatedUser

}

export default updateUserService