// Slack client

const axios = require('axios');
const querystring = require('querystring');

const logger = console;

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

Slack.message = (channelId, text, attachments) => {
  const data = {
    token: Slack.token,
    channel: channelId,
    text,
    attachments: JSON.stringify(attachments),
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

exports.Slack = Slack;
