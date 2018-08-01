var members = []
for(var i = 2;i < process.argv.length; i++){
  members.push(process.argv[i])
}

for(var i = members.length - 1; i > 0; i--){
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = members[i];
    members[i] = members[r];
    members[r] = tmp;
}

for(var i = 0;i < members.length; i++){
    console.log("No."+ (i+1) + " : " +members[i] + "")
}
