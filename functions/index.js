const functions = require('firebase-functions');
const { Slack } = require('./slack.js');
const { Preparation } = require('./preparation.js');
const { Presenter } = require('./presenter.js');

const logger = console;

exports.get_channel_id = functions.https.onRequest(async (req, res) => {
  const channelName = req.body.text;
  Slack.setup(functions.config().slack.api_token);

  const channelId = await Slack.get_channel_id(channelName);

  return res.status(200).send(`${channelName}'s channel id is ${channelId}`);
});

exports.prepare = functions.https.onRequest((req, res) => {
  // invalid request from
  if (req.body.token !== functions.config().slack.slash_token_prepare) {
    logger.error('invalid token');
    return res.status(401).send('invalid token');
  }

  const num = parseInt(req.body.text, 10);
  if (Number.isNaN(num)) {
    const msg = 'Num is missing or Num has to be Integer';
    logger.error(msg);
    return res.status(400).send(msg);
  }

  Preparation.start(functions.config().slack.api_token, `vol-${num}`);
  return res.status(200).send('OK. Start to prepare about Shinjuku Mokumoku');
});

exports.presenter = functions.https.onRequest((req, res) => {
  // invalid request from
  if (req.body.token !== functions.config().slack.slash_token_presenter) {
    logger.error('invalid token');
    return res.status(401).send('invalid token');
  }

  const num = parseInt(req.body.text, 10);
  if (Number.isNaN(num)) {
    const msg = 'Num is missing or Num has to be Integer';
    logger.error(msg);
    return res.status(400).send(msg);
  }

  Presenter.setup(functions.config().slack.api_token);
  Presenter.display_presenters(num);
  return res.status(200).send('OK. Calculate  presentation order');
});
