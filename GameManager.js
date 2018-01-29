
var character = require('./Character');
var input;
var characterList = [];
var Map = require('./Map');
var playerPos = [0,0]

exports.AddChar = (name, race, age) => {
  characterList.push(new character(name, race, age));
}

exports.Display = () =>{
  returnArray = [];
  for(i = 0; i < characterList.length; i++){
    cl = characterList[i];
    returnArray.push(`${cl.name} ${cl.race} ${cl.gender}`);
  }
  return characterList;
}

exports.Map = () =>{
  var map = new Map(20);
  return map;
}

exports.PlayerPos = () =>{
  return playerPos;
}




