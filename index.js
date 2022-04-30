const Discord = require("discord.js")     
const client = new Discord.Client();    
const config = require("./config.js") //ayarların tutulduğu dosya
const fs = require("fs");               
require('./util/yükleyici.js')(client);   

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection(); 
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);              
  console.log(`Toplamda ${files.length} komut yüklenecek.`); 
  files.forEach(f => {                      
    let props = require(`./commands/${f}`); 
    console.log(`Başarıyla ${props.config.name} adlı komut aktif edildi.`);  
    console.log(`İyi kullanımlar dileriz.`)     
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {          
      client.aliases.set(alias, props.config.name);  
    });
  });
})

client.login(config.token)
