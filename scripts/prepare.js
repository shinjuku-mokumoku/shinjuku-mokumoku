#!/usr/bin/env node

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
  var data = {
    token: token,
    channel: channel_id,
    text: text,
    username: "The Art of Mokumoku Programming",
    icon_url: 'https://avatars0.githubusercontent.com/u/39395592?s=100&v=4'
  }

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

  // Lunch
  command(channel_id, '/poll', '"昼食どこらへんが好き？" "イタリアン: タンタポッカ" "イタリアン: ボガマリ・クチーナ・マリナーラ" "天丼: 高瀬" "寿司: 高瀬" "バーガー: クリバーガー" "カレー: 野菜を食べるカレーcamp" "中華: トーキョー シノワ 神子" "エスニック: Bistro ひつじや" "和食: おひつ膳" "UberEatsで一緒に頼む" "オフィスにいます"')
  message(channel_id, '厳選美味昼食店: \nhttps://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md')
  command(channel_id, '/remind', `<#${channel_id}> "@channel もうすぐlunchです！ランチアンケート ( https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md ) への回答しましょう！" at 12:55`)
  command(channel_id, '/remind', `<#${channel_id}> "@channel lunchの時間です！ご一緒できる方は行きましょう :sparkless:" at 13:00`)

  // checkout
  command(channel_id, '/remind', `<#${channel_id}> "@channel checkoutまであと1hです！成果のまとめなどしていきましょう :muscle:" at 16:00`)
  command(channel_id, '/remind', `<#${channel_id}> "@channel checkoutの10min前です！\n今日の成果項を更新しshinjuku-mokumokuへPRをお願いします :muscle:\n\n発表ではchrome castを使います。chrome castの使い方はconnpassにありますので、はじめての方はEvent TV を対象にキャスト練習ください🙏" at 16:50`)
  command(channel_id, '/remind', `<#${channel_id}> "@channel checkoutの時間です :timer_clock:" at 17:00`)

  // for introduction
  message(general_id, `今日のshinjuku mokumoku slack channelは <#${channel_id}> です！みなさん参加お願いします :sparkles:`)
  message(channel_id, `わからないことがあるときはまず以下を参照しましょう :point_up: \n\n イベントページ: https://shinjuku-moku.connpass.com/\n introduction資料: https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku# \n`)
}

main(`vol-${meetup_no}`)
