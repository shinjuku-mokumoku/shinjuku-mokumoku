var fs = require('fs');

fs.readdir(__dirname+'/../meetups/', function(err, meetupsdir){
    if (err) throw err;
    meetupsdir.sort(
        function(a,b){
        if( parseInt(a) > parseInt(b) ) return -1;
        if( parseInt(a) < parseInt(b) ) return 1;
        return 0;
    });
    var latest = meetupsdir[0]
    fs.readdir(__dirname+'/../meetups/'+latest, function(err, mdfiles){
      if (err) throw err;

        var members = mdfiles.filter(function(file){
            return /.*\.md$/.test(file) && !/template\.md$/.test(file) && !/PITCHME\.md$/.test(file) && !/README\.md$/.test(file) && !/kpt\.md$/.test(file)
        })
        for(var i = members.length - 1; i > 0; i--){
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = members[i];
            members[i] = members[r];
            members[r] = tmp;
        }

        for(var i = 0;i < members.length; i++){
            console.log("No."+ (i+1) + " : " +members[i] + "")
        }

    });
});