// Prepare for event start
//
// 1. Create vol-xx channel
// 1. Set lunch and due reminder
// 1. Set lunch poller
// 1. Set announce event channel to general

const axios = require('axios');
const querystring = require('querystring');
const token = process.env.SLACK_API_TOKEN;
const meetup_no = process.argv[2];

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

var create_channel = (name) => {
  var data = { token: token, name: name }

  return axios.post('https://slack.com/api/channels.create', querystring.stringify(data)).then( (response) => {
    console.log(response.data);

  }).catch( (err) => {
    console.log(err);

  })
}

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

var message = (channel_id, text) => {
  var data = { token: token, channel: channel_id, text: text }

  return axios.post( 'https://slack.com/api/chat.postMessage', querystring.stringify(data) ).then( (response) => {
    console.log(response.data);
  }).catch( (err) => {
    console.log(err);
  })
};

var command = (channel_id, command, text) => {
  var data = { token: token, command: command, channel: channel_id, text: text }

  return axios.post( 'https://slack.com/api/chat.command', querystring.stringify(data)).then( (response) => {
    console.log(response.data);
  }).catch( (err) => {
    console.log(err);
  })
};

var main = async (name) => {
  console.log(`channel name is ${name}`)

  await create_channel(name)
  var channel_id = await get_channel_id(name)

  // Event channel announce
  var general_id = await get_channel_id('general')
  message(general_id, `今日のshinjuku mokumoku slack channelは <#${channel_id}> です！みなさん参加お願いします :sparkles:`)

  // Lunch
  command(channel_id, '/poll', '"厳選美味昼食アンケート" "イタリアン: タンタポッカ" "天丼: 高瀬" "寿司: 高瀬" "バーガー: クリバーガー" "カレー: 野菜を食べるカレーcamp" "中華: トーキョー シノワ 神子" "エスニック: Bistro ひつじや" "ラーメン: 麺恋処 いそじ" "オフィスにいます"')
  message(channel_id, '厳選美味昼食店: \nhttps://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md')
  command(channel_id, '/remind', `<#${channel_id}> "@channel もうすぐlunchです！ランチアンケート ( https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md ) への回答しましょう！" at 12:55`)
  command(channel_id, '/remind', `<#${channel_id}> "@channel lunchの時間です！ご一緒できる方は行きましょう :sparkless:" at 13:00`)

  // checkout
  command(channel_id, '/remind', `<#${channel_id}> "@channel checkoutまであと1hです！成果のまとめなどしていきましょう :muscle:" at 16:00`)
  command(channel_id, '/remind', `<#${channel_id}> "@channel checkoutの時間です！" at 17:00`)
}

main(`vol-${meetup_no}`)
