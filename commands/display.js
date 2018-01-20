exports.run = (client, message, args) => {
    let gm = require(`../GameManager.js`);
    chars = gm.Display();
    for(i = 0; i < chars.length; i++){
        message.channel.send(chars[i]).catch(console.error);
    }
}