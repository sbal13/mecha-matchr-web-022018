import React from 'react'
import {Input, Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { login } from './actions/actions'
class Login extends React.Component{

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.props.login(this.state.username, this.state.password)
  }

  render(){
    return (
      <div>
        <Input name="username" value={this.state.username} onChange={this.handleChange}/>
        <Input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}>Login!</Button>
      </div>
    )
  }

}


export default connect(null, { login })(Login)