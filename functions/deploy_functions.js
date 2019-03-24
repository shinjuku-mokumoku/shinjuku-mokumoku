const { execSync } = require('child_process');
const Octokit = require('@octokit/rest');

const octokit = new Octokit();
const logger = console;

const owner = 'shinjuku-mokumoku';
const repo = 'shinjuku-mokumoku';

const hasFunctionDiff = async () => {
  const res = await octokit.pulls.listFiles({ owner, repo, number: process.env.CIRCLE_PR_NUMBER });
  const functionFileNames = res.data.map(files => files.filename).filter(name => /functions/.test(name));
  logger.debug(functionFileNames);

  return functionFileNames.length > 0;
};

const deploy = async () => {
  if (await hasFunctionDiff()) {
    logger.info('deploy functions');
    execSync(`firebase deploy --only functions -f --token=${process.env.GITHUB_API_TOKEN}`);
  } else {
    logger.info('Skipped Deploy. It does not included functions/* file diff');
  }
};

deploy();
