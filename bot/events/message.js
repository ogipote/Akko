const guild = require('../../schemas/guild.js');
const role = require('../../schemas/role.js');
const channel = require('../../schemas/channel.js');
const member = require('../../schemas/member.js');
const user = require('../../schemas/user.js');
const {Collection} = require('discord.js');

module.exports = {
    name: 'message',
    execute: async message => {
        if(message.author.bot || (message.guild && (!message.guild.me.permissionsIn(message.channel).has('SEND_MESSAGES') || !message.guild.available))) return;
        var prefix = message.client.configs.defaultPrefix;
        var roleDocs;
        var savedChannel;
        if(message.guild){
            if(!message.client.guildData.has(message.guild.id)){
                let guildData = new guild({
                    _id: message.guild.id,
                    language: (message.guild.region === 'brazil') ? 'pt' : 'en'
                });
                guildData.save();
                message.client.guildData.set(guildData._id, guildData);
            }
            prefix = message.client.guildData.get(message.guild.id).prefix;
            if(!message.member) message.member = await message.guild.members.fetch(member.author.id).catch(() => null);
            if(!message.member) return;
            roleDocs = await role.find({
                guild: message.guild.id,
                roleID: {$in: message.guild.roles.cache.map(e => e.id)},
            });
            savedChannel = await channel.findById(message.channel.id);
        }
        const channelLanguage = message.guild ? message.client.guildData.get(message.guild.id).language : 'en';
        if(message.guild && message.client.guildData.get(message.guild.id).gainExp && (!message.client.xpcds.has(message.guild.id) || !message.client.xpcds.get(message.guild.id).has(message.author.id) || ((message.client.xpcds.get(message.guild.id).get(message.author.id) + 60000) <= Date.now())) && !roleDocs.some(e => (e.ignoreXp && message.member.roles.cache.has(e.roleID))) && (!savedChannel || !savedChannel.ignoreXp)){
            member.findOneAndUpdate({
                guild: message.guild.id,
                userID: message.author.id,
            }, {$inc: {xp: 1}}, {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            }, async (err, doc) => {
                if(err) return console.log(err);
                if(message.client.xpcds.has(message.guild.id)){
                    message.client.xpcds.get(message.guild.id).set(message.author.id, Date.now());
                }
                else{
                    message.client.xpcds.set(message.guild.id, new Collection([[message.author.id, Date.now()]]));
                }
                const lowerRoles = roleDocs.filter(e => (message.guild.roles.cache.get(e.roleID).editable && e.xp && (e.xp <= doc.xp))).sort((a, b) => (b.xp - a.xp));
                if(!lowerRoles.length || message.member.roles.cache.has(lowerRoles[0].roleID)) return;
                await message.member.roles.set(message.member.roles.cache.map(e => e.id).filter(e => !lowerRoles.some(ee => (e === ee.roleID))).concat(lowerRoles.map(e => e.roleID).slice(0, message.client.guildData.get(message.guild.id).dontStack ? 1 : undefined)));
                if(!message.client.guildData.get(message.guild.id).xpChannel || (doc.xp != lowerRoles[0].xp)) return;
                switch(message.client.guildData.get(message.guild.id).xpChannel){
                    case 'default': message.channel.send(message.client.langs[channelLanguage].get('achieveGuild', [message.author, message.guild.roles.cache.get(lowerRoles[0].roleID).name]));
                    break;
                    case 'dm': message.author.send(message.client.langs[channelLanguage].get('achieveDM', [message.guild.roles.cache.get(lowerRoles[0].roleID).name, message.guild.name])).catch(() => null);
                    break;
                    default: {
                        const notifChannel = message.client.channels.cache.get(message.client.guildData.get(message.guild.id).xpChannel);
                        if(notifChannel) notifChannel.send(message.client.langs[channelLanguage].get('achieveGuild', [message.author, message.guild.roles.cache.get(lowerRoles[0].roleID).name]));
                    }
                }
            });
        }
        if(message.mentions.has(message.client.user, {
            ignoreRoles: true,
            ignoreEveryone: true,
        })) return message.channel.send(message.client.langs[channelLanguage].get('mentionHelp', [prefix]));
        if(!message.content.startsWith(prefix)) return;
        const userDoc = await user.findById(message.author.id);
        if(userDoc && userDoc.blacklisted) return;
        const [commandName, ...args] = message.content.slice(prefix.length).toLowerCase().split(/\s+/g);
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => (cmd.aliases && cmd.aliases.includes(commandName)));
        if(!command || (command.dev && (message.author.id != message.client.configs.owner.id)) || (command.alpha && !message.client.guildData.get(message.guild.id).alpha)) return;
        if(message.client.configs.maintenance && (message.author.id != message.client.configs.owner.id)) return message.channel.send(message.client.langs[channelLanguage].get('maintenance')).catch(() => null);
        if(command.guildOnly && !message.guild) return message.channel.send(message.client.langs[channelLanguage].get('guildOnly'));
        if(command.beta && !message.client.guildData.get(message.guild.id).beta) return message.channel.send(message.client.langs[channelLanguage].get('betaCommand')).catch(() => null);
        if(command.premium && !message.client.guildData.get(message.guild.id).premium && !message.client.guildData.get(message.guild.id).partner) return message.channel.send(message.client.langs[channelLanguage].get('premiumCommand', [prefix])).catch(() => null);
        if(command.args && !args.length) return message.channel.send(message.client.langs[channelLanguage].get('noArgs', [message.author, prefix, command.name, command.usage(message.client.langs[channelLanguage])]));
        if(message.guild && !message.member.permissions.has('ADMINISTRATOR')){
            const roles = roleDocs.filter(e => (e.commandPermissions.id(command.name) && message.member.roles.cache.has(e.roleID)));
            if((!roles.length && command.perm && !message.member.permissions.has(command.perm)) || (roles.length && roles.some(e => !e.commandPermissions.id(command.name).allow) && !roles.some(e => e.commandPermissions.id(command.name).allow))) return message.channel.send(message.client.langs[channelLanguage].get('forbidden'));
            if(savedChannel && savedChannel.ignoreCommands.includes(command.name) && message.guild.me.permissionsIn(message.channel).has('ADD_REACTIONS')) return await message.react('🚫');
        }
        if(!message.client.cooldowns.has(command.name)) message.client.cooldowns.set(command.name, new Collection());
        const now = Date.now();
        const timestamps = message.client.cooldowns.get(command.name);
        const cooldownAmount = command.cooldown * 1000;
        if(timestamps.has(message.author.id) && (message.author.id != message.client.configs.owner.id)){
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
            if(now < expirationTime){
                const timeLeft = (expirationTime - now) / 1000;
                return message.channel.send(message.client.langs[channelLanguage].get('cooldown', [timeLeft.toFixed(1), command.name]));
            }
        }
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
        command.execute(message, args).catch(error => {
            console.error(error);
            message.channel.send(message.client.langs[channelLanguage].get('error', [command.name])).catch(() => null);
            if(process.env.NODE_ENV === 'production') message.client.channels.cache.get(message.client.configs.errorlog).send(`Error: *${error.message}*\nMessage Author: ${message.author}\nMessage Content: *${message.content.replace(/\u002A/g, '\\*').slice(0, Math.floor(2000 - (60 + error.message.length + message.url.length + message.author.toString().length)))}*\nMessage URL: ${message.url}`).catch(console.error);
        });
    },
};