import React from 'react'
import PropTypes from 'prop-types'
import {deleteTodo, toggleTodo} from "@/redux/action";
import {useDispatch} from "react-redux";

export default function TodoItem({ todo, index}) {

    const styles = {
        li: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '.5rem 1rem',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginBottom: '.5rem'
        },
        input: {
            marginRight: '1rem'
        }
    }

    const classes = []
    if (todo.completed) {
        classes.push('done')

    }
    const dispatch = useDispatch()

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input checked={todo.completed} type="checkbox" style={styles.input}
                       onChange={() => dispatch(toggleTodo(todo.id))}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={() => dispatch(deleteTodo(todo.id))}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}