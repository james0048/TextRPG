exports.run = (client, message, args) => {
    var gm = require('../GameManager');
    var map = gm.Map();
    var returnString = '';
    var size = map.mapArray.length;
    console.log(map.mapArray[1][1]);
    for(i = 0; i < size; i ++){
        for(j = 0; j < size; j++){
            returnString = returnString.concat(map.mapArray[i][j], " ");
        }
        returnString = returnString.concat("\n");
    }
    message.channel.send(returnString);
}