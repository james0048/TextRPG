var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {colorize: true});

logger.level = 'debug';
console.log("test");
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    console.log("test2");
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            case 'story':
                bot.sendMessage({
                    to: channelID,
                    message: 'Paul is a little bitch'
                });
                break;
            case 'more':
                bot.sendMessage({
                    to: channelID,
                    message: 'He got hit and cried like a girl. the end.'
                });
                break;
            case 'tellmemore':
                bot.sendMessage({
                    to: channelID,
                    message: 'But Jerome is still the wimpiest of them all.'
                });
                break;
                case 'help':
                    bot.sendMessage({
                        to: channelID,
                        message: 'new-char\ndisplay-chars\nstory'
                    });
                    break;
              case 'new-char':
                NewChar();
                break;
              default:
                bot.sendMessage({
                    to: channelID,
                    message: 'Use help for commands'
                });
                break;
            // Just add any case commands if you want to..
         }
     }
});