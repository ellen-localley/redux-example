import React, {Component} from 'react';
import '../../assets/join.css'
import userActions from "../../actions/user.actions";
import {connect} from 'react-redux'

class Join extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            password: '',
            name: '',
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({submitted: true})
        const {userid, password, name} = this.state
        if(userid && password && name){
            this.props.join(userid, password, name)
        }
    }

    render() {
        const { userid, password, name, submitted } = this.state
        const helpBlock = {color:"red"}
        const temp = {}
        return (
            <div>
                <form name={"form"} onSubmit={this.handleSubmit}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>

                        <label htmlFor="email"><b>ID</b></label>
                        <input type="text" placeholder="Enter ID"
                               name="userid" value={userid}
                               onChange={this.handleChange}
                               />
                        {
                            submitted && !userid &&
                                <div style={helpBlock}>아이디는 필수 입력값입니다.</div>
                        }
                        <label htmlFor="psw"><b>PW</b></label>
                        <input type="password" placeholder="Enter Password"
                               name="password" value={password}
                               onChange={this.handleChange}
                               />
                        {
                            submitted && !password &&
                            <div style={helpBlock}>비밀번호는 필수 입력값입니다.</div>
                        }

                        <label htmlFor="psw-repeat"><b>NAME</b></label>
                        <input type="password" placeholder="Enter Name"
                               name="name" value={name}
                               onChange={this.handleChange}
                               />
                        {
                            submitted && !name &&
                                <div style={helpBlock}>이름은 필수 입력값입니다.</div>
                        }

                        <label>
                            <input type="checkbox" name="remember" style={temp}/>
                        </label>

                        <p>By creating an account you agree to our <a href="#" style={temp}>Terms
                            & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="button" className="cancelbtn">Cancel</button>
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.userReducers
    return { loggingIn }
}

const actionCreators = {
    join: userActions.join
}

const connectedJoinPage = connect(mapStateToProps, actionCreators)(Join)
export { connectedJoinPage as Join };