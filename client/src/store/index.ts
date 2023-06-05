import authReducer from '../slice/index'
import storeReducer from '../slice/store'
import { blogReducer } from '../myredux/reducer';
import wishlistReducer from '../myredux/wishlistReducer';
import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
  auth: authReducer,
  blogs: blogReducer,
  user: storeReducer,
  wish: wishlistReducer
})

const persistConfig = {key: "root", storage: storage}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware:any) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export const persistor = persistStore(store)
export default store

//types
type AppDispatch = typeof store.dispatch
type RootStore = ReturnType<typeof store.getState>;

//typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector