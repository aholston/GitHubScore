import React, { Component } from 'react';
import ScoreForm from './ScoreForm';
import Score from './Score';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      score: ''
    }
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    let user = e.target.elements.username.value
    axios({
      method:'get',
      url:'https://api.github.com/users/'+user,
      responseType:'json'
    })
    .then((response) => {
      let newState = response.data.followers + response.data.public_repos
      this.setState({
        state: newState
      })
    });
  }

  render() {
    return(
      <div>
        <h1>Hello World</h1>
        <ScoreForm onSubmit = {this.onSubmit}/>
        <Score score = {this.state.score}/>
      </div>
    )
  }
}

export default Main
