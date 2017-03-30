export const state1 = {
  displayday: 1,
  displayloc: 0,
  status: 'new',
  journal:  [{
    day: 0,
    status: 'done', //passed , calc based on note completedAt
    chalenge: {
      id: 0,
      title: 'Ask yourself the three why’s.',
      body: 'Before acting on a decision, ask yourself “Why?” Follow up your response with another “Why?” And then a third. If you can find three good reasons to pursue something, you’ll have clarity and be more confident in your actions.',
      video: 'https://www.youtube.com/watch?v=_I-_0cnj_xQ',
      status: 'done',
      acceptedAt: "2017-03-31T23:11:05+01:00",
      completedAt: "2017-03-31T23:11:05+01:00"
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
    chalenge: {
      id: 1,
      title: "Practice saying \'no\' to yourself.",
      body: "The ability to say “no” to yourself to put off short-term gratification for the long-term gain is an important life-skill. Like a muscle, it is strengthened with exercise. \n The more you practice saying “no” to small daily challenges, the better you can withstand major temptations.",
      video: "https://www.youtube.com/watch?v=FtPRrn5nwAo",
      status: 'done',
      acceptedAt: "2017-03-31T23:11:05+01:00",
      completedAt: "2017-03-31T23:11:05+01:00"
    },
    location: {
      loc_id: 1,
      loc_img: './img/bg0.jpg',
      loc_url: "https://www.lonelyplanet.com/philippines/the-visayas/cebu",
      loc_info: "Cebu, Phillipines"
    }
  }
]
}

export const state2 = {
  displayday: 1,
  displayloc: 0,
  status: 'new',
  journal:  [{
    day: 0,
    status: 'done', //passed , calc based on note completedAt
    ch_id: 0,
    ch_title: "Practice saying \'no\' to yourself.",
    ch_body: "The ability to say “no” to yourself to put off short-term gratification for the long-term gain is an important life-skill. Like a muscle, it is strengthened with exercise. \n The more you practice saying “no” to small daily challenges, the better you can withstand major temptations.",
    ch_video: "https://www.youtube.com/watch?v=FtPRrn5nwAo",
    loc_id: 0,
    loc_img: './img/bg0.jpg',
    loc_url: "https://www.lonelyplanet.com/philippines/the-visayas/cebu",
    loc_info: "Cebu, Phillipines",
    acceptedAt: "2017-03-31T23:11:05+01:00",
    completedAt: "2017-03-31T23:11:05+01:00",
    note: "The first day using this app and it’s still pretty shit. Hopefully a new version will come soon. And I was aware off my breath 3 times, even though the challenge was about something else. Good story bra!"
  }]
}
