const puppeteer = require("puppeteer");
const fs = require("fs");

const logger = console;

const ConnpassEventCreator = {};

ConnpassEventCreator.getDescription = path => fs.readFileSync(path, "utf8");

ConnpassEventCreator.create = async settings => {
  /* eslint-disable no-await-in-loop */

  const user = process.env.CONNPASS_USER;
  const password = process.env.CONNPASS_PASSWORD;

  // const browser = await puppeteer.launch({ headless: true });
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 766 });

  // --------------------------------------------------
  // Login to connpass
  // --------------------------------------------------
  await page.goto("https://connpass.com/login/");
  const loginAreaSelector = "#login_form";
  await page.type(`${loginAreaSelector} input[name="username"]`, user);
  await page.type(`${loginAreaSelector} input[name="password"]`, password);
  await page.click(`${loginAreaSelector} button[type="submit"]`);
  await page.waitForSelector(".EventCreate");

  // --------------------------------------------------
  // Move to group page and create event
  // --------------------------------------------------
  if (typeof settings.group === "string") {
    await page.goto(`https://${settings.group}.connpass.com/`);
    await page.click(".GroupEventCreate");
  } else {
    // wait for load js
    await page.waitFor(2000);
    await page.click(".EventCreate");
  }

  await page.type('input[name="title"]', settings.title);
  await page.click('button[type="submit"]');
  // Need to wait for move next page
  await page.waitForNavigation();

  // --------------------------------------------------
  // Fill Event: title, subtitle
  // --------------------------------------------------
  const subTitleAreaSelector = "#FieldSubTitle";
  await page.waitForSelector("#FieldTitle");

  await page.click(subTitleAreaSelector);
  await page.waitForSelector(`${subTitleAreaSelector} button[type="submit"]`);
  await page.type(
    `${subTitleAreaSelector} input[name="sub_title"]`,
    settings.subTitle
  );
  await page.click(`${subTitleAreaSelector} button[type="submit"]`);

  // --------------------------------------------------
  // Fill Event: Event Time/Registration Period
  // --------------------------------------------------
  // Activate
  const timeAreaSelector = "#EventDates";
  await page.click(`${timeAreaSelector} .input_field_small_date`);
  await page.waitForSelector(`${timeAreaSelector} button[type="submit"]`);

  // Set
  await page.type(
    `${timeAreaSelector} input[name="start_date"]`,
    settings.startDate
  );
  // Unforcus from input form to close datepitcker
  await page.click(`${timeAreaSelector} th`);

  await page.type(
    `${timeAreaSelector} input[name="start_time"]`,
    settings.startTime
  );

  // wait for fill end date automatically
  await page.waitFor(500);

  // focus input form
  await page.click(`${timeAreaSelector} input[name="end_date"]`);
  // delete exist value
  await page.$eval(`${timeAreaSelector} input[name="end_date"]`, el =>
    el.setSelectionRange(0, el.value.length)
  );
  await page.keyboard.press("Backspace");
  // input data
  await page.type(
    `${timeAreaSelector} input[name="end_date"]`,
    settings.endDate
  );
  // Unforcus from input form to close datepitcker
  await page.click(`${timeAreaSelector} th`);
  // Wait to close datepicker animation. Datepicker overwrap submit button.
  await page.waitFor(500);

  // focus input form
  await page.click(`${timeAreaSelector} input[name="end_time"]`);
  // delete exist value
  await page.$eval(`${timeAreaSelector} input[name="end_time"]`, el =>
    el.setSelectionRange(0, el.value.length)
  );
  await page.keyboard.press("Backspace");
  // input data
  await page.type(
    `${timeAreaSelector} input[name="end_time"]`,
    settings.endTime
  );

  // submit
  await page.click(`${timeAreaSelector} button[type="submit"]`);

  // --------------------------------------------------
  // Fill Event: Location
  // --------------------------------------------------
  if (settings.eventLocation.id) {
    await page.select("select#my_places", settings.eventLocation.id);
  }

  // --------------------------------------------------
  // Fill Event: Participation Method
  // --------------------------------------------------
  // Activate
  const participationAreaSelector = "#FieldEventType";
  await page.click(`${participationAreaSelector} button`);

  for (const [i, part] of settings.participation.entries()) {
    const participationRowSelector = `${participationAreaSelector} .ParticipationTypes > tr:nth-child(${i +
      1})`;

    // Add row
    if ((await page.$(participationRowSelector)) == null) {
      await page.click(`${participationAreaSelector} .ParticipationTypeAdd`);
      await page.waitForSelector(participationRowSelector);
    }

    await page.click(`${participationRowSelector} .ptype_name > input`, {
      clickCount: 3
    });
    await page.keyboard.press("Backspace");
    await page.type(
      `${participationRowSelector} .ptype_name > input`,
      part.attendeeType
    );
    await page.click(`${participationRowSelector} .participants > input`, {
      clickCount: 3
    });
    await page.keyboard.press("Backspace");
    await page.type(
      `${participationRowSelector} .participants > input`,
      `${part.maxAttendees}`
    );

    const paymentNum = part.payDoor ? 4 : 3;
    await page.click(
      `${participationRowSelector} > td:nth-child(${paymentNum}) input[type="radio"]`
    );
    await page.click(
      `${participationRowSelector} > td:nth-child(${paymentNum}) input[type="text"]`,
      { clickCount: 3 }
    );
    await page.keyboard.press("Backspace");
    await page.type(
      `${participationRowSelector} > td:nth-child(${paymentNum}) input[type="text"]`,
      `${part.eventFee}`
    );

    const methodType = part.fcfs ? "fcfs" : "lottery";
    await page.select(
      `${participationRowSelector} .ptype_method select`,
      methodType
    );
  }

  await page.click(`${participationAreaSelector} button[type="submit"]`);

  // --------------------------------------------------
  // Fill Event: Event Image
  // --------------------------------------------------
  await page.click(".ImageUpload");
  await page.waitForSelector('.popup input[type="file"]');
  const imageUpload = await page.$('.popup input[type="file"]');
  await imageUpload.uploadFile(settings.imagePath);
  await page.click('.popup button[type="submit"]');
  // TODO: sometime timeout for navitagion. It depend on content already loaded or not?
  // await page.waitForNavigation({ waitUntil: 'domcontentloaded' });
  // Circleci network latency a little big. So, it wait to upload.
  await page.waitFor(5000);

  // --------------------------------------------------
  // Fill Event: Host and Presenter
  // --------------------------------------------------
  // host
  const hostAreaSelector = "#FieldOwnerText";
  await page.waitForSelector(hostAreaSelector);
  await page.click(hostAreaSelector);
  await page.waitForSelector(`${hostAreaSelector} button`);
  await page.click(`${hostAreaSelector} input`, { clickCount: 3 });
  await page.keyboard.press("Backspace");
  await page.type(`${hostAreaSelector} input`, settings.host);
  await page.click(`${hostAreaSelector} button`);

  // 2019-03-31: Connpass Group Organizer add automatically
  // // Organizer
  // for (const organizer of settings.organizers) {
  //   await page.click('#OwnersArea .NewOwnerField');
  //   await page.type('#OwnersArea input', organizer);
  //   await page.waitForSelector(`#EventEditApp a > .username`)
  //   await page.click(`#EventEditApp a > .username`)
  // }

  // Presenter
  for (const presenter of settings.presenters) {
    await page.click("#PresenterTagsArea .NewPresenterField");
    await page.type("#PresenterTagsArea .NewPresenterField input", presenter);
    await page.waitForSelector("#EventEditApp a > .username");
    await page.click("#EventEditApp a > .username");
  }

  // hashtag
  const hashtagAreaSelector = "#FieldHashtag";
  await page.click(hashtagAreaSelector);
  await page.waitForSelector(`${hashtagAreaSelector} input`);
  await page.click(`${hashtagAreaSelector} input`, { clickCount: 3 });
  await page.keyboard.press("Backspace");
  await page.type(`${hashtagAreaSelector} input`, settings.hashtag);
  await page.click(`${hashtagAreaSelector} button[type="submit"]`);

  // --------------------------------------------------
  // Fill Event: Description
  // --------------------------------------------------
  const descriptionAreaSelector = "#FieldDescription";
  await page.click(descriptionAreaSelector);
  await page.waitForSelector(`${descriptionAreaSelector} textarea`);
  await page.click(`${descriptionAreaSelector} textarea`, { clickCount: 3 });
  await page.keyboard.press("Backspace");
  await page.type(
    `${descriptionAreaSelector} textarea`,
    ConnpassEventCreator.getDescription(settings.descriptionPath)
  );
  await page.click(`${descriptionAreaSelector} button[type="submit"]`);

  // --------------------------------------------------
  // Fill Questionnaire
  // --------------------------------------------------
  if (settings.questionnaire.length > 0) {
    // Move to form page
    await page.click("#enquete_btn");
    await page.waitForSelector("#main .btn");
    await page.click("#main .btn");

    await page.waitFor(2000);

    // Create Form
    for (const [i, q] of settings.questionnaire.entries()) {
      const questionEditAreaSelector = `.QuestionArea > div:nth-child(${i +
        1})`;

      if ((await page.$(`${questionEditAreaSelector}`)) == null) {
        await page.click(".AddQuestion");
        await page.waitForSelector(`${questionEditAreaSelector}`);
      }

      if (q.required)
        await page.click(`${questionEditAreaSelector} input[name="required"]`);
      await page.type(
        `${questionEditAreaSelector} input[name="title"]`,
        q.title
      );

      let typeNum = "0";
      switch (q.answerType) {
        case "text":
          typeNum = "1";
          break;
        case "checkbox":
          typeNum = "2";
          break;
        case "radiobutton":
          typeNum = "3";
          break;
        case "pulldown":
          typeNum = "4";
          break;
        default:
        // TODO: unknown type error
      }
      await page.select(`${questionEditAreaSelector} select`, typeNum);

      for (const [idx, val] of q.options.entries()) {
        const valRowSelector = `${questionEditAreaSelector} li:nth-child(${idx +
          1})`;
        if ((await page.$(valRowSelector)) == null) {
          await page.click(`${questionEditAreaSelector} .AddQuestionOption`);
          await page.waitForSelector(valRowSelector);
        }

        await page.type(`${valRowSelector} input[type="text"]`, val);
      }
    }

    await page.click(".SaveQuestions");
    await page.waitForNavigation();
  }

  // --------------------------------------------------
  // Finalize
  // --------------------------------------------------
  const currentUrl = await page.url();
  logger.debug(`please check ${currentUrl}`);

  await browser.close();

  return currentUrl;
  /* eslint-enable no-await-in-loop */
};

exports.ConnpassEventCreator = ConnpassEventCreator;
