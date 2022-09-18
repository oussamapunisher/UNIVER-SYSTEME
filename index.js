const express = require('express');
const app = express();
 app.use('/ping', (req, res) => {
    res.send(new Date());
});
app.listen(3000, () => {
});
const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require("ms");
const db = require('quick.db');
require("events").EventEmitter.defaultMaxListeners = 50000;
const inlinereply = require('discord-reply');
const disbut = require('discord-buttons');
const probot = require("probot-tax");
////Bot Status
client.on("ready", () => {
  console.log(`[ - Bot is Online - ]`);
  console.log(`Name Bot : ${client.user.username}`);
  console.log(`Guilds : ${client.guilds.cache.size}`);
  console.log(`Users : ${client.users.cache.size}`);
  console.log(`Channels : ${client.channels.cache.size}`);
});
client.on('ready', () => {
  console.log(`🤠 : ${client.user.username}`);
  client.user.setStatus('dnd');///dnd/online/idle
  let status = [`𝖡𝗒 IMAX  Team`,`${prefix}help`];
  setInterval(()=>{
  client.user.setActivity(status[Math.floor(Math.random()*status.length)]);
  },5000)
})
///Definitions 
const prefix = "*";///your prefix
const owner = ["623948614850314280","739716469939765278"]///owner id
const supportServer = "https://discord.gg/EcGQQj3bxu"///server support
const help_info_color = "#17ac86"///color in help
const color = "#ff0000"//main color
const moreInfo = `Need more info? use ${prefix}help`
const line = "https://cdn.discordapp.com/attachments/996008390763499682/1003654113969586186/89_31B543B-1.gif"///url line link
const صح = "<a:901025165822017546:984063006914785350>";//react
const غلط = "<a:903638682601418845:984063988621000744>";//react

///auto react



client.on("message", async black => {
   ///replace 83838388 with id channel
 
  if (black.channel.id !=997844145135689748) return;
  if(black.author.id === client.user.id) return;
      black.react("<a:901025165822017546:984063006914785350>")//react
      black.react("<a:903638682601418845:984063988621000744>")//2

  
 
  }
  
)

//tax channel

client.on('message', message => {
  let args = message.content
  if (message.author.bot) return;
  if (message.channel.id !== '') return;
let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
let tax = Math.floor(args2 * (20) / (19) + (1))
let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
let tax3 = Math.floor(tax2 * (20) / (19) + (1))
let tax4 = Math.floor(tax2 + tax3 + args2)
if (isNaN(args2)) return message.channel.send(`**__error__ **`)
if (args2 < 1) return message.channel.send("** اكتب رقم**");
if (args2 == 1) return message.channel.send(`> **pleas write numbed \`1\`**`);


  if (message) {
  message.channel.send(`> **Your Tax : __${probot.taxs(args2)}__**`)
  }
}); 


client.on("message", message => {
  if (message.content == ("السلام عليكم") || message.content === "سلام عليكم") 
  {

message.lineReply(`
> \`-\`    **وعليكم السلام يا برو** 
> \`/\`    **Welcome To : \`${message.guild.name}\`  **

 `)

  }
})



client.on("message", message => {
  if (message.content == (".") || message.content === "..") 
  {

message.lineReply(`
<:arab_line:1001192956805525515> 
 `)

  }
})
///line
client.on("message", message => {
  if (message.content == ("خط") || message.content === "https://cdn.discordapp.com/attachments/996008390763499682/1003654113969586186/89_31B543B-1.gif") 
  {

message.channel.send(
  new Discord.MessageEmbed()

  .setColor(color)
  .setImage(line)
)
message.delete()

  }
})



///link
client.on("message", message => {
  if (message.content == ("لينك") || message.content === "link") {

message.lineReply(`
> \`-\` **My Link :** https://discord.gg/EcGQQj3bxu

> \`/\` **𝖧𝖺𝗏𝖾 𝖥𝗎𝗇 𝖶𝗂𝗍𝗁 𝖴𝗌**   
`)

  }
})



client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'id')) {
    var user = message.guild.member(message.mentions.members.first() || message.author);
    const embed = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL({dynamic: true}))  
    .setAuthor(message.author.username,message.author.avatarURL({dynamic: true}))
  .setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
      .setColor(color)
      .addField(`> ID USER : [ ${user.id} ]`, `> ${user.user}`)

    message.lineReply({ embed });
  }
});


//avatar 

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0]
    command = command.slice(prefix.length)
    if (command == "avatar") {
        let args = message.content.split(" ")
        let user = message.mentions.users.first() || client.users.cache.find(u => u.id === args[1]) || message.author
        if (args[1] !== "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(user.username, user.avatarURL({dynamic: true}))
                .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
                .setImage(user.avatarURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(user.username, user.avatarURL({ dynamic: true }))
                .setTimestamp()
            );
        } else if (args[1] === "server") {
            message.lineReply(
                new Discord.MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setDescription(`**__[Avatar Link]__(${message.guild.iconURL({ dynamic: true })})**`)
                .setImage(message.guild.iconURL({
                    dynamic: true,
                    format: 'png',
                    size: 1024
                }))
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            );
        }
    }
});

//user
client.on('message',message => {
    if(message.content.startsWith(prefix + 'user')){
if(!message.guild)return;
const args = message.content.split(" ")[1];
let mID = message.guild.members.cache.get(args);
    let member;
    let user;
    if(args && !message.mentions.members.first() && !mID)return message.lineReplyNoMention({embed:{description:`😒 - **${message.author.username}**, **I can't find \`${args}\` in the server Please Join Your Id a Server**`,color:color}});
    if(message.mentions.members.first()||mID){
        member = message.mentions.members.first()||mID;
        user = member.user;
    }else{member = message.member;
    user = message.author;}
    let em = new Discord.MessageEmbed()
    .setColor(color)
    .setThumbnail(user.displayAvatarURL({dynamic:true}))
    .addField(`Joined Discord :`,`\n\`\`${moment(user.createdAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(user.createdAt).fromNow()}**`,true)
    .addField(`Joined Server :`,`\`\`${moment(member.joinedAt).format('YYYY/M/D h:mm:ss')}\`\`\n**${moment(member.joinedAt).fromNow()}**`,true)
    .setFooter(user.tag,user.avatarURL({dynamic:true}))
    
    .setAuthor(user.tag,user.avatarURL({dynaimc:true}))
    message.lineReply(em);
}
})

//ban
client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "ban")){
        if(!normal.member.hasPermission('BAN_MEMBERS'))
       return normal.lineReply(
          new Discord.MessageEmbed()
           .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```انت لست من الادمن | You are not addicted```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )

           if(!normal.guild.me.hasPermission('BAN_MEMBERS'))
         return  normal.lineReply(
             new Discord.MessageEmbed()
             .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
             .setColor(color)
             .setTitle("** I Dont Have a Permissions **")
             .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
           )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
      if(!member) return  normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`\`\`\`Please Mention user or Type the user ID/Username ${args.slice(1).join(' ')}\`\`\` `)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
                if (member.id === normal.author.id)return normal.reply(`\`\`\`You can't ban Yourself\`\`\` `)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't ban me dumbass**`)
     if(!member.bannable) return normal.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```The Member Role Is Higher Than Me```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )


         await member.ban({reason:`He/She just got bannned`})
        normal.lineReply(`**${member.user.username} Has been BANNNED ✈**`)
    } 
})






/// hide/show

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
 return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))         
                .setColor(color)
                .setDescription(`> **Done Hide This Room  ${message.channel}**`)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});

client.on('message', message =>{
if(message.content === prefix +"show"){
if(message.author.bot || !message.guild) return;
if(!message.member.hasPermission('MANAGE_CHANNELS'))
return message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setTitle("``` You Dont Have a Permissions```")
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
);

let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               VIEW_CHANNEL: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`> **Done Show This Room  ${message.channel}** `)
                .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
                message.lineReply(embed)
                })
}
});



//add-emoji

client.on('message', black =>{
  if (black.content.startsWith(prefix + 'add-emoji')) {
     const args = black.content.split(' ').slice(1)
    if (!black.member.hasPermission('MANAGE_EMOJIS')) {
    return  black.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
        
        .setColor(color)
        
        .setTitle(`
> **You Dont Have a Permissions __Here__ \`MANAGE_EMOJIS\`**        
      `)
        .setFooter(black.author.tag, black.author.avatarURL({ dynamic: true }))
  .setTimestamp()

      )
    }

    if (!black.guild.me.hasPermission('MANAGE_EMOJIS')) {
        return black.lineReplyNoMention(`
        > **I Dont Have a Permissions \`MANAGE_EMOJIS\`**
        `);
    }

    const emoji = args.join("");
    if (!emoji) return black.lineReply(
      new Discord.MessageEmbed()

      .setColor(color)
      .setDescription(`
      > **Please Write a Emoji add to __Server__**
      `)
               .setThumbnail(black.guild.iconURL())
       .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
      .setTimestamp()
    )

    let the_typed_emoji = Discord.Util.parseEmoji(emoji);

    if (the_typed_emoji.id) {
        const link = `https://cdn.discordapp.com/emojis/${the_typed_emoji.id}.${
            the_typed_emoji.animated ? 'gif' : 'png'
        }`;
        const name = args.slice(1).join(' ');

        black.guild.emojis.create(`${link}`, `${name || `${the_typed_emoji.name}`}`);
        const done = new Discord.MessageEmbed()
        .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
            .setTitle(`
            > **Done addd a __Emoji__**
            `)
         
        
            .setColor(color)
            .setTimestamp()

                black.react(صح)
            
        return black.lineReplyNoMention(done);
    } else {
        let CheckEmoji = parse(emoji, { assetType: 'png' });
        if (!CheckEmoji[0])
            return black.lineReply('invalied emojiev');
        black.lineReply(`
        > **Please add Emoji Auhtor**

        > **من فضلكك قم باضافة ايموجي اخر**
        `);
}
}
})






