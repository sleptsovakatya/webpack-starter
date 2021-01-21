import {combineReducers} from "redux";
import {todoReducer} from "@/redux/todoReducer";
import {modalReducer} from "@/redux/modalReducer";
import {appReducer} from "@/redux/appReducer";

export const rootReducer = combineReducers({
    todo: todoReducer,
    modal: modalReducer,
    app: appReducer
})