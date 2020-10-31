const Discord = require('discord.js');
const bot = new Discord.Client();
const token = require("./token.json")

bot.on("ready", async () =>{
    console.log("Le bot est désormais allumé")
    bot.user.setStatus("dnd")
    bot.user.setActivity("Protection de serveurs", {type: 'STREAMING'} );
})



bot.login(token.token);