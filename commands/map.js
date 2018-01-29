exports.run = (client, message, args) => {
    var gm = require('../GameManager');
    var map = gm.Map();
    var returnString = '';
    var size = map.mapArray.length;

    if(args[0] == undefined){ //no arguments means print map
        //loop through 2d array of map
        for(i = 0; i < size; i ++){
            for(j = 0; j < size; j++){
                returnString = returnString.concat(map.mapArray[i][j].toString(), "   ");
            }
            returnString = returnString.concat("\n");
        }
        message.channel.send(returnString);
        message.channel.send("Player location: " + gm.PlayerPos());
    }else if(args[0] == 'detail' || args[0] == 'details'){ //print detail for specific coordinate
        let int1 = parseInt(args[1]) - 1;
        let int2 = parseInt(args[2]) - 1;

        message.channel.send(`Details for location: ${int1+1},${int2+1}`)

        message.channel.send(map.mapArray[int1][int2].Display());
    }else if(args[0] == 'key'){ //print key informatin loaded from map_key.json
        var arr = [];
        var keyData = require("../map_key.json");
        for (var key in keyData) {
          arr.push(key + ": " + keyData[key]);  
        }
        message.channel.send(arr)
    }else{
        
        message.channel.send("Unknown Command:\nUse 'map' to show full map\nUse 'map detail x y' where x and y are the location of the point you want more details for\nUse 'map key' for key information");
    }
}