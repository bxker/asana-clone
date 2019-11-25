import React from 'react';
import {connect} from 'react-redux';
// import {loginUser, getSession} from '../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';



const Nav: React.FC<{}> = (props) => {

    
    return (
        <div className='nav-parent'>
            <h1>Home Nav Left</h1>
            <Link to="/tasks"></Link>
        </div>
    )
}

const mapStateToProps = (reduxState: any)=> {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    
})(Nav)
