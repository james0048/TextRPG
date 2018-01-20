

exports.run = (client, message, args) => {
    let name = args[0];
    let race = args[1];
    let gender = args[2];
    let gm = require(`../GameManager.js`);
    gm.AddChar(name, race, gender);
    message.channel.send(`Created new character: ${name} ${race} ${gender}`).catch(console.error);
}

