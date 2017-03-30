import React, { Component } from 'react'
import menu from './img/dots.png'
import './App.css'
import './data.json'
import { location, challenge, state } from './mockdata.js'
const Slider = require('react-slick');

var moment = require('moment');
moment().format();
let time = moment().toObject();
console.log(time)

class App extends Component {
  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)
    this.state = { page: 'challenge'}
  }
  changeStatus() {
    this.setState({ status: 'done' })
    console.log('status changed to done')
  }
  changePage (page) {
    this.setState({ page: page })
    console.log('change page to', page)
  }
  render() {
    return (
      <div className="background">
        <Navbar day="0" toggleStatus={ this.changeStatus } changePage={ this.changePage } />
        <Routes day="0" display="challenge" page={this.state.page} changePage={ this.changePage } />
      </div>
    );
  }
}

class Routes extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    switch (this.props.page) {
      case 'challenge': return <Challenge day={ data } changePage={ this.props.changePage }/>
      case 'notes': return <Journal data={ data } status='pending' />
      default: return <Challenge data= { data } />
    }
  }
}

class Navbar extends Component {
  render() {
    return (
    <div className="navbar">
      <div className="day" onClick={ () => this.props.changePage('notes') }>Day 0.</div>
      <div className="logo" onClick={ () => this.props.changePage('challenge') }><h1>yeahsure</h1></div>
      <div className="menu"><img src={ menu } onClick={ this.showMenu } alt=""></img></div>
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
  renderLinks(props) {
    console.log('link props', this.props)
    if (this.state.status === 'accepted') {
      return (
        <div className="links">
          <a className="link" href={this.props.day.notes[0].challenge.video} target="_blank"> Watch Video</a>
          <div className="link" onClick={ () => props.changePage('notes')} >Add Note</div>
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
    } = this.props.day.notes[0].challenge
    console.log('Challenge render()',this.props)
    return (
    <div className="challenge page fadein" >
      <div className="challenge_title"><h1>{ title }</h1></div>
        <div className="text_area">
          <div className=""><p>{ body }</p></div>
          <div>{this.renderLinks(this.props)}</div>
        </div>
        <div className="button-cta">
          <button onClick={ this.acceptChallenge.bind(this) } className={ this.state.status }>{ this.state.button }</button>
        </div>
      <div className="message" onClick={ () => this.props.changePage('notes') }>{ this.state.message }</div>
    </div>
    );
  }
}

class Journal extends Component {
  render() {
    const journal = this.props.data.notes
    const today = (journal.length -1)
    const notes = journal.map( (note) => {
      return <li key={note.day} className="challenge">
          <div className="title"><h1>{note.challenge.title}</h1></div>
          <div className="note">
            <p>{note.challenge.note}</p>
          </div>
        </li>
    })
    const settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      initialSlide: today
    }
    return (
      <Slider className="journal fadein" {...settings}>
        {notes}
      </Slider>
    )
  }
}

class NoteInput extends Component {
  render() {
    return (
    <textarea rows="4" cols="50">So what's up?</textarea>
    );
  }
}

const data = {
  displayday: 1,
  displayloc: 0,
  status: 'new',
  notes:  [{
    day: 0,
    status: 'done', //passed , calc based on note completedAt
    challenge: {
      id: 0,
      title: 'Ask yourself the three why’s.',
      body: 'Before acting on a decision, ask yourself “Why?” Follow up your response with another “Why?” And then a third. If you can find three good reasons to pursue something, you’ll have clarity and be more confident in your actions.',
      video: 'https://www.youtube.com/watch?v=_I-_0cnj_xQ',
      status: 'done',
      acceptedAt: "2017-03-31T23:11:05+01:00",
      completedAt: "2017-03-31T23:11:05+01:00",
      note: 'The first day using this app and it’s still pretty shit. Hopefully a new version will come soon. And I was aware off my breath 3 times, even though the challenge was about something else. Good story bra!'
    },
    location: {
      loc_id: 0,
      loc_img: './img/bg0.jpg',
      loc_url: "https://www.lonelyplanet.com/philippines/the-visayas/cebu",
      loc_info: "Cebu, Phillipines"
    }
  },
  {
    day: 1,
    status: 'new', //passed , calc based on note completedAt
    challenge: {
      id: 1,
      title: "Practice saying no to yourself.",
      body: "The ability to say “no” to yourself to put off short-term gratification for the long-term gain is an important life-skill. Like a muscle, it is strengthened with exercise. \n The more you practice saying “no” to small daily challenges, the better you can withstand major temptations.",
      video: "https://www.youtube.com/watch?v=FtPRrn5nwAo",
      status: 'done',
      acceptedAt: "2017-03-31T23:11:05+01:00",
      completedAt: "2017-03-31T23:11:05+01:00",
      note: ''
    },
    location: {
      loc_id: 1,
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