/// nick name 
client.on("message",message=>{
    if(message.content.startsWith(prefix+"nick-name")){
      if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReply("```❌You Dont Have a permissions ```")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1])||message.guild.members.cache.find(r => r.user.username === args[1])
      if(!member) return message.lineReply("nick-name @Mention (nickname)")
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if(!nick){
g.setNickname(member.username)
      }
g.setNickname(nick)
const l = g.nickname|| member.username
let embed = new Discord.MessageEmbed()
.setAuthor(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setThumbnail(message.member.user.avatarURL({dynamic:true}))
.setColor(color)
.setTitle("**__Done NickName__**")
.addField(`**(User Nick Change)**`,`${member}`,true)
.addField(`**(Befor)**`,`**${l}**`,true)
.addField(`**(After)**`,`**${nick}**`,true)
.addField(`**(from)**`,`**${message.author}**`,true)

.setFooter(message.member.user.username,message.member.user.avatarURL({dynamic:true}))
.setTimestamp()
message.lineReply(embed)
    }
  })

///ping
client.on("message", async(black) => {

    if (black.content.startsWith(prefix + "ping")) {
    
        black.lineReplyNoMention(
          new Discord.MessageEmbed()

          .setColor(color)
          .setDescription(`> **Please Wait...**`)

        ).then((m) => {
            setTimeout(() => {
                m.edit((
                  new Discord.MessageEmbed()
                  .setColor(color)
                  .setDescription(`> \`-\` **My Ping Is :** \`${client.ws.ping}\` `)
                    .setAuthor(black.author.tag, black.author.avatarURL({ dynamic: true }))
    .setTimestamp()
                

                )
                )
            }, 5000)
        })
    }
})






// tax 
client.on("message", async message => {


  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
    let args2 = args.replace("k","000").replace("m", "000000").replace('M', "000000").replace('K', "000").replace('b',"000000000000").replace('B',"000000000000")
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let tax2 = Math.floor(args2 * (20) / (19) + (1)-(args2))
    let tax3 = Math.floor(tax2 * (20) / (19) + (1))
    let tax4 = Math.floor(tax2 + tax3 + args2)
    let errorembed3 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait.. **`);
    if (!args2) return message.lineReply(errorembed3).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
                       .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
                    .setTitle(`>   **...**`)

          .setDescription(`
          > **Please Write Your Number to Taxs**
          `)
  
          
        
        )
      }, 4500)
    });
    let errorembed2 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait... **`);
    if (isNaN(args2)) return message.lineReply(errorembed2).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
                       .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
          .setTitle(`**...**`)
          .setDescription(`>  **Please Write Your Namber to Taxs**

`)
        )
      }, 4500)
    });;
    let errorembed = new Discord.MessageEmbed()
           .setTitle(`**...**`)
    .setColor(color)
    .setDescription(`> **Must The Number Larger __1__**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.lineReply(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`>  \`-\` **all Taxs : \`1\` ** 
    `)
                .setImage(line)
            .setTimestamp()
             .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
            if (args2 == 1) return message.lineReply(embed3);
    let embed = new Discord.MessageEmbed()
    .setColor(color)
    .setDescription(`> **Please Wait..  **`)
    message.lineReply(embed).then(e=>{
      setTimeout(function(){
        e.edit(
          new Discord.MessageEmbed()
          .setColor(color)
          .setDescription(`

          > **Done Send all Tax** 

          > **Tax __Here__ \`${tax}\`**
          `)
            .setImage(line)
            .setTimestamp()
             .setThumbnail(message.author.avatarURL({dynamic: true}))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true }))
        )
      }, 1500)
    });;
  }
  });
///By IMAX TEAM
////////////////////////
// Sevrer 
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'server' || command === 'معلومات') {

        const onlinemembers = message.guild.members.cache.filter(m => m.presence.status === 'online'||'dnd'||'afk').size
          const textch = message.guild.channels.cache.filter(ch => ch.type === "text").size
          const voicech = message.guild.channels.cache.filter(ch => ch.type === "voice").size
          let customembed = new Discord.MessageEmbed()
          
          
    .setTimestamp()
          
          .setAuthor(message.guild.name,message.guild.iconURL({dynamic: true}
          ))

             .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}
          ))
          
          .addField(`🆔 Server ID:`, message.guild.id, true)
          .addField(`📆 Created On`, message.guild.createdAt, true)
          .addField(`👑 Owned by`, message.guild.owner, true)
          .addFields({name:`👥  Members (${message.guild.members.cache.size})`, value: `${onlinemembers} online\n${message.guild.premiumSubscriptionCount} boosts ✨`, inline: true})
          .addField(`:speech_balloon: Channels (${message.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
          .addFields({name:`🌍 Others`, value: `**region:** ${message.guild.region}\n **Verification Level:** ${message.guild.verificationLevel}`, inline: true})
          .addField(`🔐  Roles (${message.guild.roles.cache.size})`, `To see a list with all roles use `)
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setColor(color)
          
          message.lineReplyNoMention(customembed)

          
        }
});


//Channel FeedBack 


client.on("message", message => {
  let embed = new Discord.MessageEmbed()
    .setTitle(`> **/ <a:AS_prove:1001195808244383874>Thanks for Feed Back**    
- <a:905064318335328309:997851377814483015> and Using IMAX STORE
`)

  .setImage(line)
  .setThumbnail(message.author.avatarURL({dynamic: true}))
        .setAuthor(message.author.username,message.author.avatarURL({dynaimc: true}))
           .setTimestamp()
       .setColor(color)
  if (message.channel.id != "998650728438571140") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
///auto line

client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "997844145135689748") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//2
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "995652850925436968") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//3
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "995656246281650227") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//4
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "995655980568297522") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//5
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1000421653500678214") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})
//6
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1003294656097959967") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

//7
client.on("message", message => {
  let embed = new Discord.MessageEmbed()


  .setImage(line)

 
       .setColor(color)
  if (message.channel.id != "1003294474211962930") return;


  if (message.author.id === client.user.id) return;
  if (message.author.send) {


    message.channel.send(embed);
  }

})

////mute

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "mute")){
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(` \`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        )
         const args = normal.content.slice(prefix.length).trim().split(/ +/g);
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                if(!member) return normal.lineReply(
                  new Discord.MessageEmbed()
                  .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(` \`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                )
                if (member.id === normal.author.id)return normal.reply(`**You can't mute yourself**`)
      if (member.id === normal.guild.me.id)return normal.reply(`**You can't mute me dumbass**`)
        let mutedrole = normal.guild.roles.cache.find(ro => ro.name === 'muted')
        if(!mutedrole) {
        try {
        var createdrole = await normal.guild.roles.create({
                      data : {
                        name : 'muted',
                        permissions: [],
                    }});
                        normal.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(createdrole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                } catch (err) {
                console.log(err)
            }};
let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
         member.roles.add(muterole)
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(` **Done Has Been Muted
BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()

        )
    } 
})

client.on('message', async normal => {
  if (normal.content.startsWith(prefix + "unmute")){
    var args = normal.content.slice(prefix.length).trim().split(/ +/g);
        if(!normal.member.hasPermission('MANAGE_ROLES')) return normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle(`\`\`\` You Dont Have a Permissions\`\`\``)
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        var member = normal.mentions.members.first()||normal.guild.members.cache.get(args[1])||normal.guild.members.cache.find(m => m.user.username === args.slice(1).join(' '));
                     if(!member) return normal.lineReply(
                       new Discord.MessageEmbed()
                       .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`\`\`\`Please Mention/ID Same One! ${args.slice(1).join(' ')}\`\`\``)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
                     )
                let muterole = normal.guild.roles.cache.find(r => r.name === 'muted')
        if(!member.roles.cache.has(muterole.id))return normal.lineReply(`**${member.user.username} is not muted**`)
        await member.roles.remove(muterole);
        normal.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(normal.author.tag, normal.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setDescription(`**Done Has remove Muted

BY : \`${member.user.username}\`**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )
  }})

///lock

client.on('message', async message => {
    if (message.content.startsWith(prefix + 'lock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS"))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );

        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: false
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
                  .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Locked This Channel  ${channel_find.name}`)
        );
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'unlock')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ You Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            SEND_MESSAGES: true
        });
        message.lineReply(
            new Discord.MessageEmbed()
            .setColor(color)
            .setFooter(message.guild.name,message.guild.iconURL({dynamic: true}))
            .setDescription(` Done Unlocked This Channel  ${channel_find.name}`)
        );
    }
});
///Line After transfer
 let channelid = '995654228532006942'  
