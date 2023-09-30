import express from "express";
import AppDataSource from "./dbConnect";
import {Photo} from "./entries/Photo";

const routes = express.Router();

routes.get('/', async (req, res) => {

    const userRepository = AppDataSource.getRepository(Photo);
    const resData = await userRepository.find();

    res.status(200).json({message: "Hey.",resData});
})

export default routes;