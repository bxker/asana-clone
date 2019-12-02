import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Register from './components/Register/Register';
// import Login from './components/Login/Login';
import Main from './components/Main/Main';
import Tasks from './components/Tasks/Tasks';


export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/register" component={Register} />
        {/* <Route path="/login" component={Login} /> */}
        <Route path="/home" component={Main} />
        <Route path="/tasks/:username/list" component={Tasks}/>
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }}/>
    </Switch>
)