import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import MainContainer from './MainContainer'
import Login from './Login'
import Signup from './Signup'
import {Button} from 'semantic-ui-react'
import {Route, withRouter} from 'react-router-dom'
import {getUser, logout} from './actions/actions'

class App extends Component {

	componentDidMount(){
		if (localStorage.getItem("token")){
			this.props.getUser()
			.then(() => {
				this.props.history.push('/home')
			})
		} 
	}
	render() {
		console.log(this.props)
		return (
			<div className="App">
				<Button onClick={() => {
					this.props.logout()
					this.props.history.push('/login')
				}}>Logout</Button>
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup}/>
				<Route path="/home" component={MainContainer}/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {...state.botReducer, ...state.userReducer}
}

export default withRouter(connect(mapStateToProps, {getUser, logout})(App));
