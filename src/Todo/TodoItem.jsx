import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from "@/context";

function TodoItem({ todo, index}) {
    const { deleteTodo, toggleTodo} = useContext(Context)

    console.log('todo', todo)
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
    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input checked={todo.completed} type="checkbox" style={styles.input}
                       onChange={toggleTodo.bind(null, todo.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>

            <button className="rm" onClick={deleteTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem