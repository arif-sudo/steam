import userService from "../service/user-service.js";
import dotenv from 'dotenv'
dotenv.config()

import { validationResult } from "express-validator";
import ApiError from "../exceptions/api-error.js";

class UserController{
    async registration(req, res, next){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest("Validation error", errors.array()))
            }
            const {email, password} = req.body;
            const userData = await userService.registration(email, password)//tokens & user data
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            res.json(userData)
            
        }catch(err){
            next(err)
        }
    }

    async login(req, res, next){
        try{
            res.json(['ehyyyy'])
        }catch(err){
            next(err)
        }
    }

    async logout(req, res, next){
        try{
            // res.json(["ok"])
        }catch(err){
            next(err)
        }
    }

    async activate(req, res, next){
        try{
            const actiavationLink = req.params.link;
            // res.json([actiavationLink])
            await userService.activate(actiavationLink);
            return res.redirect(process.env.CLIENT_URL)
        }catch(err){
            next(err)
        }
    }

    async refresh(req, res, next){
        try{

        }catch(err){
            next(err)
        }
    }

    async getUsers(req, res, next){
        try{
            
        }catch(err){
            next(err)
        }
    }
}

export default new UserController();