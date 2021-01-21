import {CREATE_TODO, DELETE_TODO, FETCH_TODO, HIDE_LOADER, SHOW_LOADER, TOGGLE_TODO} from "@/redux/types";

const initialTodoListState = {
    todos: [],
    loading: true
}

export const todoReducer = (state = initialTodoListState, action) => {
    switch (action.type) {
        case FETCH_TODO:
            return {...state, todos: action.payload}
        case TOGGLE_TODO:
            return {...state, todos: state.todos.map(todo =>
                    todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)}
        case DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case CREATE_TODO:
            return {...state, todos: state.todos.concat([{
                    //push не можем использовать, потому что он мутирует предыдущий стейт. Нужно создать новый объект
                    id: Date.now(),
                    completed: false,
                    title: action.payload
                }])}
        case SHOW_LOADER:
            return {...state, loading: true}
        case HIDE_LOADER:
            return {...state, loading: false}
        default: return state
    }
}