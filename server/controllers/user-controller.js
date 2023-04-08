import userService from "../service/user-service.js";
import dotenv from 'dotenv'
dotenv.config()
class UserController{
    async registration(req, res, next){
        try{
            const {email, password} = req.body;
            const userData = await userService.registration(email, password)//tokens & user data
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            res.json(userData)
            
        }catch(err){
            console.log(err)
        }
    }

    async login(req, res, next){
        try{
            res.json(['ehyyyy'])
        }catch(err){
            
        }
    }

    async logout(req, res, next){
        try{
            // res.json(["ok"])
        }catch(err){
            
        }
    }

    async activate(req, res, next){
        try{
            const actiavationLink = req.params.link;
            // res.json([actiavationLink])
            await userService.activate(actiavationLink);
            return res.redirect(process.env.CLIENT_URL)
        }catch(err){
            console.log(err)
        }
    }

    async refresh(req, res, next){
        try{

        }catch(err){
            
        }
    }

    async getUsers(req, res, next){
        try{
            
        }catch(err){
            
        }
    }
}

export default new UserController();