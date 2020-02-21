const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === 'G!help') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('This feature is not currently out yet.');
    }
});

client.login('Njc4ODg5NjgzMDU2NTkwODU4.XkxVNw.XHFLDBE_ktlngoZ61MqrQaJy7uw');