client.on('message', message => {
  if(message.content.includes('قام بتحويل')) {
    if (message.channel.id !== channelid) return;
  message.channel.send(line)
  
  }
})
///////tickets

client.on("channelCreate", wanted => {
  if(wanted.parentID == "995653661608923136") {
    setTimeout(() => {
      wanted.send(`||@everyone||`,
        new Discord.MessageEmbed()
           .setColor(color)

 .setImage(line)
        .setTimestamp()
                 .setThumbnail(wanted.guild.iconURL({dynamic: true}))
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
   
 .setDescription(`
 > \`#\` **Please Write Your Request**

> \`#\` ** من فضلك اكتب ماهو غرضك كما ماهو تحت مثال netflix** 

**=============================**

> \`-\`<a:979722314704883755:997851471095799899> **netflix** <:Netflix:1001537019601748068> 



> \`-\`<a:979722314704883755:997851471095799899>**insta**  <:InstagramIcon:998164417667665940>




> \`-\`<a:979722314704883755:997851471095799899> **nitro**  <a:Nitro:997917797994733588>




> \`-\`<a:979722314704883755:997851471095799899> **design**  <:Photoshop:997917731523412118>




> \`-\`<a:979722314704883755:997851471095799899> **visa**  <:960482965010382868:997851432608870452>




> \`-\`<a:979722314704883755:997851471095799899> **bot**  <:993118543140900904:997851500049072248>




> \`-\`<a:979722314704883755:997851471095799899> **tiktok**  <a:942424975099461652:997851409968009326>




> \`-\`<a:979722314704883755:997851471095799899> **xbox**  <:unknown1:998164391121932381>




> \`-\`<a:979722314704883755:997851471095799899> **vote** <:Voting:1001537392261464074>



> \`-\`<a:979722314704883755:997851471095799899> **boost**  <a:BOSST:997851349775556708>



 
 `)
      )
    }, 2000);
  }
}); 



//// boost


client.on('message', wanted => {
  if(wanted.content === "buy boost")

  wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&998329720578002994>||`) 
})




client.on('message', message => {
  if (message.content === "boost") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
        .setColor(color)
.setTitle("> \`#\` **Prices for : boosts** ")

        .setDescription(`
        \`*1\` **__2boost 1 Month__ (__30k <a:11Credit:997851299217416232>__)**  

        \`*2\` **__1boost 1 Month__ (__15k <a:11Credit:997851299217416232>__)** 

**=============================**

> **If You Want to Buy Type**

__(buy boost)__
`)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
});


/// insta 

client.on('message', wanted => {
  if(wanted.content === "buy insta")

  wanted.lineReplyNoMention(`\`#\`  **Please wait while the seller responds to you** 

 **Mention** : ||<@&997992664085577768>||`) 
})



client.on('message', message => {
  if (message.content === "insta") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
        .setColor(color)
      .setTitle("> \`#\`**Prices for : instagram**")
        .setDescription(`
        \`*1\` **__100 follower__ (__15k<a:11Credit:997851299217416232>__)**  

        \`*2\` **__200 follower__ (__20k<a:11Credit:997851299217416232>__)** 

        \`*3\` **__500 follower__ (__35k <a:11Credit:997851299217416232>__)** 

        \`*4\` **__1000 follower__ (__100k <a:11Credit:997851299217416232>__)** 

**=============================**

> **If You Want to Buy Type**

__(buy insta)__
         `)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
}); /// instaa 

/// netflix


client.on('message', wanted => {
  if(wanted.content === "buy netflix")

  wanted.lineReplyNoMention(`> \`#\`  **Please wait while the seller responds to you** 

 **Mention** : ||<@&998651843657875547>||`) 
})
client.on('message', message => {
  if (message.content === "netflix") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
        .setColor(color)

.setTitle("> \`#\` **Prices for : Netflix** ")
        .setDescription(`
        
        \`*1\` ** 1 𝗠𝗼𝗻𝘁𝗵 = 35k <a:11Credit:997851299217416232> ** 
 

        \`*2\` ** 1 𝘄𝗲𝗲𝗸 = 25k <a:11Credit:997851299217416232>** 
 

**=============================**

> **If You Want to Buy Type**

__(buy netflix)__
         `)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
}); /// instaa 

//// tik tok 








/// tik tok 
client.on('message', wanted => {
  if(wanted.content === "buy tiktok")

  wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&998329958109810788>||`) 
})



client.on('message', message => {
  if (message.content === "tiktok") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
       .setTitle("> \`#\`    **Prices for : Tik Tok** ")
        .setColor(color)
        .setDescription(`
        
        \`*1\` **__25 followers __** = (**__15k <a:11Credit:997851299217416232>__**)   

        \`*2\` **__50 followers __** = (**__20k <a:11Credit:997851299217416232>__**)   

        \`*3\` **__100 followers __** = (**__35k <a:11Credit:997851299217416232>__**) 

        \`*4\` **__200 followers __** = (**__50k <a:11Credit:997851299217416232>__**)

        \`*5\` **__500 followers __** = (**__75k <a:11Credit:997851299217416232>__**) 

        \`*6\` **__1000 followers __** = (**__100k <a:11Credit:997851299217416232>__**)          
**=============================**

> **If You Want to Buy Type**

__(buy tiktok)__
         `)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
});



///nitro

client.on('message', wanted => {
  if(wanted.content === "buy nitro")

  wanted.lineReplyNoMention(`> \`#\`  **Please wait while the seller responds to you** 

**Mention** : ||<@&998329424678232074>||`) 
})


client.on('message', message => {
  if (message.content === "nitro") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
       .setTitle("> \`#\` **Prices for : Nitro** ")
        .setColor(color)
        .setDescription(`
         
      \`*1\` **__3month Gaming__ ( __60k<a:11Credit:997851299217416232>__**)

      \`*2\` **__1month Gaming__ ( __20k <a:11Credit:997851299217416232>__**)             

**=============================**
           
> **If You Want to Buy Type**

__(buy nitro)__
         `)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
});





/// visa  


client.on('message', wanted => {
  if(wanted.content === "buy visa")

  wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&997987018816618576>||`) 
})





client.on('message', message => {
  if (message.content === "visa") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
       .setTitle("> \`#\` **Prices for : Visa** ")
        .setColor(color)
        .setDescription(`
        
       \`*1\` **__1__ = ( __10k <a:11Credit:997851299217416232>__**)  

       \`*2\` **__Time Visa__** (**__24 hours__**) 


**=============================**

> **If You Want to Buy Type**

__(buy visa)__
         `)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
});

/// spotify 


client.on('message', wanted => {
  if(wanted.content === "buy xbox")

  wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

 **Mention** : ||<@&997986524312387634>||`) 
})





client.on('message', message => {
  if (message.content === "xbox") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
.setTitle("> \`#\`     **Prices for : xbox** ")
        .setColor(color)
        .setDescription(`     

      \`*1\` **__cod 2 𝗠𝗼𝗻𝘁𝗵__ (__15k <a:11Credit:997851299217416232>__**) 

**=============================**

> **If You Want to Buy Type**

__(buy xbox )__
         `)

        .setImage(line)

      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
});

///design

client.on('message', wanted => {
  if(wanted.content === "buy design")

  wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&998333297522384917>||`) 
})

client.on('message', message => {
  if (message.content === "design") {
  
    message.lineReplyNoMention(
      new Discord.MessageEmbed()
        .setColor(color)
       .setTitle("> \`#\` **Prices for : Design** ")
        .setDescription(`
        
      \`*1\` **__Logo__ = (__45k__)**

      \`*2\` **__Logo Gif__ = (__75k__)**  

      \`*3\` **__Line__ = (__35k__)**    

      \`*4\` **__Line Gif__ = (__55k__)**   

      \`*5\` **__ Banner__ = (__65k__)**   

      \`*6\` **__Scrim Photo__ = (__45k__)**   

      \`*7\` **__Welcome__ = (__75k__)**   

      \`*8\` **__Welcome Gif __ = (__120k__)**   

      \`*9\` **__ Cover Youtube__ = (__115k__)**

      \`*10\` **__ THUMBANAIL__ = (__100k__)**

      \`*11\` **__ Info__ = (__30k__)**

      \`*12\` **__ PROVE YOURSELF GIF__ = (__35k__)**

      \`*13\` **__ EMOJI __ = (__15k__)**

      \`*14\` **__ EMOJI GIF  __ = (__25k__)**

**=============================**

> **If You Want to Buy Type**

__(buy design)__
`)

.setImage(line)

      
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
    )
   
  }
});


//// vote 


client.on('message', wanted => {
  if (wanted.content === "buy vote"){


    wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&997986524312387634>||`)
  }
})


client.on('message', wanted => {
  if (wanted.content === "vote"){

    wanted.lineReplyNoMention(
new Discord.MessageEmbed()
.setColor(color)
.setThumbnail(client.user.avatarURL())
.setTitle(`
> \`#-\`  **Done Send all prices for __vote__** `)   
.setDescription(`

>  \`*1\` **__vote__ = __ 15k__**    

**=============================**

> **If You Want to Buy Type**

__(buy vote)__
         `)


        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
     
    )
  }
})


