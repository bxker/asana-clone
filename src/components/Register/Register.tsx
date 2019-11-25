import React from 'react';
import {connect} from 'react-redux';
import {registerUser, getSession} from '../../redux/reducers/userReducer';
import { Redirect, Link } from 'react-router-dom';
import './styles/Register.css';

//components
import LandingHeader from '../Landing/LandingHeader/LandingHeader';

const Login: React.FC<{username?: String, password?: String, user_id?: number, registerUser?: Function, getSession?: Function, setToggle: Function}> = (props) => {
    const [username, setUsername] = React.useState(''); 
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        if(props.getSession) {
            props.getSession();
        }
    }, [props])

    const register = () => {
        if(props.registerUser) {
            props.registerUser({username, password, email})
        }
    }

    if(props.user_id){
        console.log(props.user_id)
        return <Redirect to='/main'/>
    }else{
        return (
            <>
                <header>
                    <LandingHeader />
                </header>
                <div className='register-parent'>
                    <div className="register-main">
                        <img src="https://luna1.co/8c7012.png"></img>
                        <h1>Start your free trial</h1>
                        <h2>Please us your work email address so we can connect with your team in Asana.</h2>
                        <h3>By signing up, I agree to the Asana <Link to="/">Privacy Policy</Link> and <Link to="/">Terms of Service</Link>. </h3>
                        <input placeholder="Username" onChange={e => setUsername(e.target.value)}/>
                        <input placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        <button  className="register-button" onClick={() => register()}>Try for free</button>
                        <section className="register-bottom-section">
                            <h2>Have an account? Log in <Link to="/login">here</Link>!</h2>
                        </section>
                    </div>
                </div>
                    <footer className="register-footer">
                        <h1>English</h1>
                        <h1>Terms & Privacy</h1>
                        <section>
                            <h1>Twitter</h1>
                            <h1>Facebook</h1>
                        </section>
                        <img src="https://luna1.co/Download_App_Store_Badge_US.svg" alt="apple-link"></img>
                        <img src="https://luna1.co/Google_Play_EN.svg" alt="google-link"></img>
                    </footer>
            </>
        )
    }
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    registerUser,
    getSession
})(Login)
