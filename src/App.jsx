import React from 'react'
import TodoList from "@/components/TodoList.jsx";
import Loader from "@/components/Loader.jsx";
import Modal from "@/components/Modal/Modal.jsx";
import {fetchTodos} from "@/redux/action";
import {useDispatch, useSelector} from "react-redux";
import Alert from "@/components/Alert.jsx";



//lazy loading
//имитация задержки
const AddTodo = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('@/components/AddTodo.jsx'))
    }, 4000)
}))

function App() {
    /*
    Реализация без Redux

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
    }, [])*/

    const todos = useSelector(state => state.todo.todos)
    const alert = useSelector(state => state.app.alert)

    if (!todos.length) {
        useDispatch()(fetchTodos())
    }

    return (
        <div className="container sm">
            <h1>React tutorial</h1>
            <div className="row">
                {alert && <Alert text={alert}/>}
                <div className="col">
                    <Modal/>
                </div>
                <pre/>
            </div>
            <div className="row">
                <div className="col">
                    {/*lazy loading*/}
                    <React.Suspense fallback={<Loader/>}>
                        <AddTodo/>
                    </React.Suspense>
                </div>
                <pre/>
                <pre/>
            </div>
            <div className="row">
                <div className="col">
                    <TodoList/>
                </div>
                <pre/>
            </div>
            <div className="row">
                <div className="col">
                    <div className="logo"/>
                </div>
            </div>
        </div>
    )
}

export default App