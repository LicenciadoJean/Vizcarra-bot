client.on("message", async message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

///////////////////Say///////////////////////
        if (command === "say") {
          let say = args.join(" ");
          message.channel.send(say, { disableMentions: "everyone" });
          message.delete();
        }
///////////////////Jumbo///////////////////////
if (command === "jumbo"){
if (!args [0])
return message.channel.send("nose :neutral_face: :ok_hand:")
let emoji = message.guild.emojis.cache.find(
x => x.name === args [0] .split(":")[1]
);  
if (!emoji) return message.reply("No hay :neutral_face: :ok_hand:");
message.channel.send(emoji.url);

};

if (command === "icon") {
  let icono = message.guild.iconURL({ size: 2048, dynamic: true });

  message.channel.send(`El icono de : *${message.guild.name}*`)
  message.channel.send(icono)

}

if (command === "avatar") {
   
  let userm = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
      if (!userm) {
          message.channel.send('El Avatar de :',`${message.author.username}`  )
         let sasy = message.author.displayAvatarURL({
              format: "png",
              dynamic: true,
              size: 1024
            })
  message.channel.send(sasy)
      } else {
  
           message.channel.send( `El Avatar de :${userm.username}`)
          message.channel.send(
            userm.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })
          )
      }
    }



    if(command === "snipe"){
      client.snipes.set(message.channel.id, {
        content: message.content,
        delete: message.author,
        canal: message.channel
      });

      const channel = message.mentions.channels.first() || message.channel;
     
     
     const msg = client.snipes.get(channel.id);
         if (!msg){
        message.channel.send("No ahi :pensive:")
            .then(m => m.delete({timeout: 5000}));
       }else{
     
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Mensaje Escrito de ${msg.delete.tag}`, msg.delete.displayAvatarURL())
        .addField("Canal", `<#${msg.canal.id}>`)
        .setDescription(`${msg.content}`)
      .setColor("RANDOM")
      .setFooter(
        `Solicitud de ${message.member.displayName}`,
        message.author.displayAvatarURL({ dynamic: true, format: "png" })
      )
     .setTimestamp() 
      .setImage("https://media.discordapp.net/attachments/801610900775108633/806269162283466792/tenor.gif?width=448&height=229")
      .setThumbnail(message.author.avatarURL)

      message.channel.send(embed);
     }
    }
     if (command === "verificacion"){
      const embed = new Discord.MessageEmbed()
      .setAuthor('~~💌~~ Realizado por Jean♡ᵛᴸ#9898 ','https://images-ext-2.discordapp.net/external/SBnMKxfMFYnxEnsOD0_D7Xt9C8-JRE2hl9lfh0ktfIo/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/778274030104084480/8ae9f47c214cc6bebf497816c9147be8.png?width=244&height=244')
      .setThumbnail(client.user.avatarURL({ size: 2048 }))
            .setTitle(" ･ﾟ Verificacion Vizcarra Land ˚ღﾟ:ﾟ")
      .setTimestamp()
      .setDescription("ʚ<:pinkheart:779427470838333450> ・゛Reacciona para obtener acceso a los demas canales de texto si tienes alguna duda contactate con el <@&783138489200803860> !!! ・₊۰")
      .setFooter('Al quitar la reaccion no estaras verificado','https://media.discordapp.net/attachments/773185100221382686/806549569856602172/etnbwfzxqaawjho-1584983347.png?width=498&height=498')
      .setImage("https://media.discordapp.net/attachments/773185100221382686/806288241215930418/tenor_1.gif?width=448&height=238")
    
      message.channel.send(embed).then(m => {
        m.react('<:uwuoki:778376081145200720>')
      });

    }
    if (command === "ev"){
      let limit = 1950;
      try {
        let code = args.join(" ");
        let evalued = eval(code);
        if (typeof evalued !== "string")
          evalued = require("util").inspect(evalued);
        let txt = "" + evalued;
  
        if (txt.length > limit) {
          if (!["778274030104084480"].includes(message.author.id))
            return message.channel.send(
              "<a:JAJJJJAAJAA:796123576394711102> Solo <@!778274030104084480> puede usar esto!!!"
            );
  
          let embed = new Discord.MessageEmbed()
            message.channel.send(`\`\`\`js\n${args}\n\`\`\``)
          message.channel.send(
              `\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``
            )
  
        } else {
        }
  
          message.channel.send(`\`\`\`js\n${args}\n\`\`\``)
          message.channel.send(`\`\`\`js\n ${txt}\n\`\`\``)
      } catch (err) {
  
          message.channel.send(`\`\`\`js\n${args}\n\`\`\``)
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``)
  
      }
    }
    if (command === "re") { 
      if(message.author.bot) return;
      var ids = ['778274030104084480']
      var author = `${message.author}`
      const exec = require('child_process').execSync 
        
      if(!ids.some(ids => message.author.id == ids)) return message.channel.send(author+' El yin namas');
        console.log(`Reinicio completo`)
message.channel.send(' <a:pepecat:774429721509363742> Reiniciando. . . . ').then(() => {
          exec('pm2 restart {poto}');
        });
    }
    const AntiSpam = require('discord-anti-spam')
    const antiSpam = new AntiSpam({
      warnThreshold: 5, 
    
      kickThreshold: 23, 
    
      banThreshold: 50, 
    
      maxInterval: 2000, 
    
      maxDuplicatesInterval: 60000,
    
      warnMessage: '{@user}, Acabas de ser advertido deja el spam o aplicare medidas de administrador', 
    
      kickMessage: '**{user_tag}** ha sido expulsado por enviar spam', 
    
      banMessage: '**{user_tag}** ha sido baneado por enviar spam', 
    
      errorMessages: false, 
      
      maxDuplicatesWarning: 5, 
    
      maxDuplicatesKick: 10, 
    
      maxDuplicatesBan: 15, 
      
      deleteMessagesAfterBanForPastDays: 1, 
      
      exemptPermissions: ['ADMINISTRATOR', 'BAN_MEMBERS', 'KICK_MEMBERS'], 
    
      ignoreBots: true, 
    
      verbose: true 
    
    })
    
    
    client.on('message', (message) => { 
      antiSpam.message(message) 
    })
});//Marca Final del evento
client.snipes = new Map(); 
client.on("messageDelete", (message) => {
  client.snipes.set(message.channel.id, {
    content: message.content,
    delete: message.author,
    canal: message.channel
  });
});
client.on("message", message => {
    if (message.content.startsWith(`<@!${client.user.id}>`)) {
      message.channel.send(
        "Usa `vl!help` si algo falla preguntale a <@778274030104084480>"
      )
      
message.channel.send(" https://media.discordapp.net/attachments/794711052427722763/800461168224895016/emote.gif ");
    }
  });

  client.on("message", (message) => {
    if (message.content.startsWith("bai")) {
      message.channel.send("https://cdn.discordapp.com/attachments/801151212518244403/801152020898644020/Hasta_la_proxima.mp4");
    }
  });
  client.on("message", (message) => {
    if (message.content.startsWith("*ingresa epicamente al chat*")) {
      message.channel.send("https://cdn.discordapp.com/attachments/795772733065527336/801153264048799774/y2mate.com_-_Entra_epicamente_al_chat_480p.mp4");
    }
  });
  client.on("message", (message) => {
    if (message.content.startsWith("ping")) {
      message.channel.send("https://cdn.discordapp.com/attachments/783378205024845904/801149813159886858/Sansv2.mp4      ");
    }
  });
  client.on("message",(message) =>{ 
    if (message.content.startsWith("dance"))
    {
      message.channel.send(" https://cdn.discordapp.com/attachments/783378205024845904/801233473021018152/y2mate.com_-_Left_4_DeadMONSTER_HIGH_MMD_1080p.mp4 ")
    }
  }),
  client.on("message",(message) =>{
    if (message.content.startsWith("chat muerto"))
    {
      message.channel.send(" https://cdn.discordapp.com/attachments/768591359832490095/801555583085314098/y2mate.com_-_Los_Cuates_de_Sinaloa_Negro_Y_Azul_From_Breaking_Bad_360p.mp4")
    }
  }),


  { crearDB } = require("megadb"), db = new crearDB("sugerencias")
  module.exports = async (client, message, args) => {
    const sg = args.join(" "), // Aclaración del argumento de sugerencia
    rCa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", // Usamos los caracteres que se eligirán de forma aleatoria
    alea = rCa.charAt(Math.floor(Math.random() * rCa.length)), // Usamos la función Math.random para aleatorizar los caracteres
    au = message.author, // Definición opcional de un usuario, en mi caso lo uso para no provocar errores
    ca = client.channels.cache.get(c.suggid) // Definición opcional de un canal, en mi caso lo uso para no provocar errores
    
      if (!sg) { message.channel.send(new MessageEmbed().setDescription("Debes de enviar tu sugerencia")) } // Si no hay sugerencia, que envíe el mensaje, si hay sugerencia, que envíe lo que toma la condición 'else'
    
      else { message.channel.send(new MessageEmbed()
          .setDescription(`${message.member}, tu sugerencia se ha enviado al canal`)) // Parte opcional si quieres avisar que se ha enviado la sugerencia al canal
    
    // Envías la sugerencia al canal definido
      ca.send(new MessageEmbed().addField("Sugerente", au)
          .addField("Estado", "Pendiente").addField("Sugerencia:", sg)).then(async function(message) { await message.react(variableReacciónqueiráPrimera), await message.react(variableReacciónqueiráSegunda), 
      await db.set(alea, { autor: au.id, id: ca.lastMessageID, sug: sg }, ".") })}
  }
  command(  
    const name = message.content.replace('!chanel','' )
    
    message.guild.channels
     .create(name,
       { type : 'text', 
      })
    .then((channel) => {
    console.log(channel)
    })
    
  
  
  })


client.login()
