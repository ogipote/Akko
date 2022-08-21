const {Permissions, Collection} = require('discord.js');

module.exports = {
    maintenance: false,
    errorlog: '945880722877612072',
    guildlog: '945880722877612072',
    bootlog: '945880722877612072',
    defaultPrefix: '-',
    actions: new Collection([
        ['delmsg', {
            ignorableChannels: true,
            ignorableRoles: true,
        }],
        ['prune', {
            ignorableChannels: true,
            ignorableRoles: true,
        }],
        ['editmsg', {
            ignorableChannels: true,
            ignorableRoles: true,
        }],
        ['memberjoin', {}],
        ['memberleave', {ignorableRoles: true}],
    ]),
    support: 'HPBmxz6Bjj',
    supportID: '681797849926860810',
    permissions: Permissions.ALL - (Permissions.FLAGS.START_EMBEDDED_ACTIVITIES + Permissions.FLAGS.VIEW_GUILD_INSIGHTS + Permissions.FLAGS.USE_APPLICATION_COMMANDS + Permissions.FLAGS.STREAM),
    xpRolesLimit: 10,
    namebansLimits: [5, 25],
    notarchiveLimits: [5, 50],
};
