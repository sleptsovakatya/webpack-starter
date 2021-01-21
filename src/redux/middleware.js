import {CREATE_TODO} from "@/redux/types";
import {showAlert} from "@/redux/action";

export function forbiddenWordsMiddleware ({ dispatch }) {
    const forbidden = ['php', 'jquery']
    return function(next) {
        return function(action) {
            if (action.type === CREATE_TODO) {
                const found = forbidden.filter(w => action.payload.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Сработал фильтр',3000))
                }
            }
            return next(action)
        }
    }
}