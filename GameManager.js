
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter Command:'
});
var character = require('./Character');
var input;
var characterList = {};

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
    name = 'bob';
    race = 'elf';
    gender = 'boy';
    characterList[characterList.length] = new character(name, race, gender);
}