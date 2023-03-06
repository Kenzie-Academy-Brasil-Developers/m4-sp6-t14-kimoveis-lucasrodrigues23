import { Request, Response } from "express"
import { createRealEstateService } from "../services/realEstate/createRealEstate.services"
import { listRealStatesService } from "../services/realEstate/listRealEstates.services";

export const createRealStateController = async (req: Request, res: Response): Promise<Response> => {

    const newRealEstate = await createRealEstateService(req.body)
    console.log(newRealEstate);

    return res.status(200).json(newRealEstate)
}

export const listRealStatesController = async (req: Request, res: Response): Promise<Response> => {

    const listRealEstate = await listRealStatesService()

    return res.status(200).json(listRealEstate)
}