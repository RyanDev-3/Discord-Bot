// require dsicord package 

const Discord = require("discord.js");

const client = new Discord.Client();

// diplays a message but comes online
client.on("ready", () => {
    console.log(`logged in ${client.user.tag}!`);
});

client.on("message" , msg => {
   if (msg.content === "!subscribe"){
       msg.reply("https://www.youtube.com/channel/UC6KT1_CcWcV7frYvm2H2ibQ?view_as=subscriber");
   }

});


