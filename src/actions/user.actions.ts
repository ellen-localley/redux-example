import {userConstants} from '../constants'
import {userService} from '../apis'

const userActions = {
    login, join
}

function join(userid, password, name) {
    alert(`ID: ${userid}, PW: ${password}, Name: ${name}`)

    const request = user => { return { type: userConstants.JOIN_REQUEST, user } }
    const success = user => { return { type: userConstants.JOIN_SUCCESS, user } }
    const failure = user => { return { type: userConstants.JOIN_FAIL, user } }

    return dispatch => {
        dispatch(request(userid))
    }

}

function login(userid, password) {
    alert(`ID: ${userid}, PW: ${password}`)

    const request = user => { return { type: userConstants.LOGIN_REQUEST, user } }
    const success = user => { return { type: userConstants.LOGIN_SUCCESS, user } }
    const failure = user => { return { type: userConstants.LOGIN_FAIL, user } }

    let user = userService.loginService(userid, password)

    return dispatch => {
        dispatch(request(userid))
    }

}

export default userActions