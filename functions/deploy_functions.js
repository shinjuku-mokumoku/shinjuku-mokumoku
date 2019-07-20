const { execSync } = require('child_process');
const Octokit = require('@octokit/rest');

const octokit = new Octokit();
const logger = console;

const owner = 'shinjuku-mokumoku';
const repo = 'shinjuku-mokumoku';

const pullRequestNum = async () => {
  if (process.env.CIRCLE_PR_NUMBER) {
    return process.env.CIRCLE_PR_NUMBER;
  }

  const pulls = await octokit.pulls.list({
    owner,
    repo,
    state: 'all',
    head: `${owner}:${process.env.CIRCLE_BRANCH}`,
    per_page: 1,
    page: 1,
  });

  return pulls.data[0].number;
};

const hasFunctionDiff = async () => {
  const num = await pullRequestNum();
  logger.debug(`Pull Request is https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/pulls/${num}`);

  const res = await octokit.pulls.listFiles({ owner, repo, pull_number: num });
  const functionFileNames = res.data.map(files => files.filename).filter(name => /functions/.test(name));
  logger.debug(`Change Files: ${functionFileNames.join(',')}`);

  return functionFileNames.length > 0;
};

const deploy = async () => {
  if (await hasFunctionDiff()) {
    logger.info('deploy functions');
    execSync(`firebase deploy --only functions -f --token=${process.env.FIREBASE_API_TOKEN}`);
  } else {
    logger.info('Skipped Deploy. It does not included functions/* file diff');
  }
};

deploy();
