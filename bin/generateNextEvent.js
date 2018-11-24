var fs = require('fs');
var meetup_path = `${__dirname}/../meetups`

fs.readdir( meetup_path, (err, dirs) => {
  var meetups = dirs
    .filter( (dir) => { return !/template/.test(dir) })
    .map( dir => isNaN(dir) ? 0 : parseInt(dir) );

  var next_meetup_num = Math.max.apply(null, meetups) + 1;

  fs.mkdirSync(`${meetup_path}/${next_meetup_num}`);
  fs.writeFileSync(`${meetup_path}/${next_meetup_num}/kpt.md`, `# keep\n\n# problem\n\n# try\n`);

  console.log(`generated: ${next_meetup_num} meetup template`);
});
