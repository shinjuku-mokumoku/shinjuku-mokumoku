// Prepare for event start
//
// 1. Create vol-xx channel
// 1. Set lunch and due reminder
// 1. Set lunch poller
// 1. Set announce event channel to general

const logger = console;
const { Slack } = require('./slack.js');

const Preparation = {};

Preparation.start = async (slackToken, num) => {
  Slack.setup(slackToken);
  const currentChannelName = `vol-${num}`;

  logger.info(`channel name is ${currentChannelName}`);

  await Slack.create_channel(currentChannelName);
  const channelId = await Slack.get_channel_id(currentChannelName);

  // Event channel announce
  const generalId = await Slack.get_channel_id('general');

  // for introduction
  Slack.message(generalId, `今日のshinjuku mokumoku slack channelは <#${channelId}> です！みなさん参加お願いします :sparkles:`);
  Slack.message(channelId, 'wifi: \nhttps://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku/master?p=wifi/repro');
  Slack.command(channelId, '/remind', `<#${channelId}> \n
"@channel わからないことがあるときはまず以下を参照しましょう :point_up: \n
\n
イベントページ: https://shinjuku-moku.connpass.com/\n
introduction資料: https://gitpitch.com/shinjuku-mokumoku/shinjuku-mokumoku#\n
\n
*:warning: Attention :warning:*\n
- 会場IPからのスクレイピング・クローリングコードの実行は止めてください\n
- 本イベントは[アンチハラスメントポリシー](http://25.ruby.or.jp/coc.ja.html)に守ります点、ご協力ください\n
- どなたでもblogなどにあげられるよう写真撮影を許可していますので、その点ご了承ください\n
- 途中退出される場合は、**PRに** 今日の成果をお出しください\n
" at 11:30`);

  // Lunch
  Slack.command(channelId, '/poll', '"昼食どこらへんが好き？" "イタリアン: タンタボッカ" "イタリアン: ボガマリ・クチーナ・マリナーラ" "天丼: 高瀬" "寿司: 高瀬" "バーガー: クリバーガー" "カレー: 野菜を食べるカレーcamp" "中華: トーキョー シノワ 神子" "エスニック: Bistro ひつじや" "和食: おひつ膳" "オフィスにいます"');
  Slack.message(channelId, 'ランチリスト: \nhttps://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md');
  Slack.command(channelId, '/remind', `<#${channelId}> "
@channel もうすぐlunchです。ランチアンケートへの回答しましょう！\n\n
ランチリスト: \n
https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md
" at 12:55`);
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel lunchの時間です！ご一緒できる方は行きましょう :sparkless:" at 13:00`);

  // check templature
  Slack.command(channelId, '/remind', `<#${channelId}> "暑い、寒いなどありますか？ :eyes: \nお声がけくださーい :raising_hand: " at 15:00`);

  // checkout
  Slack.command(channelId, '/remind', `<#${channelId}> "
@channel checkoutまであと1hです！成果のまとめなどしていきましょう :muscle:
発表は *1.5-3 min + 質問 0-2min / person* です！
" at 16:00`);
  Slack.command(channelId, '/remind', `<#${channelId}> "
@channel checkoutの10min前です！\n
今日の成果項を更新しshinjuku-mokumokuへPRをお願いします :muscle:\n\n
発表ではchrome castを使います。
chrome castの使い方はconnpassにありますので、はじめての方は 4F EventSpace ChromeCast を対象にキャスト練習ください🙏
" at 16:50`);
  Slack.command(channelId, '/remind', `<#${channelId}> "@channel checkoutの時間です :timer_clock:" at 17:00`);
};

exports.Preparation = Preparation;
