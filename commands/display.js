exports.run = (client, message, args) => {

    if(args[0] == null){
        message.channel.send("Please enter one of the following arguments:");
        message.channel.send("all - shows all characters name, race and gender");
        message.channel.send("character 'character name' - shows details stats for that character");
    }else if(args[0].toLowerCase() == 'all'){
        let gm = require(`../GameManager.js`);
        var chars = gm.Display();
        for(i = 0; i < chars.length; i++){
            var cl = chars[i];
            message.channel.send(`${cl.name} ${cl.race} ${cl.gender}`).catch(console.error);
        }
    }else if(args[0].toLowerCase() == 'character' ){
        let gm = require(`../GameManager.js`);
        var chars = gm.Display();
        for(i = 0; i < chars.length; i++){
            if(chars[i].name.toLowerCase() == args[1].toLowerCase()){
                
                var char = chars[i];

                //loop through attributes
                message.channel.send(`${args[1]} Attributes:`)
                message.channel.send(char.attributes.length);
                for(j = 0; j <char.attributes.length; j++){
                    message.channel.send(char.attributes[j]);
                }

                //loop through Skills
                message.channel.send(`${args[1]} Skills:`)
                for(j = 0; j <char.skills.length; j++){
                    message.channel.send(char.skills[j]);
                }
                
                //print it
                return;
            }
        }
        message.channel.send("Unable to find character.");
    }
}