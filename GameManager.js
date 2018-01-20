
var character = require('./Character');
var input;
var characterList = [];

exports.AddChar = (name, race, age) => {
  characterList.push(new character(name, race, age));
}

exports.Display = () =>{
  returnArray = [];
  for(i = 0; i < characterList.length; i++){
    cl = characterList[i];
    returnArray.push(`${cl.name} ${cl.race} ${cl.gender}`)
  }
  return returnArray;
}



