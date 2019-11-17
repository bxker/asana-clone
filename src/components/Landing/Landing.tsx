import React from 'react';
import {connect} from 'react-redux';
import {getSession} from '../../redux/reducers/userReducer';
import { Redirect, Link } from 'react-router-dom';

//components
import LandingHeader from './LandingHeader/LandingHeader'

const Landing: React.FC<{user_id: number, getSession: Function}> = (props) => {

    React.useEffect(() => {
        props.getSession();
    }, [props])

    if(props.user_id){
        return <Redirect to="/main" />
    }else{
        return (
            <div>
                <LandingHeader />
                <h1>Landing Comp</h1>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
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
    getSession
})(Landing)
