const Discord = require('discord.js');
var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {colorize: true});

logger.level = 'debug';

characterList = [];
var character = require('./Character');

// Initialize Discord Bot
const client = new Discord.Client();
client.login(auth.token);
client.on('ready', () => {
    logger.info('Connected');
});
client.on('message', async message => {
    //ignore other bots
    if(message.author.bot) return;

    //ignore if missing correct prefix
    if(message.content.indexOf(auth.prefix) !== 0) return;

    //Seperate command and arguments
    const args = message.content.slice(auth.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //try to open the script for the command
    try{
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    }catch(err){
        console.error(err);
    }

    if(command === 'new-char'){
        let name = args[0];
        let race = args[1];
        let gender = args[2];
        NewChar(name, race, gender);
    }

    if(command === 'display'){
        for(i = 0; i < characterList.length; i++){
            message.channel.send(characterList[i].name + ' ' + characterList[i].race + ' ' + characterList[i].gender);
          }
    }

    
});






  
  function DisplayChar(){
    for(i = 0; i < characterList.length; i++){
      console.log(characterList[i]);
    }
  }