client.on('message', wanted => {
  if(wanted.content === "اوفر")

  wanted.channel.send("> \`#\` **برجاء منشن للشخص الذي كتب العرض و ارسال صوره العرض**") 
})


client.on('message', wanted => {
  if(wanted.content === "offer")

  wanted.channel.send("> \`#\` **Please tag the person who wrote the offer and send a picture of the offer**") 
})

///bot

client.on('message', wanted => {
  if(wanted.content === "buy bot")

  wanted.lineReplyNoMention(`> \`#\` **Please wait while the seller responds to you** 

**Mention** : ||<@&998330242030633032>||`) 
})


client.on('message', wanted => {
  if (wanted.content === "bot") {
  
    wanted.lineReplyNoMention(
      new Discord.MessageEmbed()
        .setColor(color)
      .setTitle("> \`#\` **Prices for : Bot** ")
       .setThumbnail(wanted.guild.iconURL())
        .setDescription(`
        
\`*1\` **__System Vip__ = (__125k<a:11Credit:997851299217416232>__)**

\`*2\` **__System__ = (__65k<a:11Credit:997851299217416232>__)**      
\`*3\` **__Giveaway__ = (__35k<a:11Credit:997851299217416232>__)**
      
\`*4\` **__Suggestion__ = (__30k<a:11Credit:997851299217416232>__)**

\`*5\` **__Welcome__ = (__25k<a:11Credit:997851299217416232>__)** 

\`*6\` **__Tax__ = (__20k<a:11Credit:997851299217416232>__)**  

\`*7\` **__Auto Line__ = (__15k<a:11Credit:997851299217416232>__)**   

\`*8\` **__Auto React__ = (__10k<a:11Credit:997851299217416232>__)** 
**=============================**

> **If You Want to Buy Type**

__(buy bot)__
         `)




        .setImage(line)

              .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()
     
    )
   
  }
});

////////////////////

///////////////dm
client.on('message', message => {
 if(message.content.startsWith(prefix+ "dm")) {
   if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
  const args = message.content.split(" ").slice(1).join(" ");
if (!args) return message.channel.send(`برجاء الكتابه الرساله الي هترسل اليه`)
const user = message.mentions.users.first();
if(!user) return message.channel.send (`برجاء المنشن علي الشخص`)
 user.send(
   new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor(color)
   .setDescription(`> \`#\` **From : ${message.author}**


> \`#\` **Dm Meesage :** ${args}
`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
 ).catch(error => message.channel.send(
   new Discord.MessaegEmbed()
   .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
   .setColor(color)
   .setDescription(`>  \`/\` **خاص الشخص الذي منشنتله الخاص بيه مقفول**
> \`#\` **Erorr User : <@${user.id}>**
> \`!\` **User Message : ${message.author}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    ))
    message.delete({timeout : 2000})
 message.channel.send(
   new Discord.MessageEmbed()
   .setColor(color)
   .setDescription(`> \`#\` **تم ارسال الرساله بنجاح** 
>  \`#\` **العضو المرسل اليه : <@${user.id}>**
> \`#\` **الشخص الي بعت الرساله : ${message.author}**`)
 )
  
 }
});

//unban

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.members.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
    .members.unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///come

client.on("message" , wanted => { if(wanted.content.startsWith(prefix + "come")) {


    const user = wanted.mentions.users.first()
    if(!user) return wanted.channel.send("**Mention a user**")
    const args = wanted.content.split(" ").slice(2).join(" ");
 
    user.send(`> ${user} { <#${wanted.channel.id}> } **تم طلبك هنا من فضلك come to Ticket**`)
    wanted.lineReplyNoMention(
      new Discord.MessageEmbed()
      .setColor(color)
      .setAuthor(wanted.author.username,wanted.author.avatarURL({dynamic: true}))

       .setAuthor(wanted.guild.name,wanted.guild.iconURL({dynamic: true}))
      
      .setDescription(`
      
      > **Done Send Privet to Seller ${user}**

      > **Please Wait Come Seller**
      `)
      .setTimestamp()
      .setThumbnail(wanted.guild.iconURL({dynamic: true}))
    )
  }
}); 

//profile

client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
  
      message.guild.fetchInvites().then(invites => {
  
        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );
        
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }
  
  
        var id = `https://api.probot.io/profile/${uus.id}`
        message.lineReplyNoMention(id)
      }
      );
    }
    });
//server banner
client.on('message', message => {
  if(message.content.startsWith(prefix + 's-banner')) {
     message.lineReply(
      new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
     .setTitle(message.guild.banner ? '**__Done Send Banner__** |' : 'السيرفر ليس لديه اي بانر | The server does not have any banner')
     .setImage(message.guild.bannerURL({ size: 1024 }) || null)
     .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
     
     )
     
  }
})
///clear

client.on("message", async message => {
    let command = message.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "clear") {
        
        if (!message.channel.guild) return message.reply(`** This Command For Servers Only**`);
        if (!message.member.hasPermission('MANAGE_GUILD'))
        return message.lineReply(
          new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
          .setColor(color)
          .setTitle("```❌ Dont Have a Permissions```")
          .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        )

        if (!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.lineReply(`> ** I don't have perms :x:**`);
        let args = message.content.split(" ").slice(1)
        let messagecount = parseInt(args);
        if (args > 100) return message.lineReply(
            new Discord.MessageEmbed()
            .setDescription(`\`\`\`js
i cant delete more than 100 messages 
\`\`\``)
        ).then(messages => messages.delete({ timeout: 5000 }))
        if (!messagecount) messagecount = '100';
        message.channel.messages.fetch({ limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
            message.lineReply(
                new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
                .setColor(color)
                .setDescription(`\`\`\`js
${msgs.size} messages cleared
\`\`\``)
            ).then(messages =>
                messages.delete({ timeout: 5000 }));
        })
    }
});


///say
client.on("message", msg => {
    let say1 = msg.content.split(" ").slice('1').join(" ")
  
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'say')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required!"ADMINISTRATOR"')
      msg.delete()
      msg.channel.send(say1)

    }
});



client.on("message", function(message){
  if(message.content.includes(client.user.id)){
   const embed = new Discord.MessageEmbed()
   .setColor(color)
     .setDescription(`> **Please Wait..**`)

message.lineReply(embed).then(m=>{
       setTimeout(function(){
         m.edit(
           new Discord.MessageEmbed()
           .setColor(color)
           .setImage(line)
           .setDescription(`**Welcome To __Server Name__** <a:j6:933169852145860638> 

**My Prefix Is : \`${prefix}\`** 

**Dev By : \`IMAX Team\`** `)
           .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
         )
       }, 6000)
     })
  }
})

////say embed
client.on("message", msg => {
    let moonlight = msg.content.split(" ").slice('1').join(" ")
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 's-embed')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('Permission required! "ADMINISTRATOR"')
      msg.delete()
msg.channel.send(
  new Discord.MessageEmbed()      
            .setColor(color)
            .setFooter(msg.guild.name,msg.guild.iconURL({dynamic: true}))
            
            .setDescription(moonlight)
            
              .setThumbnail(msg.guild.iconURL({ dynamic: true }))
              
            .setImage(line)

)

    }
});

// help // 

