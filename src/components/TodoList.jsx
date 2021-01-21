import React from 'react'
import TodoItem from "@/components/TodoItem.jsx";
import {useSelector} from "react-redux";
import Loader from "@/components/Loader.jsx";
import BootstrapLoader from "@/components/BootstrapLoader.jsx";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

export default () => {
    const todos = useSelector(state => state.todo.todos)
    const loading = useSelector(state => state.todo.loading)
    if (loading) {
        return <BootstrapLoader />
    }
    if (!todos.length) {
        return <p>No todos!</p>
    }
    return (
        <ul style={styles.ul}>
            {todos.map((todo, index) => {
                return <TodoItem
                    todo={todo}
                    key={todo.id}
                    index={index}/>
            })}
        </ul>
    )
}