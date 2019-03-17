const axios = require('axios');
const fs = require('fs');
const { execSync } = require('child_process');

const logger = console;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const NextEventGenerator = {
  meetupPath: `${__dirname}/../meetups`,
};

NextEventGenerator.setup = (githubAccessToken) => {
  NextEventGenerator.githubAccessToken = githubAccessToken;
};

NextEventGenerator.createNextEventDir = () => {
  const dirs = fs.readdirSync(NextEventGenerator.meetupPath);
  const events = dirs
    .filter(dir => /[0-9]+/.test(dir))
    .map(dir => parseInt(dir, 0));

  nextEventNum = Math.max.apply(null, events) + 1;

  fs.mkdirSync(`${NextEventGenerator.meetupPath}/${nextEventNum}`);
  fs.writeFileSync(`${NextEventGenerator.meetupPath}/${nextEventNum}/kpt.md`, '');

  logger.debug(`generated: ${nextEventNum} meetup template`);

  return nextEventNum;
};

NextEventGenerator.createPullRequest = () => {
  // const nextEventNum = NextEventGenerator.createNextEventDir();
  const nextEventNum = 45;

  const branch = `vol-${nextEventNum}`;
  const repoName = 'shinjuku-mokumoku';
  const email = `${repoName}@gmail.com`;
  const repoUrl = `https://${NextEventGenerator.githubAccessToken}@github.com/${repoName}/${repoName}`;

  // execSync(`git checkout -b ${branch}`);
  execSync(`GIT_AUTHOR_NAME=${repoName} GIT_AUTHOR_EMAIL=${email} GIT_COMMITTER_NAME=${repoName} GIT_COMMITTER_EMAIL=${email} git commit -am "Create ${branch}"`);
  execSync(`git push ${repoUrl} ${branch}`);
  // execSync(`hub pull-request -m "Create ${branch}"`);

  const data = {
    title: `Create ${branch}`,
    body: 'Please review pull-request',
    head: branch,
    base: 'master',
  };

  axios({
    method: 'post',
    url: 'https://api.github.com/repos/shinjuku-mokumoku/shinjuku-mokumoku/pulls',
    headers: {
      Authorization: `token ${NextEventGenerator.githubAccessToken}`,
    },
    data,
  }).then((response) => {
    logger.info(response.data);
  }).catch((err) => {
    logger.error(err);
  });
};

NextEventGenerator.setup(process.env.GITHUB_API_TOKEN);
// console.log(NextEventGenerator.createNextEventDir())
NextEventGenerator.createPullRequest();
