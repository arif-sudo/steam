import UserModel from "../models/user-model.js"
import bcrypt from "bcrypt"
import crypto from 'crypto'

import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dtos.js";

class UserService{
    async registration(email, password){
        const candidate = await UserModel.findOne({email});//first we testing if there is a user 

        if (candidate){
            throw new Error(`User with email address ${email} already exsists`)//iff there is a user we throw an error
        }

    
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = crypto.randomUUID()
        
        const user = await UserModel.create({email, password: hashPassword});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)//popravim
        
        const userDto = new UserDto(user); //id email isActivated
        const tokens = tokenService.generateTokens({...userDto})//generateToken func expects an object not reference thats why we using spread operator
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens,  user: userDto}// refresh , acces token, and user informarion are saved/returned
    }
}

export default new UserService()