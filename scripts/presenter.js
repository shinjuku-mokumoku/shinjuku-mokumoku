const fs = require('fs');
const meetup_no = process.argv[2];

console.log(`Meetup #${meetup_no}\n`)

fs.readdir( `${__dirname}/../meetups/${meetup_no}`, (err, files) => {
  files
    .filter( (file) => { return !/(README|PITCHME|template|kpt)\.(md|yaml|yml)/.test(file) })
    .sort((a, b) => {return 0.5 - Math.random()})
    .forEach((i) => { console.log(i) });
});
