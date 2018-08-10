var fs = require('fs');
var textfile = __dirname+"/members.txt"
try {
    containts = fs.readFileSync(textfile, 'utf8');
    members = containts.split(/\r\n|\r|\n/);

    for(var i = members.length - 1; i > 0; i--){
        var r = Math.floor(Math.random() * (i + 1));
        var tmp = members[i];
        members[i] = members[r];
        members[r] = tmp;
    }

    for(var i = 0;i < members.length; i++){
        console.log("No."+ (i+1) + " : " +members[i] + "")
    }

} catch(err) {
    console.log("couldn't open "+textfile )
}