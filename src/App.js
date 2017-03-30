import React, { Component } from 'react'
import menu from './img/dots.png'
import './App.css'
import './data.json'
import { location, challenge, state } from './mockdata.js'

var moment = require('moment');
moment().format();
let time = moment().toObject();
console.log(time)

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
  constructor(props) {
    super(props)
    this.state = { page: 'challenge'}
  }
  changePage (page) {
    console.log('change page to', page)
    this.setState({page: page})
  }
  render() {
    switch (this.state.page) {
      case 'challenge': return <Challenge day={ data } changePage={this.changePage.bind(this)}/>
      case 'journal': return <Journal />
      default: return <Challenge />
    }
  }
}

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
      <div className="day">Day 0.</div>
      <div className="logo"><h1>yeahsure</h1></div>
      <div className="menu"><img src={ menu } alt=""></img></div>
    </div>
    );
  }
}


class Challenge extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'new', message: 'skip challenge', button: 'challenge accepted' }
    this.acceptChallenge = this.acceptChallenge.bind(this);
  }
  acceptChallenge() {
    console.log('clicked')
    this.setState( { status: 'accepted', button: 'YOU\'RE IN CONTROL', message: ''} )
  }
  renderLinks() {
    if (this.state.status === 'accepted') { return (
        <div className="links">
          <div className="link" onClick={ this.props.day.journal[0].challenge.video } >Watch Video</div>
          <div className="link" onClick={ this.props.changePage('journal')} >Add Note</div>
        </div>
      )
    }
  }
  render() {
      const {
      title,
      body,
      video,
      showLabels,
      shouldComplyAda
    } = this.props.day.journal[0].challenge;
    console.log(this.props)
    return (
    <div className="challenge_page page fadein" >
      <div className="challenge_title"><h1>{ title }</h1></div>
        <div className="text_area">
          <div className="challenge_body"><p>{ body }</p></div>
          <div>{this.renderLinks()}</div>
        </div>
      <div className="button-cta">
        <button onClick={ this.acceptChallenge.bind(this) } className={ this.state.status }>{ this.state.button }</button>
      </div>
      <div className="message">{ this.state.message }</div>
    </div>
    );
  }
}


const noteList = (props) => {
  // renderSearchSuggestion() behaves as a pseudo SearchSuggestion component
  // keep it self contained and it should be easy to extract later if needed
  const renderNotes = noteItem => (
    <li key={noteItem.id}>{noteItem.name} {noteItem.id}</li>
  );

  return (
    <ul>
      {props.challenges.map([])}
    </ul>
  );
};

class Journal extends Component {
  renderJournalItems() {

  }

  render() {
    return (
      'list'
    );
  }
}

class NoteItem extends Component {
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


const data = {
 displayday: 1,
 displayloc: 0,
 status: 'new',
 journal:  [{
   day: 0,
   status: 'done', //passed , calc based on note completedAt
   challenge: {
     id: 0,
     title: "Practice saying \'no\' to yourself.",
     body: "The ability to say “no” to yourself to put off short-term gratification for the long-term gain is an important life-skill. Like a muscle, it is strengthened with exercise. \n The more you practice saying “no” to small daily challenges, the better you can withstand major temptations.",
     video: "https://www.youtube.com/watch?v=FtPRrn5nwAo",
     status: 'done',
     note: "The first day using this app and it’s still pretty shit. Hopefully a new version will come soon. And I was aware off my breath 3 times, even though the challenge was about something else. Good story bra!",
     acceptedAt: "2017-03-31T23:11:05+01:00",
     completedAt: "2017-03-31T23:11:05+01:00"
   },
   location: {
     loc_id: 0,
     loc_img: './img/bg0.jpg',
     loc_url: "https://www.lonelyplanet.com/philippines/the-visayas/cebu",
     loc_info: "Cebu, Phillipines"
   }
 }]
}

// VRAAG: background or on load?
//    after midnight
//    setdaystatus={ note ? done : passed },
//    (daystatus === done) ? setLocationToNext : keepCurrent,
//    setNextDay and NextChallenge
//    Display: challenge

// at
//    (daystatus === done) ? setLocationToNext : keepCurrent,
//    setNextDay and NextChallenge
//    Display: challenge


export default App;
