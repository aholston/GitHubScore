import React, { Component } from 'react';

function ScoreForm(props) {
  return(
    <form onSubmit={props.onSubmit}>
      <input type='text' name='username' placeholder='GitHub Username'/>
      <input type='submit' placeholder='Calculate my GitHub score!'/>
    </form>
  )
}

export default ScoreForm 
