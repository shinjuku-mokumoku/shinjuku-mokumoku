const Octokit = require("@octokit/rest");

const octokit = new Octokit();
const logger = console;

const owner = "shinjuku-mokumoku";
const repo = "shinjuku-mokumoku";

const pullRequestNum = async () => {
  if (process.env.CIRCLE_PR_NUMBER) {
    return process.env.CIRCLE_PR_NUMBER;
  }

  const pulls = await octokit.pulls.list({
    owner,
    repo,
    state: "all",
    head: `${owner}:${process.env.CIRCLE_BRANCH}`,
    per_page: 1,
    page: 1
  });

  const num = pulls.data[0].number;
  logger.debug(`PR Number: ${num}`);

  return num;
};

const meetupFiles = async num => {
  logger.debug(
    `Pull Request is https://github.com/shinjuku-mokumoku/shinjuku-mokumoku/pull/${num}`
  );

  const res = await octokit.pulls.listFiles({ owner, repo, pull_number: num });

  // only meetups/xx/x.md. not include kpt.md
  const fileNames = res.data
    .map(files => files.filename)
    .filter(name => /meetups/.test(name))
    .filter(name => !/kpt/.test(name));

  logger.debug(`fileNames: ${fileNames.join(",")}`);

  return fileNames;
};

const validExtensionFile = async fileNames => {
  const fileExtensionRegexp = /meetups\/[0-9]+\/.+\.md/;

  return fileNames.filter(name => fileExtensionRegexp.test(name))[0];
};

const isValidFormatFile = async (prNumber, filePath) => {
  const resPullRequest = await octokit.pulls.get({
    owner,
    repo,
    pull_number: prNumber
  });
  const [headOrg, headBranch] = resPullRequest.data.head.label.split(":");

  const resContent = await octokit.repos.getContents({
    owner: headOrg,
    repo,
    path: filePath,
    ref: headBranch
  });
  const content = Buffer.from(resContent.data.content, "base64").toString(
    "UTF-8"
  );

  const formatRegexp = `#.*
## 会社や業務で普段やっていること
.*
## 相談乗れるかもしれないこと
.*
## 今日やること
.*
## 相談するかもしれないこと
.*
## 今日の成果
.*
`;

  // NOTE Remove `\n` to need regexp matching
  return RegExp(formatRegexp.replace(/\n/g, "")).test(
    content.replace(/\n/g, "")
  );
};

const isValid = async () => {
  const num = await pullRequestNum();
  const fileNames = await meetupFiles(num);
  if (fileNames) {
    logger.debug("This PR does not include self introduction file.");
    process.exit(0);
  }
  const filePath = await validExtensionFile(fileNames);

  logger.debug(`validFilePath: ${filePath}`);

  if (!filePath) {
    logger.debug("Invalid file extension");
    process.exit(1);
  }

  const isValidFormat = await isValidFormatFile(num, filePath);
  if (!isValidFormat) {
    logger.error("Format is Invalid. Please use meetups/template.md");
    process.exit(1);
  }

  process.exit(0);
};

isValid();
