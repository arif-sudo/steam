import { IUser } from "../models/IUser";
import AuthService from "../services/AuthService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuth: false
}

interface storeState {
    user: IUser;
    isAuth: boolean;
}

interface loginCredentials {
    email: string;
    password: string;
}

//async thunks

export const login = createAsyncThunk(
    'store/login',
    async (credentials: loginCredentials, { rejectWithValue }:any) => {
        try {
            const response = await AuthService.login(credentials.email, credentials.password);
            localStorage.setItem('token', response.data.accessToken);
            return response.data.user;
        } catch (error:any) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const registration = createAsyncThunk(
    'store/registration',
    async (credentials: any, { rejectWithValue }: any) => {
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
        console.log(error)
    }
});



export const storeSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: any) => {
        builder
            .addCase(login.fulfilled, (state: storeState, action: { payload: IUser }) => {
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(registration.fulfilled, (state: storeState, action: { payload: IUser }) => {
                state.isAuth = true;
                state.user = action.payload;
            })
            .addCase(logout.fulfilled, (state: storeState) => {
                state.isAuth = false;
                state.user = {} as IUser;
            })
        //   .addCase(login.rejected, (state) => {
        //     // Handle login rejection if needed
        //   })
        //   .addCase(registration.rejected, (state) => {
        //     // Handle registration rejection if needed
        //   });
    },
})

// export const { setAuth, setUser } = storeSlice.actions
export default storeSlice.reducer

// export default class Store {

//     user = {} as IUser
//     isAuth = false


//     setAuth(bool: boolean) {
//         this.isAuth = bool
//     }

//     setUser(user: IUser) {
//         this.user = user
//     }

    // async login(email: string, password: string) {
    //     try {
    //         const response = await AuthService.login(email, password);
    //         localStorage.setItem('token', response.data.accessToken)
    //         this.setAuth(true);
    //         this.setUser(response.data.user)
    //     } catch (e: any) {
    //         console.log(e.response?.data?.message)
    //     }
    // }

//     async registration(email: string, password: string) {
//         try {
//             const response = await AuthService.registration(email, password);
//             localStorage.setItem('token', response.data.accessToken)
//             this.setAuth(true);
//             this.setUser(response.data.user)
//         } catch (e: any) {
//             console.log(e.response?.data?.message)
//         }
//     }

//     async logout() {
//         try {
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//             const response = await AuthService.logout();
//             localStorage.removeItem('token')
//             this.setAuth(false);
//             this.setUser({} as IUser)
//         } catch (e: any) {
//             console.log(e.response?.data?.message)
//         }
//     }
// }