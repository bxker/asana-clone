import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../../redux/reducers/userReducer';
import { Redirect } from 'react-router';
import './styles/NavTop.css';
// import { Redirect, Link } from 'react-router-dom';



const NavTop: React.FC<{user_id: any, profile_pic: any, logoutUser: Function}> = (props) => {

    let logout = () => {
        props.logoutUser()
    }
    
    if(props.user_id){
        return (
            <div className='nav-top-parent'>
                <section className="nav-top-top">
                    <div className="nav-top-top-left">
                        <img className="profile-pic-1" alt='profile-pic' src={props.profile_pic}></img>
                        <div className="nav-top-top-left-info">
                            <section>
                                <h1>Jake's Tasks - My Company <img className="down-arrow-nav" src="https://www.stickpng.com/assets/images/58f8bd170ed2bdaf7c128308.png"></img></h1>
                            </section>
                            <section className="list-calendar-files">
                                <ul>
                                    <li>List</li>
                                    <li>Calendar</li>
                                    <li>Files</li>
                                </ul>
                            </section>
        
                        </div>
                    </div>
                    <div className="nav-top-top-right">
                        <input placeholder="Search" ></input>
                        <button className="add-button">+</button>
                        <button className="question-button">?</button>
                        <button className="upgrade-button">Upgrade</button>
                        <button className="logout-button" onClick={() => logout()}>Logout</button>
                        <img className="profile-pic-2" alt="profile-pic-right" src={props.profile_pic}></img>
                    </div>
                </section>
            </div>
        )
    }else{
        return <Redirect to="/"/>
    }
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id,
        profile_pic: reduxState.userReducer.profile_pic
    }
}

export default connect(mapStateToProps, {
    logoutUser
})(NavTop)