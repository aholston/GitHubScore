import React, { Component } from 'react';
import './score.css';

class Score extends Component {
  constructor() {
    super()
    console.log(this.props.score)
  }

  render() {
    if (this.props.score !== Number) {
        return(
          <div>
            <h3>Please enter a GitHub username</h3>
        )
    } else {
      if (this.props.score < 20) {
          return(
            <div>
              <h2>Your Score: {this.props.score}</h2>
              <h3 className='red'>Needs Work</h3>
            </div>
          )
      } else if (this.props.score >= 20 && this.props.score < 50) {
          return(
            <div>
              <h2>Your Score: {this.props.score}</h2>
              <h3 className='orange'>A decent start!</h3>
            </div>
          )
      } else if (this.props.score >= 50 && this.props.score < 100) {
          return(
            <div>
              <h2>Your Score: {this.props.score}</h2>
              <h3>Doing good!</h3>
            </div>
          )
      } else if (this.props.score >= 100 && this.props.score < 200) {
          return(
            <div>
              <h2>Your Score: {this.props.score}</h2>
              <h3 className='green'>Great job!</h3>
            </div>
          )
      } else if (this.props.score >= 200) {
          return(
            <div>
              <h2>Your Score: {this.props.score}</h2>
              <h3 className='blue'>Github Elite!</h3>
            </div>
          )
      }
    }
}

export default Score
