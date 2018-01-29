function Map(size){
    this.mapArray = new Array(size);
    var Community = require('./objects/community.js').Community;
    var Village = require('./objects/community.js').Village;
    for(i = 0; i < size; i++){
        this.mapArray[i] = new Array(size);
        for(j = 0; j < size; j++){
            this.mapArray[i][j] = '+';
        }
    }
    this.mapArray[2][2] = new Village("Avalon","2,2", "Human", 3);
}

module.exports = Map;