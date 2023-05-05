import $api from "../http";
import { AxiosResponse } from "axios";

interface AuthResponse {
    accessToken: string,
    refreshToken: string,
    user: {
        id: number,
        isActivated: boolean,
        email: string
    }
}

export default class AuthService {
    static async login(email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async registration(email:string, password:string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }
}