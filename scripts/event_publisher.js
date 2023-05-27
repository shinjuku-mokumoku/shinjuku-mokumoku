const moment = require("moment");
const { EventDirCreator } = require("./event_dir_creator.js");
const { Slack } = require("./slack.js");
const { ConnpassEventCreator } = require("./connpass_event_creator.js");

Slack.setup(process.env.SLACK_API_TOKEN);

// TODO: replase oauth api token
EventDirCreator.setup(process.env.GITHUB_API_TOKEN);

const nextEventNum = EventDirCreator.getNextEventNum();

// EventDirCreator.createDirWithNum(nextEventNum);
// EventDirCreator.createPullRequestWithNum(nextEventNum);

const eventDate = moment()
  .day("Saturday")
  .add(21, "d")
  .format("YYYY/MM/DD");
const connpassEventSettings = {
  group: "shinjuku-moku",
  title: `Online / Shinjuku Mokumoku Programming vol.${nextEventNum}`,
  subTitle: "The Art of Mokumoku Programming",
  startDate: eventDate,
  startTime: "11:00",
  endDate: eventDate,
  endTime: "18:00",
  participation: [
    {
      attendeeType: "行きます",
      maxAttendees: 10,
      payDoor: true,
      eventFee: 0,
      fcfs: true
    },
    {
      attendeeType: "行くかも",
      maxAttendees: 3,
      payDoor: true,
      eventFee: 0,
      fcfs: true
    }
  ],
  imagePath: `${__dirname}/../assets/images/shinjuku-mokumoku-banner.png`,
  host: "",
  organizers: ["akira_miki", "aretoky", "yhiss", "koki1023", "cidermitaina"],
  presenters: [],
  hashtag: "#shinjukumokumoku",
  eventLocation: {
    id: "40853", // already registered location id: online
    // id: "29293", // already registered location id: onsite
    name: "Repro株式会社 3F イベントスペース",
    address: "東京都渋谷区代々木1-36-4 全理連ビル 3階",
    url: "https://goo.gl/maps/7FfF2jniajm"
  },
  duplicate: false,
  eventTicket: false,
  questionnaire: [
    {
      required: true,
      title:
        "本もくもく会は、slackでcommunicationを取ります。参加日までにサインアップしておくことは出来ますか？",
      answerType: "radiobutton",
      options: [
        "問題なく遂行できる",
        "やったことないので当日までになんとかしてくる"
      ]
    },
    {
      required: true,
      title:
        "本もくもく会は、自己紹介と当日やることを記述したPull Requestを**事前に**出すことが求められます。実施することはできますか？",
      answerType: "radiobutton",
      options: [
        "問題なく遂行できる",
        "やったことないので当日までになんとかしてくる"
      ]
    },
    {
      required: true,
      title:
        "もくもくして得た学びや気付き、成果をもくもく会終了時にLTスタイルで1-5min程度のカジュアルに発表します。問題ありませんか？",
      answerType: "radiobutton",
      options: ["ノープロブレム", "LT初心者ですががんばります"]
    }
  ],
  descriptionPath: `${__dirname}/../connpass-online.md`,
  preview: true
};

(async () => {
  const eventUrl = await ConnpassEventCreator.create(connpassEventSettings);
  const channelId = await Slack.get_channel_id("planning");
  Slack.message(channelId, `3w later event is below:\n ${eventUrl}`);

  const generalChannelId = await Slack.get_channel_id("general");
  Slack.command(
    channelId,
    "/remind",
    `<#${generalChannelId}> "${nextEventNum} on ${eventDate} が公開されましたー！\n${eventUrl.replace(
      "/edit",
      ""
    )}" at 20:00`
  );

  // Archive 3 times ago channel
  const oldChannelId = await Slack.get_channel_id(`vol-${nextEventNum - 3}`);
  await Slack.archive(oldChannelId);
})();
