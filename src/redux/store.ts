import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import taskReducer from './reducers/taskReducer';


const rootReducer = combineReducers({
    userReducer,
    taskReducer
});

export default createStore(rootReducer, applyMiddleware(promise))