const but = require("discord-buttons")
but(client)
client.on("message", async msg => {
  if (msg.content === prefix + 'help') {
let argss = msg.content.split(" ").slice('').join(" ");
    const disbut = require('discord-buttons')
  
    let button = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("ADMIN COMMANDS")
    .setID("ADMIN")
    .setEmoji(`🤖`)
    let button2 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("PUBLIC COMMANDS")
    .setID("PUBLIC")
        .setEmoji(`🌍`)
   let button3 = new disbut.MessageButton()
    .setStyle('blurple')
    .setLabel("STORE COMMANDS")
    .setID('BOT')
        .setEmoji(`🛒`)

   let button5 = new disbut.MessageButton()
 .setStyle('blurple')
    .setLabel("MUSIC COMMANDS")
    .setID('PROTECTION')
    .setEmoji(`🎵`)
    let button6 = new disbut.MessageButton()
 .setStyle('red')
    .setLabel("DELETE MESSAGE")
    .setID('DELETE')
    .setEmoji(`❌`)
let nn = await msg.reply({embed :new Discord.MessageEmbed()
.setDescription(`> \`#*\` **\`Hey  : \` ** ${msg.author.username}

> \`*1\` **\`Please Click  Button to Show a Help\`** 

> \`*2\` **\`Thanks as Using Our Bot\`**

`)
.setThumbnail(msg.guild.iconURL({dynamic:true}))

.setAuthor(msg.guild.name,msg.guild.iconURL({dynamic:true}))

.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)

, buttons : [button,button2,button5,button3,button6]})

let collector = nn.createButtonCollector((button) => button.clicker.user.id === msg.author.id)

collector.on('collect', (b)=> {
  if (b.id === 'ADMIN') {
    nn.edit({embed: new Discord.MessageEmbed().setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)


.setTitle(`> **( __Admin  Commands__ )**`)

 .setDescription(`
 

> **${prefix}ban  : ( __ لتبنيد العضو __ )**


> **${prefix}unban  : ( __  لفك التبنيد عن عضو __ )**


> **${prefix}mute  : ( __ لعمل ميوت لي شخص __ )**


> **${prefix}unmute  : ( __ لفك الميوت __ )**


> **${prefix}lock  : ( __ لقفل الاتشنل__ )**


> **${prefix}unlock  : ( __ لفتح الاتشنل __ )**


> **${prefix}role  : ( __ لأعطاء شخص رول __ )**


> **${prefix}re-role  : ( __لأزاله الرول من شخص __ )**



> **${prefix}hide  : ( __ لاخفاء الاتشنل__ )**


> **${prefix}show  : ( __ لاظهار الاتشنل __ )**


> **${prefix}add-emoji : ( __ لاضافة ايموجي لي السرفر__ )**


> **${prefix}nick-name  : ( __ لتغير النيك نيم__ )**


> **${prefix}dm  : ( __ لبعت رساله لشخص ف البرايفت__ )**

> **${prefix}bc  : ( __ لبعت رساله للجميع ف البرايفت__ )**

> **${prefix}warn : ( __ لارسال ورن__ )**


> **${prefix}clear : ( __ لمسح الشات__ )**


> **${prefix}s-embed : ( __لعمل ساي في ايمبد__ )**


> **${prefix}say : ( __ لعمل ساي بدون ايمبد__ )**



> **${prefix}set-welcome : ( __لتحديد اتشنل الويلكم__ )**
 
 
 
 
 
 
 
 
 `),
 
 
 
  buttons : [button,button2,button5,button3,button6]})

  } else if (b.id === 'BOT') {
    nn.edit({embed :new Discord.MessageEmbed()
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
.setTitle(`> **( __Store  Commands__ )**`)
.setDescription(`
> **${prefix}come : (__لطلب شخص ال التيكت__)**



   **==========Important===========**


>  \`-/\` **\`جميع الاشياء بداخل التيكت\` ** 


**==========Finshied===========**
 

`)    

     , buttons : [button,button2,button5,button3,button6]})
} else if (b.id === 'PUBLIC') {
    nn.edit({embed :new Discord.MessageEmbed()
        .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setTitle(`> **( __Public  Commands__ )**`)
    .setDescription(`
> **${prefix}avatar  : ( __لاظهار الافتار الخاص بيك__ )**


> **${prefix}user  : ( __لاظهار معلومات عنك__ )**


> **${prefix}server  : ( __لاظهار معلومات عن السرفر__ )**


> **${prefix}tax  : ( __لاظهار الضريبه __ )**


> **${prefix}s-banner  : ( __لاظهار بنر السرفر __ )**
 

> **${prefix}ping  : ( __ لاظهار بنج البوت __ )**


> **${prefix}profile  : ( __لاظهار البروفايل الخاص بك __ )**


> **${prefix}boost  : ( __لاظهار بوستات السيرفر __ )**


> **${prefix}allbans   : ( __لاظهار كام واحد متبند في السيرفر __ )**
    `)
    
    .setColor(color)
    
     , buttons : [button,button2,button5,button3,button6]})
  } else if (b.id === 'PROTECTION') {
    nn.edit({embed :new Discord.MessageEmbed()
    
    
    .setThumbnail(msg.guild.iconURL({dynamic:true}))


.setColor(color)
.setFooter(msg.guild.name,msg.guild.iconURL({dynamic:true}))
.setImage(line)
    .setDescription(`
    
    
> **${prefix}play : ( __ Play a song or add it to the queue.__ )**


> **${prefix}stop : ( __ Pause the current song.__ )**


> **${prefix}pause : ( __ Pause the current song.__ )**


> **${prefix}resume : ( __ Resume music if it was paused.__ )**


> **${prefix}np : ( __ Display the currently played song.__ )**


> **${prefix}queue : ( __ Display each song title in queue.__ )**


    `)
    .setTitle(`> **( __Music  Commands__ )**`)
    
    ///لم يتم اضافه اوامر موسيقي !
    
    
    ,
      buttons : [button,button2,button5,button3,button6]}) 
} else if (b.id === 'DELETE') {
    nn.delete({timeout : 1000})
     s.react("❌");
}
})
  }
  })

//boost and level

client.on('message', mor3eb => {
  if(mor3eb.content.startsWith(prefix + "boost")){
    
 if(mor3eb.author.bot || !mor3eb.guild) return mor3eb.reply("this command for server only")
 
    
    let level = mor3eb.guild.premiumTier === 0 ? "No Level" : `${mor3eb.guild.premiumTier}`;
 
    let boost = mor3eb.guild.premiumSubscriptionCount;
    
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost of ${mor3eb.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor(color)
 
 mor3eb.channel.send(embed)
 
  }
});





//bans

client.on('message', message => {
  if (message.content.startsWith(prefix + "allbans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`<a:ss_3:942445534034141255> **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});






///الامر فارغ للتعديل عليه علي حسب الرغبه
///rules
      client.on('message', function(message) {
    if(message.content.startsWith(prefix + "rules")){
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
if (!message.guild.me.hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL({dynamic: true}))  
            .setColor(color)
            .setTitle(`> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**`)
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
      message.delete({timeout: 100});
message.channel.send(
  new Discord.MessageEmbed()
  .setColor(color)
.setThumbnail(message.guild.iconURL({dynamic: true}))  
        .setImage(line)
 
.setDescription(`قوانين 𝐈𝐌𝐀𝐗 𝐒𝐓𝐎𝐑𝐄 ⚠️ :
1 - ممنوع السب، الشتم، القذف، إلخ

2 - ممنوع طلب كريدت، نيترو، رتب، إلخ

3 - الاسلام هو الدين الاساسي للسيرفر في حال اي تلفض او اسأة على الاسلام سيتم و تبنيدك

4 - ممنوع السبام (تكرار الرسائل) مثل المنشن او الأوموجي و الكلام غير مفهوم و إلخ

5 - ممنوع تفتح تكت دعم فني اذا في الحالات الآتية: مشاكل انت و أصدقائك و تنحل بالخاص، الاستهبال، و تفتح تكت بدون ما تقول السبب، إلخ

6 - ممنوع نشر الأتي: صور محرمة، صور نساء

7 - ممنوع البيع و الشراء في الشات العام او اي روم اخر

8 - ممنوع النشر بجميع أنواعه في الخاص او في الشاتات الكتابية

9 - يرجى إحترام وظائف الرومات يعني لاتكتب أوامر في الشات و لا تدردش في روم الأوامر

10 - ممنوع تمنشن الاونرات او مساعد الاونر إلى في الحالات الطارئة

11 - في حال اشتريت فيزا وضلت معك اكثر من 5 دقائق ما رح تتعوض اذا ما اشتغلت

ملاحظة : القوانين قابلة للتغير باي وقت فا ارجو من الجميع ان يتفحصها كل يوم

@everyone `)
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
.setTimestamp()

).then(r=>{
   r.react("✅")
 })
 }})




///role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 'role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))

         if(!member.roles.cache.has(role.id)) {
        member.roles.add(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Added To__** **(${member.user.tag})**`))
        
            
         }
    }
});

///re-role
require('discord-reply')
client.on('message', async(message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
if(command === 're-role') {
      if(message.channel.type === 'dm') return;
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
            return message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('> \`#\` **انت لا تملك برمشن __\`ADMINISTRATOR\`__ في الرول الخاصه بيك**')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        );
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name.toLocaleLowerCase().includes(args[1]))|| message.guild.roles.cache.get(args[1])
        if(!args[0]) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **${prefix}role __(@user|user id)__ || __(role name |id)__**`))
        if(!role) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> \`\`\`Role Not Found!\`\`\` `))
        if(member.roles.cache.has(role.id)) {
         member.roles.remove(role.id)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setDescription(`> **The Role** **(${role.name})** **__Was Removed From__** **(${member.user.tag})**`))
        

        
            
         }
    }
});







///warn

client.on("message", message => {
  if (message.content.startsWith(prefix + "warn")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```You are not addicted```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      );
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("``` ❌ I Dont Have a Permissions```")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var user = message.mentions.users.first();
 
    if (!user)
      return message.lineReply(
        new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
        .setColor(color)
        .setTitle("```برجاء المنشن علي الشخص مع ذكر السبب | Please tag the person with the reason``` => warn (Mention) : (Reason) ")
        .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
      )
    var args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args) return message.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setTitle("```Please write the reason```")
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
    )
message.lineReply(
  new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
  .setColor(color)
  .setDescription(`**From : ${user.username}**

**Reason : ${args}**`)
)
let embed = new Discord.MessageEmbed() 
 .setTitle(`>️ You have Warned
 ${args}`)  

 .setColor(color)  
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()
 user.send(embed)    
 .then(m => {
  var owners = message.guild.owner
  let embed = new Discord.MessageEmbed() 
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setTitle('**__New warn __**')  
 .addField("`From`",`**The person who made the warning : ${message.author}**`)
 .addField("`To Me`",`**I took the warning : ${user}**`,true)
 .addField("`Message`",`**The message is : ${args}**`)
 .addField("`Time`",`**Time Message : ${message.createdAt.toLocaleString()}**`)
 
 .setColor(color)    
 .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
 .setTimestamp()


owners.send(embed);     
 }) 
  }
});
////remove warn
client.on("message" , message => {
  if(message.content.startsWith(prefix + "remove-warn")) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let user = message.mentions.users.first()
    if(!user) return message.lineReply("❌ | **Mention a user**")
    if(user.bot) return message.lineReply("🙄 | **Bots don't have warns**")
    if(user.id == message.member.id) return message.lineReply("🙄 | **You can't remove from yourself**")
    if(!db.has(`warns_${user.id}`)) return message.lineReply("❌ | **This user doesn't have any warns**")
    db.subtract(`warns_${user.id}` , 1)
    message.lineReply(`> **Done removing 1 warn for ${user}**`)
  }
});


