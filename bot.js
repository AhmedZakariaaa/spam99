const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("595040413874913320")
setInterval(function() {
channel.send(`Ahmed Ahmed Ahmed Ahmed Ahmed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);