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

    if(command === 'ping'){
        //calculate latency
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is, ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if(command === "say"){
        const sayMessage = args.join(" ");
        message.delete().catch(O_o=>{});
        message.channel.send(sayMessage);
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





function NewChar(_name, _race, _gender){
    
    name = _name;
    race = _race;
    gender = _gender;
  
    characterList.push(new character(name, race, gender));
    
  }
  
  function DisplayChar(){
    for(i = 0; i < characterList.length; i++){
      console.log(characterList[i]);
    }
  }