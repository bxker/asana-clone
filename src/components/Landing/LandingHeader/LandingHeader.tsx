import React from 'react';
import {connect} from 'react-redux';
import {getSession} from '../../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import './styles/LandingHeader.scss'
import Login from '../../Login/Login';

const Landing: React.FC< {user_id: any, getSession: any}> = (props) => {
    const [toggle, setToggle] = React.useState(false)

        return (
            <>
            <div className="landing-header-parent">
                <div className="landing-header-main">
                    <section className="landing-header-left">
                        <Link to="/"><img src="https://miro.medium.com/max/1904/1*BCe1HWc1Y0-lUVJo2BH6xQ.png" alt="logo" className="asana-logo"/></Link>
                        <h1>Why Asana? <img className="down-arrow" src="https://www.stickpng.com/assets/images/58f8bd170ed2bdaf7c128308.png"></img></h1>
                        <h1>Solutions <img className="down-arrow" src="https://www.stickpng.com/assets/images/58f8bd170ed2bdaf7c128308.png"></img></h1>
                        <h1>Resources <img className="down-arrow" src="https://www.stickpng.com/assets/images/58f8bd170ed2bdaf7c128308.png"></img></h1>
                        <h1>Pricing</h1>
                    </section>
                    <section className="landing-header-right">
                        <h1 onClick={() => setToggle(true)}>Log In</h1>
                        <Link style={{textDecoration: 'none'}} to="/register"><button>Try for free</button></Link>
                    </section>
                </div>
            </div>
                {toggle ? <Login setToggle={setToggle}/> : null}
                </>
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