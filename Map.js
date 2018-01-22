function Map(size){
    this.mapArray = new Array(size);
    for(i = 0; i < size; i++){
        this.mapArray[i] = new Array(size);
        for(j = 0; j < size; j++){
            this.mapArray[i][j] = 'x';
        }
    }
}

module.exports = Map;