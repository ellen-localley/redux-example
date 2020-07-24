import React from "react";

const TodoItem = ({todo, onToggle, onRemove}) => {
    return (
        <>
            <input type="checkbox"
                   onClick={()=>onToggle(todo.id)}
                   checked={todo.done}
                   readOnly={true}/>
           <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
               {todo.text}
           </span>
            <button onClick={()=>onRemove(todo.id)}>삭제</button>
        </>
    )
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault()
        onInsert(input)
        onChangeInput('')
    }
    const onChange = e => {
        onChangeInput(e.target.value)
    }
    return (
        <div>
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" value={input} onChange={onChange}/>
                    <button type={"submit"}>등록</button>
                </form>
            </div>
            <div>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo}
                                  key={todo.id}
                                  onToggle={onToggle}
                                  onRemove={onRemove}/>)
                    )
                }
            </div>
        </div>
    )
}

export default Todos