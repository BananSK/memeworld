const Discord = require('discord.js');
const client= new Discord.Client();
const prefix = ","; //PREFIX
console.log('Loadin....');
console.log('   ');

client.on('ready', () => {
    console.log('Bot laoded.');
    client.user.setGame('Banan is Coding me!');
    client.user.setStatus('dnd');  //status : online : green , idle : orange , dnd : red
  }
);

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

// client.on('',''=>{});

client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.channels.get('418156939441340416').sendMessage(`Please welcome ${member.user.username} to the server!`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.channels.get('418156939441340416').sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
});


  if (message.content.startsWith(prefix + 'ping')) {
    message.channel.sendMessage(`Pong! \`${Date.now() - message.createdTimestamp} ms\``);
  } else

  if (message.content.startsWith(prefix + 'send')) {
    client.channels.get('245491978601627648').sendMessage('Hello to the second channel!');
  } else

  if (message.content.startsWith(prefix + 'setgame')) {
    if (!result) {
      result = null;
    }
    client.user.setGame(result);
  } else

  if (message.content.startsWith(prefix + 'setstatus')) {
    if (!result) {
      result = 'online';
    }
    client.user.setStatus(result);
  } else

  if (message.content.startsWith(prefix + 'foo')) {
    message.channel.sendMessage('bar');
  }
});
 client.login(process.env.token);
