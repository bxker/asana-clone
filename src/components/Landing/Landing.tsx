import React from 'react';
import {connect} from 'react-redux';
import {getSession} from '../../redux/reducers/userReducer';
import { Redirect, Link } from 'react-router-dom';
import './styles/Landing.css';

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
            <>
                <LandingHeader />
                <div className="landing-main">
                    <section className="landing-section-1">
                        <h1>Make more time for the work that matters most</h1>
                        <h2>Asana is the work management platform teams use to stay focused on the goals, projects, and daily tasks that grow business.</h2>
                        <Link to="/register"><button>Try for free</button></Link>
                    </section>
                </div>
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
    getSession
})(Landing)
