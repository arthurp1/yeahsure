import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import './data.json'
import { state, challenge, location } from './mockdata.js'

//App
// .Navbar
// .Challenge
// .Journal
//    .Note
//    .NoteInput

// day="" challenge=""

class App extends Component {
  render() {
    return (
      <div className="background">
        <Navbar day="0" />
        <Routes day="0" display="challenge" />
      </div>
    );
  }
}

class Routes extends Component {
  changePage (page) {
    console.log('change to', page)
  }
  render() {
    return (
      <div className="page">
        <Challenge challenge={challenge} changePage={this.changePage.bind(this)}/>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
      <div className="day">Day 0.</div>
      <div className="logo"><h1>yeahsure</h1></div>
      <div className="menu"><img src="./img/dots.png" alt=""></img></div>
    </div>
    );
  }
}

class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'new', message: 'skip challenge' }
    this.acceptChallenge = this.acceptChallenge.bind(this);
  }
  acceptChallenge(event) {
    this.setState({ status: 'pending', message:'' });

    //hide links
  
  }
  render() {
      console.log(this.props)
    return (
    <div className="challenge_page" >
      <div className="challenge_title"><h1>{this.props.challenge[0].title}</h1></div>
        <div className="text_area">
        <div className="challenge_body"><p>{this.props.challenge[0].body}</p></div>
        <div className="links">
          <div className="link" onClick={this.props.challenge[0].video} >Watch Video</div>
          <div className="link" onClick={ () => this.props.changePage('journal')} >Add Note</div>
        </div>
        </div>
      <div className="button-accept">
        <button onClick={ this.acceptChallenge } className={ this.state.status }>Challenge Accepted</button>
      </div>
      <div className="message">{ this.state.message }</div>
    </div>
    );
  }
}

class Journal extends Component {
  render() {
    return (
    <div className="page">
      <h1>Hello</h1>
    </div>
    );
  }
}

class Note extends Component {
  render() {
    return (
    <div className="note">
      <h1>Hello</h1>
    </div>
    );
  }
}

class NoteInput extends Component {
  render() {
    return (
    <div className="note">
      <h1>Hello</h1>
    </div>
    );
  }
}


export default App;
