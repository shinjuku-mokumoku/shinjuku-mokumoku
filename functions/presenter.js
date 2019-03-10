const axios = require('axios');
const { Slack } = require('./slack.js');

const logger = console;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const Presenter = {};

Presenter.setup = (slackToken) => {
  Slack.setup(slackToken);
  Presenter.presenters = [];
};

Presenter.set_presenters = num => axios.get(`https://api.github.com/repos/shinjuku-mokumoku/shinjuku-mokumoku/contents/meetups/${num}`).then((res) => {
  const presenters = res.data.map(obj => obj.name);
  const filteredPresenters = presenters.filter(presenter => !/(README|PITCHME|template|kpt)\.(md|yaml|yml)/.test(presenter));

  Presenter.presenters = filteredPresenters;
  Presenter.shuffle();

  logger.debug(Presenter.presenters);

  return Presenter.presenters;
}).catch((err) => {
  logger.error(err);

  return Presenter.presenters;
});

Presenter.display_presenters = async (num) => {
  await Presenter.set_presenters(num);

  const text = "Today's Presenter list is here:";
  const attachments = [{
    color: '#439FE0',
    title: `Meetup vol.${num}`,
    text: Presenter.presenters.map((val, idx) => `${idx}: ${val}`).join('\n'),
  }];

  logger.debug(attachments);

  const channelId = await Slack.get_channel_id(`vol-${num}`);
  return Slack.message(channelId, text, attachments);
};

Presenter.shuffle = () => {
  const arr = Presenter.presenters;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const rand = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rand]] = [arr[rand], arr[i]];
  }
  Presenter.presenters = arr;

  logger.debug(arr);

  return Presenter.presenters;
};

exports.Presenter = Presenter;
