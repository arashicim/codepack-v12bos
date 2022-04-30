const Discord = require("discord.js");
const config = require('../config.js'); //ayarların olduğu dosyanın adı
module.exports = async client => {

// WATCHING = İZLİYOR
// PLAYING = OYNUYOR
// LISTENING = DİNLİYOR

  client.user.setPresence({ activity: { type: "WATCHING", name: `Coded by arashicim.`}, status: 'dnd' })
};


