import { Request, Response } from "express"
import { createRealEstateService } from "../services/realEstate/createRealEstate.services"
import { listRealStatesService } from "../services/realEstate/listRealEstates.services";

export const createRealStateController = async (req: Request, res: Response): Promise<Response> => {

    const newRealEstate = await createRealEstateService(req.body)

    return res.status(201).json(newRealEstate)
}

export const listRealStatesController = async (req: Request, res: Response): Promise<Response> => {
    console.log('entou na controler');
    const listRealEstate = await listRealStatesService()
    console.log('hello world!');

    return res.status(200).json(listRealEstate)
}