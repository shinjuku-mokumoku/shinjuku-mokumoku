#!/usr/bin/env node

const fs = require('fs');
const axios = require('axios');
const querystring = require('querystring');
const token = process.env.SLACK_API_TOKEN;
const meetup_no = process.argv[2];

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var get_channel_id = (name, cursor) => {
  var data = { token: token, exclude_archived: true }
  if (cursor != null) { data.cursor = cursor; }

  return axios.get(`https://slack.com/api/conversations.list?${querystring.stringify(data)}`).then( (response) => {
    var next_cursor = response.data.response_metadata.next_cursor;
    var channel = response.data.channels.find( (elm) => { return elm.name === name } )

    if (channel != null ) {
      console.log(`channel_id of ${name} is ${channel.id}`)
      return channel.id;
    }

    if (next_cursor == null ) {
      return;
    }

    get_channel_id(name, next_cursor);

  }).catch( (err) => {
    console.log(err);
  })
}

var message = (channel_id, text, attachments) => {
  var data = {
    token: token,
    channel: channel_id,
    text: text,
    attachments: JSON.stringify(attachments),
    username: "The Art of Mokumoku Programming",
    icon_url: 'https://avatars0.githubusercontent.com/u/39395592?s=100&v=4'
  }

  console.log(data)

  return axios.post( 'https://slack.com/api/chat.postMessage', querystring.stringify(data) ).then( (response) => {
    console.log(response.data);
  }).catch( (err) => {
    console.log(err);
  })
};

var shuffle = (arr) => {
  var count = arr.length;

  for (var i = arr.length - 1 ; i >= 0; i--){
    var rand = Math.floor( Math.random() * (i+1) );
    [arr[i], arr[rand]] = [arr[rand], arr[i]]
  }

  return arr;
}

var main = async (name) => {
  var channel_id = await get_channel_id(name)

  fs.readdir( `${__dirname}/../meetups/${meetup_no}`, (err, files) => {
    var speakers = files
      .filter( (file) => { return !/(README|PITCHME|template|kpt)\.(md|yaml|yml)/.test(file) })

    var speakers = shuffle(speakers)
      .map( (val,idx) => `${idx}: ${val}`)
      .join('\n')

    var text = "Today's Presenter list is here:"
    var attachments = [{
        "color": "#439FE0",
        "title": `Meetup vol.${meetup_no}`,
        "text": speakers
      }]

    message(channel_id, text, attachments)
  });
}

main(`vol-${meetup_no}`)
