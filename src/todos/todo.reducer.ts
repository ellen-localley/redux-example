import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = 'todo/CHANGE_INPUT'
const INSERT = 'todo/INSERT'
const TOGGLE = 'todo/TOGGLE'
const REMOVE = 'todo/REMOVE'

export const change_input = () => createAction(CHANGE_INPUT)
export const insert = () => createAction(INSERT)
export const toggle = () => createAction(TOGGLE)
export const remove = () => createAction(REMOVE)

const initialState = { todo: '' }

const TodoReducer = handleActions(
    {
        [CHANGE_INPUT]: (state,action) => ({ todo: state.todo }),
        [INSERT]: (state,action) => ({ todo: state.todo }),
        [TOGGLE]: (state,action) => ({ todo: state.todo }),
        [REMOVE]: (state,action) => ({ todo: state.todo })
    },
    initialState
)
export default TodoReducer