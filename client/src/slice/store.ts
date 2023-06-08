import axios from "axios";
// import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import { AuthResponse } from "../models/response/AuthResponse";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../http";

interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}

interface storeState {
    isAuth: boolean;
    user: IUser;
}

const initialState = {
    isAuth: false,
    user: {},
}

interface loginCredentials {
    email: string;
    password: string;
}

//async thunks

export const login = createAsyncThunk(
    'store/login',
    async (credentials: loginCredentials, { rejectWithValue }: any) => {
        try {
            const response = await AuthService.login(credentials.email, credentials.password);
            //The fulfilled action will have the response value returned from the async callback function as its payload. In this case, it will be response.data.accessToken, which is the access token obtained from the API response.
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const registration = createAsyncThunk(
    'store/registration',
    async (credentials: loginCredentials, { rejectWithValue }: any) => {
        try {
            const response = await AuthService.registration(credentials.email, credentials.password);
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const logout = createAsyncThunk('store/logout', async () => {
    try {
        await AuthService.logout();
        localStorage.removeItem('token');
    } catch (error: any) {
        console.log(error.response?.data?.message)
    }
});

export const checkauth = createAsyncThunk('store/refresh', async () => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
        localStorage.setItem('token', response.data.accessToken)
        return response.data.user

    } catch (error: any) {
        console.log(error.response?.data?.message)
        // return rejectWithValue(error.response?.data?.message);
    }
})



export const storeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(login.fulfilled, (state: storeState, action: { type: string, payload: IUser, meta: any }) => {
                state.isAuth = true;
                state.user = { ...action.payload };
            })
            .addCase(registration.fulfilled, (state: storeState, action: { type: string, payload: IUser, meta: any }) => {
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state: storeState) => {
                state.isAuth = false;
                state.user = {} as IUser;
            })
            .addCase(checkauth.fulfilled, (state: storeState, action: { type: string, payload: IUser, meta: any }) => {
                state.isAuth = true;
                state.user = action.payload;
            })
    },
})

export default storeSlice.reducer
