import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import {change_input, insert, remove, toggle} from "./todo.reducer";
import TodoComponent from "./TodoComponent";

const TodoContainer = () => {
    const input = useSelector(state => state.TodoReducer.todo)
    const todo = useSelector(state => state.TodoReducer.todo)
    const dispatch = useDispatch()
    const onChangeInput = useCallback(()=>dispatch(change_input), [dispatch])
    const onInsert = useCallback(()=>dispatch(insert), [dispatch])
    const onToggle = useCallback(()=>dispatch(toggle), [dispatch])
    const onRemove = useCallback(()=>dispatch(remove), [dispatch])
    // return (
    //     // <TodoComponent input={input} todo={todo} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>
    // )
}
export default TodoContainer