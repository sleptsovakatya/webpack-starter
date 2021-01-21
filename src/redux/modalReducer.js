import {CLOSE_MODAL, OPEN_MODAL} from "@/redux/types";

export const modalReducer = (state = {isOpen : false}, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {...state, isOpen: true}
        case CLOSE_MODAL:
            return {...state, isOpen: false}
        default: return state
    }
}