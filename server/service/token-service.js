import jwt from "jsonwebtoken"
import TokenModel from "../models/token-model.js";

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30s' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30d"});
        return {
            accessToken,
            refreshToken
        }
        // TypeError: tokenService.generateTokens is not a constructor
    }

    validateAccessToken(token){
        try{
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData;
        }catch(err){
            return null;
        }
    }
    validateRefreshToken(token){
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData;
        }catch(err){
            return null;
        }
    }

    async saveToken(userId, refreshToken){
        const tokenData = await TokenModel.findOne({user: userId});
        if (tokenData){
            tokenData.refreshToken = refreshToken;
            console.log(refreshToken, 'isdiyiesen?')
            return tokenData.save();
        }

        const token = await TokenModel.create({user: userId, refreshToken});//user logining for the first time

        return token;
    }

    async removeToken(refreshToken){
        const tokenData = await TokenModel.deleteOne({refreshToken});
        return tokenData
    }

    async findToken(refreshToken){
        console.log(refreshToken,'rfrdsh TOKEN')
        const tokenData = await TokenModel.findOne({refreshToken});
        console.log(tokenData, 'tapdin?')
        return tokenData
    }
}

export default new TokenService()