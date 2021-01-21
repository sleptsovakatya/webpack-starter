import {HIDE_ALERT, SHOW_ALERT} from "@/redux/types";

export const appReducer = (state = {alert: null}, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, alert: action.payload}
        case HIDE_ALERT:
            return {...state, alert: null}
        default: return state
    }
}