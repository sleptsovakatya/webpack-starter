import {
    CLOSE_MODAL, CREATE_TODO,
    DELETE_TODO,
    FETCH_TODO, HIDE_ALERT,
    HIDE_LOADER,
    OPEN_MODAL, SHOW_ALERT,
    SHOW_LOADER,
    TOGGLE_TODO
} from "@/redux/types";

export function fetchTodos() {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            const json = await response.json()
            //эмулируем задержку ответа от сервера
            setTimeout(() => {
                dispatch({
                    type: FETCH_TODO,
                    payload: json
                })
                dispatch(hideLoader())
            }, 2000)
        } catch(e) {
            console.log(e.toString())
            dispatch(hideLoader())
        }
    }
}
function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}
export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export function createTodo(title) {
    return {
        type: CREATE_TODO,
        payload: title
    }
}

export function openModal() {
    return {
        type: OPEN_MODAL
    }
}

export function closeModal() {
    return {
        type: CLOSE_MODAL
    }
}

export function showAlert(text, timeout) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => dispatch(hideAlert()), timeout)
    }
}

export function hideAlert() {
    return {
        type:HIDE_ALERT
    }
}
