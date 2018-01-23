

exports.run = (client, message, args) => {
    let name = args[0];
    let race = args[1];
    let gender = args[2];
    let gm = require(`../GameManager.js`);
    if (race.toLowerCase() != "dwarf" && race.toLowerCase() != "elf" && race.toLowerCase() != "human" && race.toLowerCase() != "orc"){
        message.channel.send('Please choose one of the following race: Dwarf, Elf, Human, or Orc')
    }
    if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female"){
        message.channel.send('Please choose one of the following genders: Female or Male')
        return
    }
    gm.AddChar(name, race, gender);
    message.channel.send(`Created new character: ${name} ${race} ${gender}`).catch(console.error);
}

