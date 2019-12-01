import React from 'react';
import {connect} from 'react-redux';
// import {loginUser, getSession} from '../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import './styles/Nav.css';



const Nav: React.FC<{username: String}> = (props) => {

    
    return (
        <div className="nav-parent">
            <div className="nav-main">
                <section>
                    <Link to="/"><img src="https://miro.medium.com/max/1904/1*BCe1HWc1Y0-lUVJo2BH6xQ.png" alt="logo" className="asana-logo"/></Link>
                </section>
                <section className="nav-section-2">
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}><h1>Home</h1></Link>
                    <Link to={`/tasks/${props.username}`} style={{textDecoration: 'none', color: 'white'}}><h1>Tasks</h1></Link>
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}><h1>Inbox</h1></Link>
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}><h1>Portfolio</h1></Link>
                </section>
            </div>
        </div>
    )
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id,
        username: reduxState.userReducer.username
    }
}

export default connect(mapStateToProps, {
    
})(Nav)
