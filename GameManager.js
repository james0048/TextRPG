
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter Command:'
});
var character = require('./Character');
var input;
var characterList = [];

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'help':
      console.log('new-char');
      console.log('display');
      break;
    case 'new-char':
      NewChar();
      break;
    case 'display':
      DisplayChar();
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}', use help for commands`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});


function NewChar(){
  
  name = '';
  race = '';
  gender = '';

  rl.question('What is the name? ', (answer) => {
    rl.question('What is the race? ', (answer2) => {
      rl.question('What is the gender? ', (answer3) =>{
        name = answer;
        race = answer2;
        gender = answer3;
        characterList.push(new character(name, race, gender));
        rl.prompt();
      });
    });
});
  
}

function DisplayChar(){
  for(i = 0; i < characterList.length; i++){
    console.log(characterList[i]);
  }
}