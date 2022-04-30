const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {
message.channel.send('Botunuz aktif olarak çalışmaya başlamış, bu türden komutları oluşturup bu klasöre atabilirsiniz.')
message.channel.send('CodePack iyi kullanımlar diler.')
};

exports.config = {
  name: "ping",
  guildOnly: true,
  aliases: [],
};