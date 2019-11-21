import React from 'react';
import {connect} from 'react-redux';
import {loginUser, getSession} from '../../redux/reducers/userReducer';
import { Redirect, Link } from 'react-router-dom';



const Login: React.FC<{username: String, password: String, user_id: number, loginUser: Function, getSession: Function}> = (props) => {
    const [username, setUsername] = React.useState(''); 
    const [password, setPassword] = React.useState('');

    React.useEffect(() => {
        props.getSession();
    }, [props])

    const login = () => {
        props.loginUser({username, password})
    }

    if(props.user_id){
        console.log(props.user_id)
        return <Redirect to='/main'/>
    }else{
        return (
            <div>
                <h1>Login Comp</h1>
                <input placeholder="username" onChange={e => setUsername(e.target.value)}/>
                <input placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <button onClick={() => login()}>Login</button>
                <h1>Don't have an account?<Link to="/register"> here!</Link></h1>
            </div>
        )
    }
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    loginUser,
    getSession
})(Login)
