const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
    console.log('Toy prendido');
    client.user.setPresence({
         status: "idle",
         activity: {
             name: "Mencioname",
             url : "https://www.twitch.tv/videos/879419870",
             type: "STREAMING"
         }
     });
  });
  
client.login(config.token)

