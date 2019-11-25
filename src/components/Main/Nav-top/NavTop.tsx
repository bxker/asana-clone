import React from 'react';
import {connect} from 'react-redux';
// import {loginUser, getSession} from '../../redux/reducers/userReducer';
// import { Redirect, Link } from 'react-router-dom';



const NavTop: React.FC<{}> = (props) => {

    
    return (
        <div className='nav-top-parent'>
            <h1>Home Nav Top</h1>
        </div>
    )
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    
})(NavTop)