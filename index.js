const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");

client.on("ready", async() => {
  client.user.setActivity("In Developement!")
  console.log(`I am logged in as ${client.user.tag}`)
})

bot.login(process.evl.TOKEN)
