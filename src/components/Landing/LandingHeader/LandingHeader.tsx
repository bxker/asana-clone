import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {getSession} from '../../../redux/reducers/userReducer';
import { Link } from 'react-router-dom';
import './styles/LandingHeader.scss'
import Login from '../../Login/Login';


const customStyles = {
    content : {
        height: '75%',
        width: '75%',
        position: 'absolute',
        top: '0px',
        left: '0px', 
        right: '0px', 
        bottom: '0px', 
        border: 'none',
        background: 'none',
        padding: '0px'
        // transform: ''
    }
  };


const Landing: React.FC< {user_id: any, getSession: any}> = (props) => {


    const [modalIsOpen, toggleModal] = React.useState(false)


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
                        <h1 onClick={() => toggleModal(true)}>Log In</h1>
                        <Link style={{textDecoration: 'none'}} to="/register"><button>Try for free</button></Link>
                    </section>
                </div>
            </div>
                
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => toggleModal(true)}
                    style={customStyles}
                    contentLabel="Login Component"
                ><Login setToggle={toggleModal}/></Modal> 
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