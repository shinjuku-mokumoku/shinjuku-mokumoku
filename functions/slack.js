// Prepare for event start
//
// 1. Create vol-xx channel
// 1. Set lunch and due reminder
// 1. Set lunch poller
// 1. Set announce event channel to general

const axios = require('axios');

const logger = console;
const querystring = require('querystring');

const Slack = {};

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Slack.setup = (token) => {
  Slack.token = token;
};

Slack.create_channel = (name) => {
  const data = { token: Slack.token, name };

  return axios.post('https://slack.com/api/channels.create', querystring.stringify(data)).then((response) => {
    logger.info(response.data);
  }).catch((err) => {
    logger.error(err);
  });
};

Slack.get_channel_id = (name, cursor) => {
  const data = { token: Slack.token, exclude_archived: true };
  if (cursor !== null) { data.cursor = cursor; }

  return axios.get(`https://slack.com/api/conversations.list?${querystring.stringify(data)}`).then((response) => {
    const { nextCursor } = response.data.response_metadata;
    const channel = response.data.channels.find(elm => elm.name === name);

    if (channel !== null) {
      logger.info(`channelId of ${name} is ${channel.id}`);
      return channel.id;
    }

    if (nextCursor == null) {
      logger.error(`channelId of ${name} is not existed`);
      return null;
    }

    return Slack.get_channel_id(name, nextCursor);
  }).catch((err) => {
    logger.error(err);
  });
};

Slack.message = (channelId, text) => {
  const data = {
    token: Slack.token,
    channel: channelId,
    text,
    username: 'The Art of Mokumoku Programming',
    icon_url: 'https://avatars0.githubusercontent.com/u/39395592?s=100&v=4',
  };

  return axios.post('https://slack.com/api/chat.postMessage', querystring.stringify(data)).then((response) => {
    logger.info(response.data);
  }).catch((err) => {
    logger.error(err);
  });
};

Slack.command = (channelId, command, text) => {
  const data = {
    token: Slack.token, command, channel: channelId, text,
  };

  return axios.post('https://slack.com/api/chat.command', querystring.stringify(data)).then((response) => {
    logger.info(response.data);
  }).catch((err) => {
    logger.error(err);
  });
};

Slack.mokumoku_init = async (name) => {
  logger.info(`channel name is ${name}`);

  await Slack.create_channel(name);
  const channelId = await Slack.get_channel_id(name);

  // Event channel announce
  const generalId = await Slack.get_channel_id('general');

  // Lunch
  Slack.command(channelId, '/poll', '"昼食どこらへんが好き？" "イタリアン: タンタポッカ" "イタリアン: ボガマリ・クチーナ・マリナーラ" "天丼: 高瀬" "寿司: 高瀬" "バーガー: クリバーガー" "カレー: 野菜を食べるカレーcamp" "中華: トーキョー シノワ 神子" "エスニック: Bistro ひつじや" "和食: おひつ膳" "オフィスにいます"');
  Slack.message(channelId, '厳選美味昼食店: \nhttps://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md');
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel もうすぐlunchです！ランチアンケート ( https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md ) への回答しましょう！" at 12:55`);
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel lunchの時間です！ご一緒できる方は行きましょう :sparkless:" at 13:00`);

  // checkout
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel checkoutまであと1hです！成果のまとめなどしていきましょう :muscle:" at 16:00`);
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel checkoutの10min前です！\n今日の成果項を更新しshinjuku-mokumokuへPRをお願いします :muscle:\n\n発表ではchrome castを使います。chrome castの使い方はconnpassにありますので、はじめての方はEvent TV を対象にキャスト練習ください🙏" at 16:50`);
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel checkoutの時間です :timer_clock:" at 17:00`);

  // for introduction
  Slack.message(generalId, `今日のshinjuku mokumoku slack channelは <#${channelId}> です！みなさん参加お願いします :sparkles:`);
  Slack.message(channelId, 'わからないことがあるときはまず以下を参照しましょう :point_up: \n\n イベントページ: https://shinjuku-moku.connpass.com/\n introduction資料: https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku# \n');
};

exports.Slack = Slack;
