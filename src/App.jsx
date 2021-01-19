import React, { useEffect} from 'react'
import Context from "@/context";
import TodoList from "@/Todo/TodoList.jsx";
import Loader from "@/Loader.jsx";
import Modal from "@/Modal/Modal.jsx";

//lazy loading
const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('@/Todo/AddTodo.jsx'))
    }, 4000)
}))

function App() {
    const [todos, setTodos] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(todos =>
                setTimeout(() => {
                    setTodos(todos)
                    setLoading(false)
                }, 2000))
    }, [])

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function addTodo(title) {
        setTodos(todos.concat([
            {
                id: Date.now(),
                completed: false,
                title: title
            }
        ]))
    }

    return (
        <Context.Provider value={{ deleteTodo, toggleTodo}}>
            <div className="wrapper">
                <h1>React tutorial</h1>
                <Modal/>
                {/*lazy loading*/}
                <React.Suspense fallback={<Loader/>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>
                {loading && <Loader/>}
                {todos.length ? <TodoList todos={todos}/> : loading ? null : <p>No todos!</p>}
                <hr/>
                <div className="logo"/>
                <hr/>
                <pre/>
                <hr/>
            </div>
        </Context.Provider>
    )
}

export default App