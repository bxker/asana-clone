import React from 'react';
import {connect} from 'react-redux';
import {loginUser, getSession} from '../../redux/reducers/userReducer';
import { Redirect, Link } from 'react-router-dom';
import './styles/Login.css';



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
            <div className='login-parent'>
                <div className="login-main">
                    <h1>Log In</h1>
                    <button className="google-login"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"></img>  -  Use Google Account</button>
                    <input placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <button  className="login-button" onClick={() => login()}>Login</button>
                    <section className="login-bottom-section">
                        <Link to="/register"><h3>Forgot Password?</h3></Link>
                        <h2>Don't have an account?<Link to="/register"> here!</Link></h2>
                    </section>
                </div>
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
