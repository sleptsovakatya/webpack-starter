import React, {useState} from 'react'
import {useDispatch} from "react-redux";
import {createTodo} from "@/redux/action";

function useInputValue(defaultValue='') {

    const [value, setValue] = useState(defaultValue)

    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

export default () => {
    const dispatch = useDispatch()
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            dispatch(createTodo(input.value()));
            input.clear()
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Новая задача</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    {...input.bind}/>
                    <div id="help" className="form-text">Поле ввода фильтрует названия со словом 'jquery'</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}