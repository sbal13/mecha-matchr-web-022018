import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import MainContainer from './MainContainer'
import Login from './Login'

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className="App">
        {this.props.currentUser ? <MainContainer/>: <Login />}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {...state.botReducer, ...state.userReducer}
}

export default connect(mapStateToProps)(App);
