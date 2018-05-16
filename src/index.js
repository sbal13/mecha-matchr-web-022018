import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import botReducer from './reducers/bots'
import userReducer from './reducers/users'
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router} from 'react-router-dom'

const rootReducer = combineReducers({botReducer, userReducer})

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));
