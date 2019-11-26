import React from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../../../redux/reducers/userReducer';
import { Redirect } from 'react-router';
// import { Redirect, Link } from 'react-router-dom';



const NavTop: React.FC<{user_id: any, logoutUser: Function}> = (props) => {

    let logout = () => {
        props.logoutUser()
    }
    
    if(props.user_id){
        return (
            <div className='nav-top-parent'>
                <h1>Home Nav Top</h1>
                <button onClick={() => logout()}>Logout</button>
            </div>
        )
    }else{
        return <Redirect to="/"/>
    }
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    logoutUser
})(NavTop)