//////////tag


client.on('message', async message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'tag') {
if(!message.member.hasPermission("MANAGE_NICKNAME")) {
return message.channel.send(`not enought perms`)
}

    let user = await message.mentions.members.first() || await message.guild.members.cache.get(args[0]);
    if(!user) return await message.lineReplyNoMention('__**User?**__');

    await user.setNickname(` IS ${user.user.username}`,'idk').then(async () => {
      await message.lineReplyNoMention('__**Done**__');
    }).catch(err => message.channel.send(`Erorr :${err}`));
  }
});


let sug = ['997607988057616404','',''];

let link = "https://cdn.discordapp.com/attachments/996008390763499682/1003654113969586186/89_31B543B-1.gif";

//=================================

   function generate(number) {
  let gg = [];
  
let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
     
  string = string.split("");
  for(let k = 0; k < number; k++) {
    gg.push(string[Math.floor(Math.random() * string.length)]);
  }
  return gg.join("");
}

let feedback = new Set()

client.on('message', function(message) {
        let args = message.content.split(",");
  if (message.author.bot) return;
if(sug.includes(message.channel.id)) {
    message.delete()
    let i = 0;
    let l = 0;
    let back = generate(5)
let go = generate(5)
    const embed = new Discord.MessageEmbed()     .setAuthor(`${message.author.tag}`, message.author.avatarURL({ dynamic: true }))
.setColor(`RANDOM`).setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`> **${args}**`)
.setTimestamp()
let attachm = message.attachments.first()
if (attachm) {
    embed.setImage(attachm.proxyURL)
}
    let buttonn = new disbut.MessageButton()
  .setStyle('green') //default: blurple
  .setEmoji('✔️') 
  .setLabel(`${i}`) //default: NO_LABEL_PROVIDED
  .setID(back)
  let button2 = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setEmoji('❌')
  .setLabel(`${l}`) //default: NO_LABEL_PROVIDED
  .setID(go)
message.channel.send(embed, {buttons: [buttonn, button2]}).then(msg => {
          let filter = (button) => button.clicker.user.id != client.user.id
        let collector = msg.createButtonCollector(filter) 
        collector.on('collect', async button => {
        await button.reply.defer();
        if (button.id === go) {
        if (feedback.has(`${button.clicker.user.id}${msg.id}`)) {
            return;
        } else {
        l+= 1
            let buttonn = new disbut.MessageButton()
  .setStyle('green') //default: blurple
  .setEmoji('✔️') 
  .setLabel(`${i}`) //default: NO_LABEL_PROVIDED
  .setID(back)
  let button2 = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setEmoji(`❌`)
  .setLabel(`${l}`) //default: NO_LABEL_PROVIDED
  .setID(go)
         msg.edit(embed,{buttons: [buttonn, button2]})
         feedback.add(`${button.clicker.user.id}${msg.id}`)
        }
        }
        if (button.id === back) {
                    if (feedback.has(`${button.clicker.user.id}${msg.id}`)) {
            return;
        } else {
                     i+= 1 
                let buttonn = new disbut.MessageButton()
  .setStyle('green') //default: blurple
  .setEmoji('✔️') 
  .setLabel(`${i}`) //default: NO_LABEL_PROVIDED
  .setID(back)
  let button2 = new disbut.MessageButton()
  .setStyle('red') //default: blurple
  .setEmoji('❌')
  .setLabel(`${l}`) //default: NO_LABEL_PROVIDED
  .setID(go)
         msg.edit(embed,{buttons: [buttonn, button2]})
                  feedback.add(`${button.clicker.user.id}${msg.id}`)
        }
        }      
    })
 message.channel.send({files: [link]});    })
message.author.send(`Thank you for <#${message.channel.id}>`).catch(console.error) 
  }
}); 



////welcome


client.on("message", mor3eb => {
  let wprefix = prefix
    if (mor3eb.content.startsWith(wprefix + "set-welcome")) {
       if (!mor3eb.guild.member(mor3eb.author).hasPermission('ADMINISTRATOR'))
            return mor3eb.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('```انت لست من الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
            
        );
if (!mor3eb.guild.me.hasPermission('ADMINISTRATOR'))
            return mor3eb.lineReply(
            new Discord.MessageEmbed()
            .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
            .setColor(color)
            .setTitle('```ليس معاك رول الادمن-❌```')
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
        ); {
        let wmochakis = mor3eb.mentions.channels.first()
    
    if(!wmochakis) { return mor3eb.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setDescription(`**برجاء المنشن علي الاتشنل الخاصه بترحيب**`)
      .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("〽️")///react here
    })
    }
    
    
    db.set(`welcomechannel_${mor3eb.guild.id}`, wmochakis.id)
    
    mor3eb.lineReply(
      new Discord.MessageEmbed()
      .setAuthor(mor3eb.author.tag, mor3eb.author.avatarURL({ dynamic: true }))
      .setColor(color)
      .setDescription(`> **The channel has been set successfully**
> **Channels : ${wmochakis}**`)
.setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
  .setTimestamp()
    ).then(r=> {
      r.react("〽️")////react here
    })
    }
    }
  })

client.on("guildMemberAdd", (memberadd,type, invite) => {
  let channelget = db.get(`welcomechannel_${memberadd.guild.id}`);
  let messagechannel = client.channels.cache.get(channelget);
  if(channelget === null) { 
    return;
  }
  messagechannel.send(
    new Discord.MessageEmbed()
    .setColor(color)
  .setThumbnail(memberadd.user.avatarURL({ dynamic: true }))

    .setFooter(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))

 .setAuthor(memberadd.user.username, memberadd.user.avatarURL({ dynamic: true }))
  .setTimestamp()

    .setDescription(`**New Member ** 

> **<a:90835827866243823686:1001192955001974825>Welcome To Member**

> **<a:ls_noti:1003668830951841896> Welcome To Server : \`${memberadd.guild.name}\`**

> **<a:976086418973663272:997851447410565120> Welcome To Member: ${memberadd.user}**

> **<:As_shield:1001195822752468992> Member ID : \`${memberadd.id}\`**

> **<a:AS_prove:1001195808244383874> You are MemberCount : \`${memberadd.guild.memberCount}\`**

> **<a:979767867937550346:997851484819558430> Order Here:<#995655319684399174>**`)
.setImage(line)
  ).then(s=>{
  s.react("🌐");///react here
    
  })
})


client.on("message", message => {
  if (message.content.startsWith(prefix + "bc")) {
    let c = "0";
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`> ** __You Don't Have Permisssions__**`);

    message.delete();
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let noargs = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(`> ** __Pls Type Your Broadcast Message__**`)
.setColor(color)
      .setTimestamp()
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    if (!args) return message.channel.send(message.author, noargs);
    message.guild.members.cache.forEach(m => {
        m.send(`${args}\n ${m}`).then(c++).catch(err => {
      if(err) {
        console.log(err)
      }
      });
      });
    let embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setDescription(
        `> ** __Done Send Your Broadcast Message To ${message.guild.memberCount} Members__ **`
      )
      .setTimestamp()
.setColor(color)
      .setFooter(
        message.author.username,
        message.author.displayAvatarURL({ dynamic: true })
      );
    message.channel
      .send(`> **__Send Your Message Pls Wait__ **`)
      .then(me => {
        me.edit(message.author, embed);
      });
  }

})






