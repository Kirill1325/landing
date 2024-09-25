import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import modalSlice from "../widgets/Modal/model/modalSlice";
import submittedModalSlice from "../widgets/SubmittedModal/model/submittedModalSlice";


const rootReducer = combineReducers({
    modalSlice,
    submittedModalSlice
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store