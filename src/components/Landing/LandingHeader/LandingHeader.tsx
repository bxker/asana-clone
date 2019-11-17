import React from 'react';
import {connect} from 'react-redux';
import {getSession} from '../../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import './styles/LandingHeader.scss'

const Landing: React.FC<{user_id: number, getSession: Function}> = (props) => {
    return (
        <div className="landing-header-main">
            <section>
                
                <img src="https://miro.medium.com/max/1904/1*BCe1HWc1Y0-lUVJo2BH6xQ.png" alt="logo" className="asana-logo"/>
            </section>
            <section>
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/register">Try for free</Link></button>
            </section>
        </div>
    )
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    getSession
})(Landing)