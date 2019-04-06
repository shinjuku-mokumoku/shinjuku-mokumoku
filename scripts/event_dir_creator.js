const axios = require('axios');
const fs = require('fs');
const { execSync } = require('child_process');

const logger = console;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const user = 'shinjuku-mokumoku';
const repo = 'shinjuku-mokumoku';

const EventDirCreator = {
  meetupPath: `${__dirname}/../meetups`,
};

EventDirCreator.setup = (githubAccessToken) => {
  EventDirCreator.githubAccessToken = githubAccessToken;
};

EventDirCreator.getNextEventNum = () => {
  const dirs = fs.readdirSync(EventDirCreator.meetupPath);
  const events = dirs
    .filter(dir => /[0-9]+/.test(dir))
    .map(dir => parseInt(dir, 0));

  const nextEventNum = Math.max.apply(null, events) + 1;
  return nextEventNum;
};

EventDirCreator.createDirWithNum = (num) => {
  fs.mkdirSync(`${EventDirCreator.meetupPath}/${num}`);
  fs.writeFileSync(`${EventDirCreator.meetupPath}/${num}/kpt.md`, '');

  logger.debug(`generated: ${num} meetup template`);
};

EventDirCreator.createPullRequestWithNum = (num) => {
  const branch = `vol-${num}`;
  const email = `${repo}@gmail.com`;
  const repoUrl = `https://${EventDirCreator.githubAccessToken}@github.com/${user}/${repo}`;

  execSync(`git checkout -b ${branch}`);
  execSync(`git add ../meetups/${num}`);
  execSync(`GIT_AUTHOR_NAME=${repo} GIT_AUTHOR_EMAIL=${email} GIT_COMMITTER_NAME=${user} GIT_COMMITTER_EMAIL=${email} git commit -m "Create ${branch}"`);
  execSync(`git push ${repoUrl} ${branch}`);

  const data = {
    title: `Create ${branch}`,
    body: 'Please review pull-request',
    head: branch,
    base: 'master',
  };

  axios({
    method: 'post',
    url: `https://api.github.com/repos/${user}/${repo}/pulls`,
    headers: {
      Authorization: `token ${EventDirCreator.githubAccessToken}`,
    },
    data,
  }).then((response) => {
    logger.info(response.data.html_url);
  }).catch((err) => {
    logger.error(err);
  });
};

EventDirCreator.createNextEvent = () => {
  const nextEventNum = EventDirCreator.getNextEventNum();
  EventDirCreator.createEventDir(nextEventNum);
  EventDirCreator.createPullRequest(nextEventNum);
};

exports.EventDirCreator = EventDirCreator;
