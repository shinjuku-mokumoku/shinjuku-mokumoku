var request = require("request");

const token = process.env.SLACK_API_TOKEN;
const channel = process.env.SLACK_CHANNEL;

var message = (text) => {
  var options = {
    method: 'POST',
    url: 'https://slack.com/api/chat.postMessage',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {
      token: token,
      channel: channel,
      text: text
    }
  };

  request( options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
  });
};

var command = (command, text) => {
  var options = {
    method: 'POST',
    url: 'https://slack.com/api/chat.command',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    form: {
      token: token,
      channel: channel,
      command: command,
      text: text
    }
  };

  request( options, (error, response, body) => {
    if (error) throw new Error(error);
    console.log(body);
  });
};

command('/remind', '#general "@here もうすぐlunchです！ランチアンケート ( https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md ) への回答しましょう！" at 12:55')
command('/remind', '#general "@here checkoutまであと1hです！成果のまとめなどしていきましょう :muscle:" at 16:00')
command('/poll', '"厳選美味昼食アンケート" "イタリアン: タンタポッカ" "天丼: 高瀬" "寿司: 高瀬" "バーガー: クリバーガー" "カレー: 野菜を食べるカレーcamp" "中華: トーキョー シノワ 神子" "エスニック: Bistro ひつじや" "ラーメン: 麺恋処 いそじ" "オフィスにいます"')
message('厳選美味昼食店: \nhttps://github.com/shinjuku-mokumoku/shinjuku-mokumoku/blob/master/lunch/yoyogi.md')
