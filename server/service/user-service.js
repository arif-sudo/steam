import UserModel from "../models/user-model.js"
import bcrypt from "bcrypt"
import crypto from 'crypto'

import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDto from "../dtos/user-dtos.js";

import ApiError from "../exceptions/api-error.js";

class UserService{
    async registration(email, password){
        const candidate = await UserModel.findOne({email});//first we testing if there is a user 

        if (candidate){
            throw ApiError.BadRequest( `User with email address ${email} already exsists`)//iff there is a user we throw an error
        }

        let stringPassword = password //.toString() 
        const hashPassword = await bcrypt.hash(stringPassword, 3);
        const activationLink = crypto.randomUUID()
        
        const user = await UserModel.create({email, password: hashPassword, activationLink});
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)//popravim
        
        const userDto =  new UserDto(user); //id email isActivated
        const tokens = tokenService.generateTokens({...userDto})//generateToken func expects an object not reference thats why we using spread operator
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens,  user: userDto}// refresh , acces token, and user informarion are saved/returned
    }

    async activate(activationLink){
        const user = await UserModel.findOne({activationLink});
        if(!user){
            throw  ApiError.BadRequest("Uncorrect activation link");
        }
        user.isActivated = true;
        await user.save();

    }

    async login(email, password){
        const user = await UserModel.findOne({email});
        if(!user){
            throw ApiError.BadRequest("User not found")
        }
        const isPassEquals = await bcrypt.compare(password, user.password); 

        if(!isPassEquals){
            throw ApiError.BadRequest("Incorrect password")
        } 
        const userDto = new UserDto(user);
        const tokens =  tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens,  user: userDto}
    }

    async logout(refreshToken){
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken){
        if (!refreshToken){
            throw ApiError.UnauthorizedError();
        }
        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = tokenService.findToken(refreshToken); 
        if(!userData || !tokenFromDb){
            throw ApiError.UnauthorizedError();
        }

        //the code below is the reason that tokenFromDb is null; Find the way that the code above is execites first and then the one that below

        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return {...tokens, user: userDto}
    } 

    async getAllUsers(){
        const users = await UserModel.find();//returns all
        return users;
    }
}

export default new UserService()