import React from 'react'
import {Input, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signup } from './actions/actions'

class Signup extends React.Component{

	state = {
		username: "",
		password: "",
		passwordConfirmation: ""
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		console.log(this.state)
		if (this.state.password === this.state.passwordConfirmation){

		} else {
			alert("Ya dun goofed!")
		}

		this.props.signup(this.state.username, this.state.password)
		.then(()=> this.props.history.push("/home"))
	}

	render(){
		console.log(this.props)
		return (
			<div>
				<Input name="username" value={this.state.username} onChange={this.handleChange}/>
				<Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
				<Input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange}/>
				<Button onClick={this.handleSubmit}>Login!</Button>
			</div>
		)
	}

}


export default connect(null, { signup })(Signup)