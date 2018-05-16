import React from 'react'
import {Grid, Button} from 'semantic-ui-react'
import BotCard from './BotCard'
import {getBots, selectViewedBot, createMatch} from './actions/actions'
import {connect} from 'react-redux'

class MainContainer extends React.Component{



  randomBot = () => {
    let index = Math.floor(Math.random()*this.props.bots.length)

    this.props.selectViewedBot(this.props.bots[index])
  }

  displayMyBots(){
    let myMatches = this.props.matches

    return myMatches.map(match => {
      return <BotCard key={match.id} match={match.id} bot={match.bot}/>
    })
  }

  enlist = () =>{
    this.props.createMatch(this.props.currentBot.id, this.props.currentUser.id)
    .then(() => {
      this.randomBot()
    })
  }

  render(){
    return(
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Button fluid color="red" onClick={this.randomBot}>To the scrap heap!</Button>
            </Grid.Column>
            <Grid.Column>
              <BotCard bot={this.props.currentBot}/>
            </Grid.Column>
            <Grid.Column>
              <Button fluid color="teal" onClick={this.enlist}>Enlist!</Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {this.displayMyBots()}
          </Grid.Row>
        </Grid>
      )
  }

}
function mapStateToProps(state){
  return {
    bots: state.botReducer.bots,
    currentBot: state.botReducer.currentBot,
    matches: state.userReducer.matches,
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps, {getBots, selectViewedBot, createMatch})(MainContainer)