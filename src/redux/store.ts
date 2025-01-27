import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/auth/AuthSlice"
import { baseApi } from "./api/BaseApi";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig={
    key:"auth",
    storage
}

const persistedAuthReducer=persistReducer(persistConfig,authReducer);

export const store=configureStore({
    reducer: {
        // Define your reducers here
        [baseApi.reducerPath]:baseApi.reducer,
        auth:persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE, PAUSE,PERSIST,PURGE,REGISTER]
        }
    }).concat(baseApi.middleware),
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const persistor=persistStore(store)