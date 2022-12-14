const {MessageEmbed} = require('discord.js');
const axios = require('axios');

module.exports = {
    active: true,
    name: 'premium',
    description: lang => lang.get('premiumDescription'),
    cooldown: 5,
    categoryID: 5,
    args: true,
    usage: lang => ['activate', 'info', lang.get('premiumUsage0')],
    example: ['renew on 476244157245947904'],
    activateSlash: async interaction => {
        const {channelLanguage} = interaction;
        if(interaction.guild && (interaction.client.guildData.get(interaction.guild.id).premiumUntil || interaction.client.guildData.get(interaction.guild.id).partner)) return interaction.reply({
            content: channelLanguage.get('alreadyPremium'),
            ephemeral: true,
        });
        const user = require('../../schemas/user.js');
        const userDoc = await user.findById(interaction.user.id);
        if(!interaction.guild) return interaction.reply(channelLanguage.get('activatePremium', [userDoc?.premiumKeys]));
        const buttonKey = {
            type: 'BUTTON',
            label: channelLanguage.get('premiumKeysLabel'),
            style: 'PRIMARY',
            emoji: '🔑',
            customId: 'useKey',
            disabled: !userDoc?.premiumKeys
        };
        const buttonReward = {
            type: 'BUTTON',
            label: channelLanguage.get('premiumPatreonLabel'),
            style: 'SECONDARY',
            emoji: '981902531322077196',
            customId: 'useReward',
        };
        const components = [{
            type: 'ACTION_ROW',
            components: [buttonKey, buttonReward],
        }];
        const reply = await interaction.reply({
            content: channelLanguage.get('activatePremium', [userDoc?.premiumKeys]),
            components,
            ephemeral: true,
            fetchReply: true,
        });
        const collector = reply.createMessageComponentCollector({
            filter: componentInteraction => (componentInteraction.user.id === interaction.user.id),
            idle: 10000,
            max: 1,
            componentType: 'BUTTON',
        });
        collector.on('collect', i => (async i => {
            const guild = require('../../schemas/guild.js');
            switch(i.customId){
                case 'useKey': {
                    if(!userDoc?.premiumKeys) return;
                    userDoc.premiumKeys--;
                    await userDoc.save();
                    const premiumUntil = new Date(Date.now() + 2592000000);
                    await guild.findByIdAndUpdate(interaction.guild.id, {$set: {premiumUntil: premiumUntil}});
                    interaction.client.guildData.get(interaction.guild.id).premiumUntil = premiumUntil;
                    await i.update({
                        content: channelLanguage.get('activatePremiumSuccess'),
                        components: [],
                    });
                }
                break;
                case 'useReward': {
                    await i.deferUpdate();
                    const searchPledge = async url => {
                        const pledges = await axios({
                            method: 'GET',
                            url: url,
                            headers: {Authorization: `Bearer ${process.env.PATREON_TOKEN}`},
                        }).then(res => res.data);
                        const user = pledges.included.find(e => ((e.type === 'user') && (e.attributes.social_connections.discord?.user_id === interaction.user.id)));
                        if(!user){
                            if(!pledges.links.next) return null;
                            return await searchPledge(pledges.links.next);
                        }
                        return pledges.data.find(e => ((e.type === 'pledge') && (e.relationships.patron.data.id === user.id)));
                    }
                    const pledge = await searchPledge('https://www.patreon.com/api/oauth2/api/campaigns/8230487/pledges');
                    if(!pledge) return await i.editReply(({
                        content: channelLanguage.get('pledgeNotFound'),
                        components: [],
                    }));
                    const rewardTotal = {
                        '8304182': 1,
                        '8307567': 2,
                        '8307569': 3,
                    };
                    if(interaction.client.guildData.filter(e => (e.patron === interaction.user.id)).size >= rewardTotal[pledge.relationships.reward.data.id]) return await i.editReply({
                        content: channelLanguage.get('noRewardsRemaining'),
                        components: [],
                    });
                    const guildData = await guild.findByIdAndUpdate(interaction.guild.id, {$set: {
                        premiumUntil: new Date(Date.now() + 2764800000),
                        patron: interaction.user.id,
                    }}, {new: true});
                    interaction.client.guildData.set(interaction.guild.id, guildData);
                    const buttonRenew = {
                        type: 'BUTTON',
                        label: channelLanguage.get('enableRenew'),
                        style: 'PRIMARY',
                        emoji: '♻️',
                        customId: 'renew',
                    };
                    const components = [{
                        type: 'ACTION_ROW',
                        components: [buttonRenew],
                    }];
                    const reply2 = await i.editReply({
                        content: channelLanguage.get('patreonRewardClaimed'),
                        components,
                        fetchReply: true,
                    });
                    const collector2 = reply2.createMessageComponentCollector({
                        filter: componentInteraction => (componentInteraction.user.id === interaction.user.id),
                        idle: 10000,
                        max: 1,
                        componentType: 'BUTTON',
                    });
                    collector2.on('collect', i2 => (async i2 => {
                        await guild.findByIdAndUpdate(interaction.guild.id, {$set: {renewPremium: (interaction.client.guildData.get(interaction.guild.id).renewPremium = true)}});
                        await i2.update({
                            content: channelLanguage.get('renewEnabled'),
                            components: [],
                        });
                    })(i2).catch(err => interaction.client.handlers.button(err, i2)));
                    collector2.on('end', async collected => {
                        if(!reply2.editable) return;
                        if(collected.size) return;
                        buttonRenew.disabled = true;
                        await i.editReply({components});
                    });
                }
                break;
            }
        })(i).catch(err => interaction.client.handlers.button(err, i)));
        collector.on('end', async collected => {
            if(!reply.editable) return;
            if(collected.size) return;
            buttonReward.disabled = buttonKey.disabled = true;
            await interaction.editReply({content: channelLanguage.get('timedOut'), components});
        });
    },
    infoSlash: async interaction => {
        const {channelLanguage} = interaction;
        const patronGuilds = interaction.client.guildData.filter(e => (e.patron === interaction.user.id));
        if(!patronGuilds.size) return interaction.reply({
            content: channelLanguage.get('notPatron'),
            ephemeral: true,
        });
        const embed = new MessageEmbed()
            .setColor(interaction.guild?.me.displayColor || 0x8000ff)
            .addFields(...patronGuilds.map(e => ({
                name: interaction.client.guilds.cache.get(e.id)?.name ?? channelLanguage.get('unknownGuild'),
                value: channelLanguage.get('premiumInfoFieldValue', [Math.floor(e.premiumUntil.getTime() / 1000), interaction.client.guilds.cache.has(e.id) && e.renewPremium]),
            })));
        await interaction.reply({
            embeds: [embed],
            ephemeral: true,
        });
    },
    renewSlash: async (interaction, args) => {
        const {channelLanguage} = interaction;
        if(!interaction.client.guilds.cache.has(args.guild)) return interaction.reply({
            content: channelLanguage.get('invGuild'),
            ephemeral: true,
        });
        const guild = require('../../schemas/guild.js');
        const guildDoc = await guild.findByIdAndUpdate(args.guild, {$set: {renewPremium: args.enable}}, {new: true});
        if(!guildDoc) return interaction.reply({
            content: channelLanguage.get('invGuild'),
            ephemeral: true,
        });
        interaction.client.guildData.get(guildDoc._id).renewPremium = guildDoc.renewPremium;
        await interaction.reply({
            content: channelLanguage.get('renewChangeSuccess', [interaction.client.guilds.cache.get(args.guild).name, guildDoc.renewPremium]),
            ephemeral: true,
        });
    },
    slashOptions: [
        {
            type: 'SUB_COMMAND',
            name: 'activate',
            description: 'Enabled premium features in the current server',
        },
        {
            type: 'SUB_COMMAND',
            name: 'info',
            description: 'Shows information about which servers you have used Patreon rewards and their renew status',
        },
        {
            type: 'SUB_COMMAND',
            name: 'renew',
            description: 'Manages the renew status for servers you have given premium through Patreon rewards',
            options: [
                {
                    type: 'BOOLEAN',
                    name: 'enable',
                    description: 'Whether to enable monthly automatic premium renewals for the chosen server',
                    required: true,
                },
                {
                    type: 'STRING',
                    name: 'guild',
                    description: 'The guild to enable or disable automatic premium renewals',
                    required: true,
                    autocomplete: true,
                },
            ],
        },
    ],
    renewAutocomplete: {
        guild: (interaction, value) => interaction.respond(interaction.client.guilds.cache.filter(e => ((interaction.client.guildData.get(e.id)?.patron === interaction.user.id) && e.name.toLowerCase().startsWith(value.toLowerCase()))).first(25).map(e => ({
            name: e.name,
            value: e.id,
        }))),
    },
};
