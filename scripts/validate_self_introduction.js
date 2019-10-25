const Octokit = require("@octokit/rest");

const octokit = new Octokit({ auth: process.env.GITHUB_API_TOKEN });

const logger = console;

const owner = "shinjuku-mokumoku";
const repo = "shinjuku-mokumoku";

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
  const num = process.env.CIRCLE_PR_NUMBER;
  if (num === undefined) {
    logger.debug("This commit does not included any kind of Pull-Request.");
    process.exit(0);
  }
  const fileNames = await meetupFiles(num);
  if (fileNames.length === 0) {
    logger.debug("This PR does not include self introduction file.");
    process.exit(0);
  }
  const filePath = await validExtensionFile(fileNames);

  logger.debug(`validFilePath: ${filePath}`);

  // Validate extension and format
  let errorMessage;
  if (!filePath) {
    errorMessage = "Invalid file extension";
  } else {
    const isValidFormat = await isValidFormatFile(num, filePath);
    if (!isValidFormat) {
      errorMessage = "Format is Invalid. Please use meetups/template.md";
    }
  }

  if (!errorMessage) {
    process.exit(0);
  }

  logger.error(errorMessage);

  const opts = {
    owner,
    repo,
    pull_number: num,
    body: errorMessage,
    event: "REQUEST_CHANGES"
  };
  const resReview = await octokit.pulls.createReview(opts);

  if (resReview.errors) {
    logger.debug(resReview.errors.join(","));
  }

  process.exit(1);
};

isValid();