client.on("message", async message =>{
 if(message.content === prefix + "wrhgwhwh"){
 const embed = new Discord.MessageEmbed()
.setAuthor("Commands:",client.user.avatarURL())
.setThumbnail(message.author.avatarURL())
.setColor("BLUE")
.setDescription(`

\`${prefix}fast/${prefix}أسرع\`:
- لعبة السرعة

\`${prefix}fkk/${prefix}فكك\`:
- لعبة تفكيك الكلمات

\`${prefix}puzzle/${prefix}لغز\`:
- لعبة الالغاز

\`${prefix}gm3/${prefix}جمع\`:
- لعبة جمع الحروف

\`${prefix}flags/${prefix}اعلام\`:
- لعبة اعلام الدول

\`${prefix}logo/${prefix}شعار\`:
- لعبة شعارات البرامج

\`${prefix}translate/${prefix}ترجمة\`:
- لعبة ترجمة الكلمات

\`${prefix}capitals/${prefix}عواصم\`:
- لعبة عواصم الدول

\`${prefix}famous/${prefix}مشاهير\`:
- لعبة تخمين المشاهير

`)
.setFooter(`Request By ${message.author.tag}`)
 message.channel.send(embed)
 } 
    

if(message.content === prefix + "fast" || message.content === prefix + "أسرع"){
  const f = [
    "لودو",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ]
  let fast = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${f[fast]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(f[fast]);
message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED") 
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});    
}

if(message.content === prefix + "fkk" || message.content === prefix + "فكك"){
  const f = [
    "لودو",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ]
  const fk = [
    "ل و د و",
    "ق س ط ن ط ي ن ة",
    "ح ب ي ب ي و ا ل ل ه",
    "ص ر ا ع",
    "م ش ر و ع",
    "م ث ل ث",
    "ر ف ر ف",
    "ا ل ش ع ر",
    "خ ن ق",
    "ل ق ب",
    "إ خ ف ا ء",
    "ب ا ئ ع",
    "ث ؤ ل و ل",
    "ف ي ن و س",
    "س ل ا ل ة",
    "ب ر م ي ل",
    "ح ب",
    "م ع د ن",
    "ت م ا م",
    "ك ب س و ل ة",
    "ا ل خ ي ل"
  ]
  
  let fkk = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${f[fkk]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(fk[fkk]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "gm3" || message.content === prefix + "جمع"){
 
  const g = [
    "ل و د و",
    "ق س ط ن ط ي ن ة",
    "ح ب ي ب ي و ا ل ل ه",
    "ص ر ا ع",
    "م ش ر و ع",
    "م ث ل ث",
    "ر ف ر ف",
    "ا ل ش ع ر",
    "خ ن ق",
    "ل ق ب",
    "إ خ ف ا ء",
    "ب ا ئ ع",
    "ث ؤ ل و ل",
    "ف ي ن و س",
    "س ل ا ل ة",
    "ب ر م ي ل",
    "ح ب",
    "م ع د ن",
    "ت م ا م",
    "ك ب س و ل ة",
    "ا ل خ ي ل"
  ]
  const gm = [
    "لودو",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ] 
  
  let gm3 = Math.floor(Math.random() * g.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${g[gm3]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(gm[gm3]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});

}

if(message.content === prefix + "flags" || message.content === prefix + "اعلام"){
  const a = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/560px-Flag_of_Iraq.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/560px-Flag_of_Algeria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/560px-Flag_of_Syria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/560px-Flag_of_Lebanon.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/560px-Flag_of_Egypt.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/560px-Flag_of_the_United_Arab_Emirates.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/560px-Flag_of_the_People%27s_Republic_of_China.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/560px-Flag_of_France.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/560px-Flag_of_Germany.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/560px-Flag_of_Russia.svg.png"
  
  ]
  const a3 = [
  "العراق", 
    "الجزائر", 
    "سوريا", 
    "اليمن", 
    "لبنان", 
    "تركيا", 
    "مصر", 
    "الإمارات", 
    "الصين", 
    "فرنسا", 
    "ألمانيا", 
    "روسيا"
  
  ]
  
  let a3l = Math.floor(Math.random() * a.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(a[a3l])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(a3[a3l]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "puzzle" || message.content === prefix + "لغز"){
  const p = [
  "شيء موجود في السماء إذا أضفت إليه حرفا أصبح في الأرض؟", 
  "ما هو الشيء الذي يوصلك من بيتك إلى عملك دون أن يتحرك؟", 
  "تاجر من التجار إذا اقتلعنا عينه طار. فمن هو؟", 
  "ما هو الشيء الذي ترميه كلما احتجت إليه؟", 
  "يسير بلا رجلين و لا يدخل إلا بالأذنين ما هو؟", 
  "ما هو الشي الذي يكتب و لا يقر؟", 
  "من هو الحيوان الذي يحك إذنه بأنفه؟", 
  "ما هو الشي الذي كلما كثر لدينا غلا و كلما قل رخص؟", 
  "ما هي التي تأكل و لا تشبع؟", 
  "ما هو الشي الذي كلما أخذت منه يكبر ؟", 
  "ما هو الشي الذي يوجد في وسط باريس؟", 
  "ما هو البيت الذي ليس فيه أبواب و لا نوافذ؟", 
  "أين يقع البحر الذي لا يوجد به ماء؟", 
  "ماهو الشي الذي ينبض بلا قلب؟", 
  "أخت خالك و ليست خالتك من تكون ؟"
  ]
  const pu = [
   "نجم", 
  "الطريق", 
  "عطار", 
  "شبكة الصيد", 
  "الصوت", 
  "القلم", 
  "الفيل", 
  "العقل", 
  "النار", 
  "الحفرة", 
  "راء", 
  "بيت الشعر", 
  "في الخريطة", 
  "الساعه", 
  "أمك"
  ]
  
  let puz = Math.floor(Math.random() * p.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${p[puz]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(pu[puz]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "capitals" || message.content === prefix + "عواصم"){
  const c = [
   "تونس", 
  "سنغافورة", 
  "الجزائر", 
  "أمريكا", 
  "الكويت", 
  "البحرين", 
  "الإمارات", 
  "قطر", 
  "ايطاليا", 
  "السويد", 
  "اليابان", 
  "مصر", 
  "ألمانيا", 
  "فرنسا", 
  "العراق", 
  "الصين", 
  "المغرب"
  
  ]
  const ca = [
    "تونس", 
  "سنغافورة", 
  "الجزائر", 
  "واشنطن", 
  "الكويت", 
  "المنامة", 
  "ابو ظبي", 
  "الدوحة", 
  "روما", 
  "ستوكهولم", 
  "طوكيو", 
  "القاهرة", 
  "برلين", 
  "باريس", 
  "بغداد", 
  "بكين", 
  "الرباط"
  ]
  
  let cap = Math.floor(Math.random() * c.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${c[cap]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(ca[cap]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
})
}

if(message.content === prefix + "logo" || message.content === prefix + "شعار"){
  const l = [
  "https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png", 
  "https://wiki-signup.com/wp-content/uploads/2019/06/viber-image.jpg", 
  "https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/600px-Facebook_Messenger_logo_2020.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
  ]
  const lo = [
  "ديسكورد", 
  "فيسبوك", 
  "واتساب", 
  "فايبر", 
  "ريدت", 
  "ماسنجر", 
  "انستا"
  ]
  
  let log = Math.floor(Math.random() * l.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(l[log])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(lo[log]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "famous" || message.content === prefix + "مشاهير"){
  const f = [
  "https://taqeemi.com/storage/subjects/ECmzBt8dE1h5FasVAmwb.jpeg", 
  "https://etbilarabi.com/sites/default/files/styles/article_landing/public/2020-04/image0%20%2855%29.jpeg?itok=BFcsmLUu", 
  "https://pbs.twimg.com/profile_images/1207230360507047936/PVEIcm8X_400x400.jpg", 
  "https://pbs.twimg.com/media/DpON0q5W0AEJjPQ.jpg", 
  "https://pm1.narvii.com/6647/05263d18126bf5f311552429e55802f10090907d_hq.jpg"
  ]
  const fa = [
  "ابو فلة", 
  "بندريتا", 
  "سيد", 
  "اوسمز", 
  "علي المرجاني"
  ]
  
  let fam = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(f[fam])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(fa[fam]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}
if(message.content === prefix + "translate" || message.content === prefix + "ترجمة"){
  const t = [
  "Surgeon", 
  "Father", 
  "Funny", 
  "Scientist", 
  "Programmer", 
  "Welcome", 
  "Egg", 
  "Fire", 
  "ice", 
  "Vest", 
  "Delighted", 
  "Boring", 
  "Accountant", 
  "Carpenter", 
  "Eye", 
  "Wait", 
  "Ear"
  ]
  const tr = [
   "جراح", 
  "والد", 
  "مضحك", 
  "عالم", 
  "مبرمج", 
  "اهلا بك", 
  "بيض", 
  "نار", 
  "جليد", 
  "سترة", 
  "مسرور", 
  "ممل", 
  "محاسب", 
  "نجار", 
  "عين", 
  "أنتظر", 
  "أذن"
  
  ]
  
  let tra = Math.floor(Math.random() * t.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${t[tra]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(tr[tra]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
})
}
})


client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "ميمز")){
    let reply =[
      "https://images-ext-2.discordapp.net/external/z5Yec6I9KA1-nknqcvRmTseaR3HoBZzr5ta09PSkUC0/https/i.redd.it/3wiajddpsn271.jpg?width=581&height=621"
,"https://images-ext-1.discordapp.net/external/DKyf1S8AFC865m5IwN4Xp19jG4sHOqW7WpIsToha0QE/https/i.redd.it/6g827ztxpag61.jpg?width=621&height=621"
,"https://images-ext-2.discordapp.net/external/0BBsOypQ1T44GdN6bc5dHeg0sb8vxYP24qqsezua3vM/https/i.redd.it/27dg8cs9c2661.jpg?width=620&height=621"
,"https://images-ext-2.discordapp.net/external/8bheXGmkFXGOwuiYAng-dS3mllBkEA_L-gZsq_5oQ-Y/https/i.redd.it/709yacenst461.jpg"
,"https://images-ext-2.discordapp.net/external/NtbP0TKB7wsQYK5thV9ZIBcq5plCEA40MKDGcXYV1uU/https/i.redd.it/h78byu164u371.jpg?width=621&height=621"
,"https://images-ext-2.discordapp.net/external/ZCRGeSj9S8VIdj81DGMArkFJOGIrusiYVncBsljxtpM/https/i.redd.it/24yzaoymllg71.jpg?width=637&height=621"
,"https://images-ext-1.discordapp.net/external/Sd4hvuiOxhwLeAvvpieMiWyeCmy38qk7qmjsFL59wb0/https/i.redd.it/vf8ksffgbcc61.jpg?width=621&height=621"
,"https://images-ext-2.discordapp.net/external/myjlhHzBVQdaAztDeyytTiMu9iywjp11P8b-rV_t1rQ/https/i.redd.it/25fp9d4wu7461.jpg?width=516&height=621"
,"https://images-ext-2.discordapp.net/external/sqsFDfBC-AKjb5wGSzHx4qxGbJF3ZuWvt2uUBRK5QVk/https/i.redd.it/gzzlnmriko761.jpg?width=621&height=621"
,"https://images-ext-2.discordapp.net/external/B7HoR6W6nF-pfCuIg8HG3YUgoxhLHSDf5aSXWMMaJUs/https/i.redd.it/rocag83lody61.jpg?width=349&height=620"
,"https://images-ext-1.discordapp.net/external/DFQacSj83gnbdFvHVkrNuiwz3ABwtF7iV7e6dSUzm6g/https/i.redd.it/pan46ixztx461.jpg?width=483&height=621"
,"https://images-ext-1.discordapp.net/external/AmvhrhJIaeSqdkf-YQoTyAiY4DQZ8KjZFxOnNbwd8lI/https/i.redd.it/9vw6ykgc43861.jpg?width=511&height=621"
,"https://images-ext-1.discordapp.net/external/H04uhCY6L-0RD-sa-oNFnGRdJB8rKo1ZwlUmU1BiJ28/https/i.redd.it/qp32yy1afpa61.jpg?width=622&height=621"
,"https://images-ext-1.discordapp.net/external/pgSUENT9Zg9HDEl3-1642zdE_tpF6PS04eGYYEEGxk0/https/i.redd.it/8fi2ch41cts61.jpg?width=601&height=621"
,"https://images-ext-1.discordapp.net/external/Jb4i7wMHzkG2aOC6dLZs17-Tode4SCCbyJLABmLyXr4/https/i.redd.it/h4j5omekrz161.jpg?width=860&height=621"
,"https://images-ext-2.discordapp.net/external/SK-poNU5Z7jZ2JU3SlFSievzapfAR2IrxAKd24QSgXs/https/i.redd.it/gx5nykyiubc61.jpg?width=491&height=621"
,"https://images-ext-1.discordapp.net/external/d-yLZoo9Ik54qRnXJTbe9e90p-pvL1p5t72VwuFiUDI/https/i.redd.it/aygcpdddqsu61.jpg?width=552&height=621"
,"https://images-ext-2.discordapp.net/external/xp1PkpevqmzFL4H9xtwkNEUqYht08f9WYMYL68q0Lf4/https/i.redd.it/b24j6y4wn4c61.jpg?width=621&height=621"
,"https://images-ext-1.discordapp.net/external/z6rLPkPWf-RuIVJN86RzPeB7yCBCb5eVgl3UaslJ0fY/https/i.redd.it/g92c7dewn0261.jpg?width=621&height=621"
,"https://images-ext-2.discordapp.net/external/EXlammd9T2jQ6kUWSiqxgXFo-C1xEo6R7nwwY58fAoE/https/i.redd.it/h93f90jcmhl61.jpg?width=632&height=621"
,"https://images-ext-1.discordapp.net/external/F_MHeqADKGElCljI58QSvuc1ZJjQDnZTA-SU3lSykUg/https/i.redd.it/qj5kmg8brp861.jpg?width=621&height=621"
,"https://images-ext-2.discordapp.net/external/ZCRGeSj9S8VIdj81DGMArkFJOGIrusiYVncBsljxtpM/https/i.redd.it/24yzaoymllg71.jpg?width=637&height=621"
,"https://cdn.memes.com/up/32366011574356608/v/1658332960093.mov"
,"https://images-ext-1.discordapp.net/external/8aTYa7cwIn6cF3zUMbjDCBnvRGwkcjPmoPnB-Ca07SA/https/i.redd.it/rfq86dg7hpa61.png"
,"https://cdn.memes.com/up/18226541617246309/v/1658284547563.mp4"
,"https://images-ext-1.discordapp.net/external/x8X0fSz-fDbdO23ihfZKTQMmWs6D6Xgj38owXpNQz-w/https/i.redd.it/gplsggudynd61.jpg?width=621&height=621"];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
})





///token

client.login(process.env.TOKEN)
///IMAX  team up by LUDO






////If You Have Any Problem Go To Support Server 

////لو عندك اي مشكله ادخل سيرفر السابورت 

/// https://discord.gg/EcGQQj3bxu ///


///////tickets

client.on("channelCreate", wanted => {
  if(wanted.parentID == "1002210456049553538") {
    setTimeout(() => {
      wanted.send(`||@everyone||`,
        new Discord.MessageEmbed()
           .setColor(color)

 .setImage(line)
        .setTimestamp()
                 .setThumbnail(wanted.guild.iconURL({dynamic: true}))
  .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
   
 .setDescription(`
الللغة العربية 

                              اسمك

                               سنك

                    تدفع 100 الف ضمان 

               اسماء السيرڤرات التي تعمل بها

         قم بارسال 20 فيدباك من سيرڤرات مختلفه


                 اسماء الرولات التي تقدم عليها  

                 برجاء املاء استماره وبالتوفيق   

                   تحويل فقط ل IS RAMI

English Language

1- What is your Name:

2- How old are you:

3- Tell us the names of the servers that you are working in:

4- Send 20 Feedbacks

5- What are you applying for:

fill out the template and good luck. Yred




 
 `)
      )
    }, 2000);
  }
}); 

client.on("message", message => {
  if (message.content == ("فيدباك") || message.content === "فيدباك") 
  {
message.lineReply(`
<a:red_crown:1003717741582233751> شكرا لاختيارك IMAX STORE <a:983154473667035207:997851497373126746>


<a:ls_noti:1003668830951841896> <#995655319684399174> نتمني أن تكون الخدمه اعجبتك ، للمزيد من الطلبات<a:ls_noti:1003668830951841896>


<a:red_crown:1003717741582233751>Thanks For Choosin IMAX STORE <a:983154473667035207:997851497373126746>

<a:ls_noti:1003668830951841896> We hope you like the service , for more orders<a:983154473667035207:997851497373126746>:<#995655319684399174>


رايك يهمنا ، يرجي ذكر منشن للبائع ${message.author.username} ورأيك في خدمته و في الستور <a:983154473667035207:997851497373126746>


Your opinion matters , Please mention the name of the person ${message.author.username}  and write your opinion about the service:



Here :
<#998650728438571140>
<#998650728438571140>
`)

  }
})















///re
client.on("message", message => {
  if (message.content == ("re") || message.content === "re") 
  {
message.lineReply(`$rename by ${message.author.username}`)


  }
})

client.on("message", message => {
  if (message.content == ("Re") || message.content === "Re") 
  {
message.lineReply(`$rename by ${message.author.username}`)


  }
})

client.on("message", message => {
  if (message.content == ("RE") || message.content === "RE") 
  {
message.lineReply(`$rename by ${message.author.username}`)


  }
})


client.on("message", message => {
  if (message.content == ("de") || message.content === "de") 
  {
message.lineReply(`$delete`)

  }
})

client.on("message", message => {
  if (message.content == ("ret") || message.content === "ret") 
  {
message.lineReply(`$rename need new seller`)

  }
})

client.on("message", message => {
  if (message.content == ("buy visa") || message.content === "buy visa") 
  {
message.lineReply(`$rename need visa `)

  }
})

client.on("message", message => {
  if (message.content == ("buy xbox") || message.content === "buy xbox") 
  {
message.lineReply(`$rename need xbox`)

  }
})

client.on("message", message => {
  if (message.content == ("buy nitro") || message.content === "buy nitro") 
  {
message.lineReply(`$rename need nitro`)

  }
})

client.on("message", message => {
  if (message.content == ("buy netflix") || message.content === "buy netflix") 
  {
message.lineReply(`$rename need netflix`)

  }
})

client.on("message", message => {
  if (message.content == ("buy bot") || message.content === "buy bot") 
  {
message.lineReply(`$rename need bot`)

  }
})

client.on("message", message => {
  if (message.content == ("buy design") || message.content === "buy design") 
  {
message.lineReply(`$rename need design`)

  }
})

client.on("message", message => {
  if (message.content == ("buy boost") || message.content === "buy boost") 
  {
message.lineReply(`$rename need boost`)

  }
})

client.on("message", message => {
  if (message.content == ("buy vote") || message.content === "buy vote") 
  {
message.lineReply(`$rename need vote`)

  }
})

client.on("message", message => {
  if (message.content == ("buy tiktok") || message.content === "buy tiktok") 
  {
message.lineReply(`$rename need tiktok `)

  }
})

client.on("message", message => {
  if (message.content == ("buy insta") || message.content === "buy insta") 
  {
message.lineReply(`$rename need insta `)

  }
})