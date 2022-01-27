module.exports = {
    lang: 'en',
    get: (line, vars = []) => {
        switch(line){
            case 'mentionHelp': return `Use \`${vars[0]}help\` to see all my commands!`;
            case 'blacklisted': return 'You are blacklisted from using me!';
            case 'noArgs': return `You didn't provide any arguments, ${vars[0]}!\nThe proper usage would be:\n${vars[3].map(e => `\`${vars[1]}${vars[2]} ${e}\``).join('\n')}`;
            case 'cooldown': return `Please wait ${vars[0]} more second(s) before reusing the \`${vars[1]}\` command${vars[3] ? '' : `\nTip: Premium servers have half the cooldown for all commands\nTo get premium use \`${vars[2]}premium\``}`;
            case 'error': return `There was an error trying to execute the command \`${vars[0]}\`\nThe issue was sent to the support team and will be fixed in the near future`;
            case 'helpDescription': return 'Lists all commands or gives info about a specific one';
            case 'helpUsage': return '[(command)]';
            case 'pingDescription': return 'Ping!';
            case 'pruneDescription': return 'Deletes a given amount of messages';
            case 'pruneUsage': return '(amount)';
            case 'botEmbed': return 'I need permission to embed links in this channel';
            case 'botManageMessages': return 'I need permission to manage messages in this channel';
            case 'helpEmbedTitle': return 'Commands help';
            case 'helpEmbedDescription': return `[\`Support server\`](https://discord.gg/${vars[0]})\n[\`Invite me\`](${vars[1]})\n[\`Extended documentation\`](https://github.com/HordLawk/YottaBot#get-started)\n[\`Top.gg\`](https://top.gg/bot/${vars[3]})\n\nUse \`${vars[2]}help (command)\` for more info about a specific command`;
            case 'helpEmbedFooter': return `${vars[0]} commands | [] = Optional - () = Variable - </> = Either`;
            case 'category0': return 'Commands';
            case 'category1': return 'Information';
            case 'category2': return 'Administration';
            case 'category3': return 'Moderation';
            case 'category4': return 'Levelling';
            case 'category5': return 'Miscellaneous';
            case 'invalidCommand': return 'This is not a valid command';
            case 'invalidStructure': return `The \`${vars[0]}\` command doesn't have a valid structure`;
            case 'deploySuccess': return `The \`${vars[0]}\` command was successfully deployed to ${vars[1]}`;
            case 'deployFail': return `The \`${vars[0]}\` command failed to deploy to ${vars[1]}`;
            case 'helpCommandEmbedTitle': return `Help for the ${vars[0]} command`;
            case 'helpCommandEmbedFooter': return '[] = Optional - () = Variable - </> = Either';
            case 'syntax': return 'Syntax';
            case 'example': return 'Example';
            case 'aliases': return 'Aliases';
            case 'permissionLevel': return 'Permission level';
            case 'helpCommandCooldown': return `${vars[0]} second(s)`;
            case 'terrible': return 'Terrible';
            case 'bad': return 'Bad';
            case 'normal': return 'Normal';
            case 'good': return 'Good';
            case 'average': return 'Connection';
            case 'current': return 'Response';
            case 'invalidValue': return `Invalid value. ${vars[0]}`;
            case 'maintenance': return 'Currently in maintenance, try again later';
            case 'guildOnly': return 'This command is server only';
            case 'forbidden': return 'You do not have permission to use this command';
            case 'disabled': return 'This command is disabled in this channel';
            case 'permDescription': return 'Allow or deny specific roles from using a command';
            case 'permUsage0': return '<allow/deny/default> <(role mention)/(role ID)/"(role name)"> (list of commands)';
            case 'permUsage1': return 'view <(role mention)/(role ID)/"(role name)">';
            case 'permission8': return 'Administrator';
            case 'permission268435456': return 'Manage Roles';
            case 'permission4': return 'Ban Members';
            case 'permission2': return 'Kick Members';
            case 'permission1099511627776': return 'Moderate Members';
            case 'invArgs': return `Invalid arguments!\nThe proper usage would be:\n${vars[2].map(e => `\`${vars[0]}${vars[1]} ${e}\``).join('\n')}`;
            case 'permSuccess': return `**${vars[0]}** was ${(vars[1] === 'allow') ? 'allowed to use' : 'denied from using'} these commands`;
            case 'noSpecialPerms': return 'There are no special permissions set to this role';
            case 'defaultPermsSuccess': return `Special permissions for **${vars[0]}** over these commands were removed`;
            case 'permsEmbedAuthor': return 'Special permissions';
            case 'permsAllowed': return 'Allowed commands';
            case 'permsDenied': return 'Denied commands';
            case 'disableDescription': return 'Disables commands from being used in a specific channel';
            case 'disableUsage0': return '(channel) <on/off> <(list of commands)/all>';
            case 'disableUsage1': return '(channel) view';
            case 'disableAll': return `All commands are now ${(vars[0] === 'on') ? 'disabled' : 'enabled'} on ${vars[1]}`;
            case 'disableSome': return `These commands are now ${(vars[0] === 'on') ? 'disabled' : 'enabled'} on ${vars[1]}`;
            case 'permsEmbedDesc': return `Role: ${vars[0]}`;
            case 'noDisabledCmds': return 'There are no commands disabled in this channel';
            case 'disabledEmbedAuthor': return 'Channel specific commands';
            case 'disabledEmbedDesc': return `Channel: ${vars[0]}`;
            case 'disabledField': return 'Disabled';
            case 'achieveGuild': return `Congratulations ${vars[0]}! You just achieved the role **${vars[1]}**`;
            case 'achieveDM': return `Congratulations! You just achieved the role **${vars[0]}** in the server **${vars[1]}**`;
            case 'msgxpDescription': return 'Manages this server\'s xp system';
            case 'msgxpUsage0': return 'enable <on/off>';
            case 'msgxpUsage1': return 'roles set (role) (xp)';
            case 'msgxpUsage2': return 'roles remove <(role)/all>';
            case 'msgxpUsage3': return 'user <add/remove/set> (xp) (list of users)';
            case 'msgxpUsage4': return 'ignore role <add/remove> (role)';
            case 'msgxpUsage5': return 'ignore channel <add/remove> (channel)';
            case 'msgxpUsage6': return 'notify <default/none/dm/(channel)>';
            case 'msgxpUsage7': return 'view';
            case 'msgxpUsage8': return 'stack <on/off>';
            case 'msgxpUsage9': return 'reset';
            case 'msgxpUsage10': return 'recommend (role amount) (max xp)';
            case 'xpEnable': return `Server xp system successfully ${(vars[0] === 'on') ? 'enabled': 'disabled'}`
            case 'xpStack': return `Role stacking successfully ${(vars[0] === 'on') ? 'enabled': 'disabled'}`
            case 'manageRole': return 'I need permissions to manage this role';
            case 'sameXp': return 'There is another role being rewarded at this amount of xp';
            case 'maxXpRoles': return `The maximum amount of xp roles for non premium servers is 10, but you can add more with premium! To understand how, use \`${vars[0]}premium\``;
            case 'setXpRole': return `**${vars[0]}** is now achieveable at **${vars[1]}** xp\nbe aware that members will only get this role when they send new messages`;
            case 'resetXpRoles': return `All xp roles were removed\nbe aware that these roles won't be automatically removed from members, if you want this, it's recommended that you delete the roles from the server so no member can have it`;
            case 'removeXpRole': return `**${vars[0]}** was removed from the xp rewards\nbe aware that this role won't be automatically removed from members, if you want this, it's recommended that you delete the role from the server so no member can have it`;
            case 'setUserXp': return 'Xp values defined';
            case 'xpIgnoreRole': return `The role **${vars[0]}** ${(vars[1] === 'add') ? 'will' : 'won\'t'} be ignored from earning xp`;
            case 'xpIgnoreChannel': return `Users ${(vars[0] === 'add') ? 'won\'t' : 'will'} be able to earn xp in ${vars[1]}`;
            case 'notifyDefault': return `New role notifications will be sent ${(vars[0] === 'dm') ? 'on DMs' : 'in the channel where the achievement happened'}`;
            case 'notifyNone': return 'No new role notifications will be sent';
            case 'notifyChannel': return `New role notifications will be sent in ${vars[0]}`;
            case 'notifyDefaultView': return '\`Same channel\`';
            case 'notifyDMView': return '\`DMs\`';
            case 'notifyNoneView': return '\`None\`';
            case 'xpViewEmbedAuthor': return 'Server xp system settings';
            case 'xpViewEmbedDesc': return `Enabled: \`${vars[0] ? 'on': 'off'}\`\nStacking: \`${vars[1] ? 'off': 'on'}\`\nNotifications: ${vars[2]}`;
            case 'xpViewRoles': return 'Achieveable roles';
            case 'xpViewIgnoredRoles': return 'Ignored roles';
            case 'xpViewIgnoredChannels': return 'Ignored channels';
            case 'resetXpConfirm': return 'This will **__RESET ALL USERS XP__** to 0, are you sure you want to proceed?';
            case 'timedOut': return 'Operation timed out';
            case 'cancelled': return 'Operation cancelled';
            case 'resetXp': return 'Server xp successfully reset';
            case 'memberManageRole': return 'You don\'t have permission to manage this role';
            case 'sendMessages': return 'I need permission to send messages in this channel';
            case 'rolemenuDescription': return 'Creates a message where users can react to claim one or more roles';
            case 'rolemenuUsage0': return 'create (channel) <(role mention)/(role ID)/"(role name)"> (emoji) [(list of roles and emojis)] [toggle]';
            case 'rolemenuUsage1': return 'edit (menu ID) <(role mention)/(role ID)/"(role name)"> (emoji) [(list of roles and emojis)] [toggle]';
            case 'maxRolesMenu': return 'The maximum amount of roles per menu is 20';
            case 'botReactions': return 'I need permission to add reactions in this channel';
            case 'maxRolemenus': return `The maximum amount of menus for non premium servers is 10, but you can add more with premium! To understand how, use \`${vars[0]}premium\``;
            case 'uniqueEmoji': return 'Each emoji can only be used once per menu';
            case 'loading': return 'Loading...';
            case 'rolemenuEmbedAuthor': return 'React to claim a role';
            case 'rolemenuCreated': return 'Rolemenu successfully created';
            case 'menu404': return 'Menu not found';
            case 'rolemenuEdited': return 'Rolemenu successfully edited';
            case 'configsDescription': return 'General server settings';
            case 'configsUsage0': return 'prefix (new prefix)';
            case 'configsUsage1': return 'language <en/pt>';
            case 'configsUsage2': return 'view';
            case 'configsUsage3': return 'mod logs (channel) <warn/mute/kick/ban> [(other case types)]';
            case 'configsUsage4': return 'mod clearonban (days)';
            case 'longPrefix': return 'A prefix can\'t have more than 10 characters';
            case 'newPrefix': return 'Server prefix updated';
            case 'lang404': return 'Language not supported';
            case 'newLang': return 'Server language updated';
            case 'configsEmbedAuthor': return 'Server settings';
            case 'configsEmbedDesc': return `Prefix: \`${vars[0]}\`\nLanguage: \`${vars[1]}\`\nLog attachments: \`${vars[2] ? 'on' : 'off'}\`\nWarn log channel: ${vars[3].warn ? `<#${vars[3].warn}>` : '`none`'}\nMute log channel: ${vars[3].mute ? `<#${vars[3].mute}>` : '`none`'}\nKick log channel: ${vars[3].kick ? `<#${vars[3].kick}>` : '`none`'}\nBan log channel: ${vars[3].ban ? `<#${vars[3].ban}>` : '`none`'}\nDays of messages to delete on ban: \`${vars[4]}\`\nBeta features: \`${vars[5] ? 'on' : 'off'}\``;
            case 'betaCommand': return 'This command is currently only available for servers that enabled open beta features in the bot settings';
            case 'premiumCommand': return `This command is a premium feature, use \`${vars[0]}premium\` for more information on becoming premium`;
            case 'botWebhooks': return 'I need permission to manage webhooks in this channel';
            case 'executor': return `\nExecutor: ${vars[0]}`;
            case 'delmsgEmbedAuthor': return 'Deleted message';
            case 'delmsgEmbedAuthorTitle': return 'Author';
            case 'delmsgEmbedChannelTitle': return 'Channel';
            case 'delmsgEmbedExecutorTitle': return 'Executor';
            case 'delmsgEmbedSentTitle': return 'Sent';
            case 'delmsgEmbedSentValue': return `<t:${vars[0]}>`;
            case 'delmsgEmbedAttachmentsTitle': return 'Attachments';
            case 'delmsgEmbedAttachmentsMedia': return `[\`Attachment-${vars[0]}-Media\`](${vars[1]})`;
            case 'delmsgEmbedAttachmentsFile': return `[\`Attachment-${vars[0]}-File\`](${vars[1]})`;
            case 'actionlogsDescription': return 'Manages action logs for the server';
            case 'actionlogsUsage0': return 'defaultchannel (channel)';
            case 'actionlogsUsage1': return 'set <delmsg/prune> <(channel)/default>';
            case 'actionlogsUsage2': return 'ignore channel <add/remove> (channel) <delmsg/prune/all>';
            case 'actionlogsUsage3': return 'ignore channel view (channel)';
            case 'actionlogsUsage4': return 'ignore role <add/remove> (role) <delmsg/prune/all/view>';
            case 'actionlogsUsage5': return 'ignore role view (role)';
            case 'newDefaultHookReason': return 'Default log channel webhook';
            case 'oldDefaultHookReason': return 'Old default log channel webhook';
            case 'newDefaultLog': return `Default log channel set to ${vars[0]}`;
            case 'noDefaultLog': return 'Default log channel not defined';
            case 'oldHookReason': return `Old ${vars[0]} log channel webhook`;
            case 'newDefaultLogSuccess': return 'This action was set to log in the default log channel';
            case 'newHookReason': return `${vars[0]} log channel webhook`;
            case 'newLogSuccess': return `This action was set to log in ${vars[0]}`;
            case 'removeLogSuccess': return 'This action won\'t be logged';
            case 'noIgnoredActionsChannel': return 'No action is being ignored in this channel'
            case 'ignoredActionsChannelEmbedAuthor': return 'Ignored channel';
            case 'ignoredActionsChannelEmbedDesc': return `Channel: ${vars[0]}`;
            case 'ignoredActionsEmbedFooter': return `${vars[0]} ignored actions`;
            case 'ignoredActionsEmbedActionsTitle': return 'Actions';
            case 'actiondelmsg': return '**deleted messages**';
            case 'actionprune': return '**pruned messages**';
            case 'noIgnoredActionsRole': return 'No actions are being ignored for this role';
            case 'ignoredActionsRoleEmbedAuthor': return 'Ignored role';
            case 'ignoredActionsRoleEmbedDesc': return `Role: ${vars[0]}`;
            case 'allActionsIgnoredChannelSuccess': return `All actions will be ignored in ${vars[0]}`;
            case 'noActionsIgnoredChannelSuccess': return `No actions will be ignored in ${vars[0]}`;
            case 'allActionsIgnoredRoleSuccess': return `All actions will be ignored for **${vars[0]}**`;
            case 'noActionsIgnoredRoleSuccess': return `No actions will be ignored for **${vars[0]}**`;
            case 'actionIgnoredChannelSuccess': return `**${vars[0]}** will be ignored in ${vars[1]}`;
            case 'actionNotIgnoredChannelSuccess': return `**${vars[0]}** won't be ignored in ${vars[1]}`;
            case 'actionIgnoredRoleSuccess': return `**${vars[0]}** will be ignored for **${vars[1]}**`;
            case 'actionNotIgnoredRoleSuccess': return `**${vars[0]}** won't be ignored for **${vars[1]}**`;
            case 'logsViewEmbedAuthor': return 'Action logs info';
            case 'logsViewEmbedDesc': return `Default channel: ${vars[0] ? `<#${vars[0]}>` : '\`none\`'}`;
            case 'logsViewEmbedActionsTitle': return 'Logged actions';
            case 'logsViewEmbedActions': return `**${vars[0]}** - ${vars[1] ? `<#${vars[1]}>` : '`Default`'}`
            case 'logsViewEmbedIgnoredChannelsTitle': return 'Ignored channels';
            case 'logsViewEmbedIgnoredRolesTitle': return 'Ignored roles';
            case 'logsViewEmbedIgnoredSome': return 'Some';
            case 'logsViewEmbedIgnoredAll': return 'All';
            case 'logattachmentsBadArgs': return 'Choose to turn this setting `on` or `off`';
            case 'logattachmentsNoHook': return 'Choose a channel to log deleted messages first';
            case 'logattachmentsNoNSFW': return 'To use this settings your deleted messages log channel needs to be set to NSFW';
            case 'logattachmentsOnSuccess': return 'Attachments will be logged';
            case 'logattachmentsOffSuccess': return 'Attachments will not be logged';
            case 'premiumDescription': return 'Information on becoming premium';
            case 'alreadyPremium': return 'This server already has access to premium features';
            case 'premiumEmbedDesc': return `Buying premium status is not ready yet, if you wish to apply for partnership or pay for premium directly **[join the support server](https://discord.gg/${vars[0]})** and contact the developers`;
            case 'banDescription': return 'Bans an user\nAlso accepts a media attachment';
            case 'banUsage': return '(user) [(reason)]';
            case 'invUser': return 'Invalid user';
            case 'cantBan': return 'I can\'t ban this member';
            case 'youCantBan': return 'You can\'t ban this member';
            case 'dmBanned': return `You were banned in **${vars[0]}**${vars[1] ? `\n__Reason:__ *${vars[1]}*` : ''}`;
            case 'alreadyBanned': return 'This user is already banned';
            case 'banReason': return `Executor: ${vars[0]}${vars[1] ? ` | Reason: ${vars[1]}` : ''}`;
            case 'memberBanSuccess': return `Member banned\nCase ID: \`${vars[0]}\``;
            case 'banEmbedAuthor': return `${vars[0]} banned ${vars[1]}`;
            case 'banEmbedDescription': return `[\`Action message\`](${vars[0]})`;
            case 'banEmbedTargetTitle': return 'Target';
            case 'banEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'banEmbedExecutorTitle': return 'Executor';
            case 'banEmbedFooter': return `Case ${vars[0]}`;
            case 'banEmbedReasonTitle': return 'Reason';
            case 'checkDescription': return 'Shows an user\'s cases';
            case 'checkUsage': return '(user) <all/warn/mute/kick/ban> [(time filter)]';
            case 'invLogs': return 'No logs meeting these conditions were found';
            case 'checkEmbedAuthor': return 'Cases';
            case 'checkEmbedFooter': return `${vars[0]} cases found`;
            case 'checkEmbedCaseTitle': return `Case ${vars[0]}`;
            case 'checkEmbedCaseValue': return `${vars[0].actionMessage ? `[\`Action message\`](${vars[0].actionMessage})\n` : ''}Type: \`${vars[0].removal ? `${'un'}${vars[0].type}` : vars[0].type}\`\n${vars[0].executor ? `Executor: <@${vars[0].executor}>\n` : ''}${vars[1] ? `Duration: \`${vars[1][0] ? `${vars[1][0]}d` : ''}${vars[1][1] ? `${vars[1][1]}h` : ''}${vars[1][2] ? `${vars[1][2]}m` : ''}\`\n` : ''}${vars[0].reason ? `Reason: *${vars[0].reason.slice(0, 250)}*\n` : ''}Date: <t:${Math.floor(vars[0].timeStamp.getTime() / 1000)}>${vars[0].image ? `\n[\`Media\`](${vars[0].image})` : ''}`;
            case 'modLogsSetSuccess': return `Log channel for ${vars[0].map(e => `\`${e}\``).join(' ')} set to ${vars[1]}`;
            case 'invClearOnBanDays': return 'Number of days must be between 0 and 7';
            case 'clearOnBanDaysSetSuccess': return `Number of days of messages to delete on bans set to **${vars[0]}**`;
            case 'invRole': return 'Role not found';
            case 'muteRoleSetSuccess': return `Mute role set to **${vars[0]}**`;
            case 'autoSetupMuteSetSuccess': return `Auto setup mute mode turned **${vars[0]}**`;
            case 'inviteDescription': return 'Gives you an url to add the bot to your server';
            case 'inviteEmbedDescription': return `**[Invite](${vars[0]})** me to your server!`;
            case 'muteDescription': return 'Mutes a member\nAlso accepts a media attachment';
            case 'muteUsage': return '(member) (duration) [(reason)]';
            case 'invMember': return 'Member not found';
            case 'youCantMute': return 'You can\'t mute this member';
            case 'iCantMute': return 'I can\'t moderate this member';
            case 'invMuteDuration': return 'Invalid mute duration';
            case 'alreadyMuted': return 'This member is already muted';
            case 'botManageRolesServer': return 'I can\'t manage roles in this server';
            case 'botModerateMembersServer': return 'I can\'t moderate members in this server';
            case 'cantGiveMuteRole': return 'I can\'t give the mute role to users';
            case 'noMuteRole': return 'No mute role was defined and the auto setup mute mode is disabled';
            case 'muteRoleName': return 'Muted';
            case 'muteMemberSuccess': return `Member muted\nCase ID: \`${vars[0]}\``;
            case 'muteRoleSetupReason': return 'Mute role permissions setup';
            case 'muteEmbedAuthor': return `${vars[0]} muted ${vars[1]}`;
            case 'muteEmbedDescription': return `[\`Action message\`](${vars[0]})`;
            case 'muteEmbedTargetTitle': return 'Target';
            case 'muteEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'muteEmbedExecutorTitle': return 'Executor';
            case 'muteEmbedDurationTitle': return 'Duration';
            case 'muteEmbedDurationValue': return `${vars[0] ? `${vars[0]}d` : ''}${vars[1] ? `${vars[1]}h` : ''}${vars[2] ? `${vars[2]}m` : ''}\n<t:${vars[3]}:R>`;
            case 'muteEmbedFooter': return `Case ${vars[0]}`;
            case 'muteEmbedReasonTitle': return 'Reason';
            case 'activatePremium': return `You have **${vars[0]}** premium keys remaining\nDo you want to activate premium features for this server? This action cannot be undone`;
            case 'confirm': return 'Confirm';
            case 'cancel': return 'Cancel';
            case 'previous': return 'Previous';
            case 'next': return 'Next';
            case 'activatePremiumSuccess': return 'Premium features activated';
            case 'reasonDescription': return 'Edits the reason for a mod case';
            case 'reasonUsage': return '(case ID) (new reason)';
            case 'invCase': return 'Case not found';
            case 'youCantEditCase': return 'You can\'t edit this case';
            case 'reasonEditSuccess': return 'Reason edited';
            case 'reasonEmbedTargetTitle': return 'Target';
            case 'reasonEmbedTargetValue': return `<@${vars[0]}>\n${vars[0]}`;
            case 'reasonEmbedExecutorTitle': return 'Executor';
            case 'reasonEmbedExecutorValue': return `<@${vars[0]}>`;
            case 'reasonEmbedDurationTitle': return 'Duration';
            case 'reasonEmbedDurationValue': return `${vars[0] ? `${vars[0]}d` : ''}${vars[1] ? `${vars[1]}h` : ''}${vars[2] ? `${vars[2]}m` : ''}\n<t:${vars[3]}:R>`;
            case 'reasonEmbedReasonTitle': return 'Reason';
            case 'supportDescription': return 'Gives you an invite to the support server';
            case 'supportEmbedDescription': return `**[Join](https://discord.gg/${vars[0]})** my support server!`;
            case 'unbanDescription': return 'Unbans an user';
            case 'unbanUsage': return '(user) [(reason)]';
            case 'invBanned': return 'Banned user not found';
            case 'cantUnban': return 'I don\'t have permission to unban users';
            case 'unbanAuditReason': return `Executor: ${vars[0]}${vars[1] ? ` | Reason: ${vars[1]}` : ''}`;
            case 'unbanSuccess': return `User unbanned\nCase ID: \`${vars[0]}\``;
            case 'unbanEmbedAuthor': return `${vars[0]} unbanned ${vars[1]}`;
            case 'unbanEmbedDescription': return `[\`Action message\`](${vars[0]})`;
            case 'unbanEmbedTargetTitle': return 'Target';
            case 'unbanEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'unbanEmbedExecutorTitle': return 'Executor';
            case 'unbanEmbedFooter': return `Case ${vars[0]}`;
            case 'unbanEmbedReasonTitle': return 'Reason';
            case 'unmuteDescription': return 'Unmutes an user';
            case 'unmuteUsage': return '(user) [(reason)]';
            case 'youCantUnmute': return 'You can\'t unmute this member';
            case 'invMuteRole': return 'Mute role not found';
            case 'cantManageMuteRole': return 'I can\'t manage the mute role';
            case 'invMuted': return 'Muted user not found';
            case 'unmuteSuccess': return `Member unmuted\nCase ID: \`${vars[0]}\``;
            case 'unmuteEmbedAuthor': return `${vars[0]} unmuted ${vars[1] || 'someone'}`;
            case 'unmuteEmbedDescription': return `[\`Action message\`](${vars[0]})`;
            case 'unmuteEmbedTargetTitle': return 'Target';
            case 'unmuteEmbedTargetValue': return `<@${vars[0]}>\n${vars[0]}`;
            case 'unmuteEmbedExecutorTitle': return 'Executor';
            case 'unmuteEmbedFooter': return `Case ${vars[0]}`;
            case 'unmuteEmbedReasonTitle': return 'Reason';
            case 'warnDescription': return 'Warns a member';
            case 'warnUsage': return '(user) [(reason)]';
            case 'cantWarnBot': return 'I can\'t warn a bot';
            case 'youCantWarn': return 'You are not allowed to warn this member';
            case 'dmWarned': return `You were warned in **${vars[0]}**${vars[1] ? `\n__Reason:__ *${vars[1]}*` : ''}`;
            case 'warnedBlockedDms': return 'The warn couldn\'t be DMed to the user. This usually happens when a user disables DMs for this server';
            case 'warnSuccess': return `Member warned\nCase ID: \`${vars[0]}\``;
            case 'warnEmbedAuthor': return `${vars[0]} warned ${vars[1]}`;
            case 'warnEmbedDescription': return `[\`Action message\`](${vars[0]})`;
            case 'warnEmbedTargetTitle': return 'Target';
            case 'warnEmbedTargetValue': return `${vars[0]}\n${vars[0].id}`;
            case 'warnEmbedExecutorTitle': return 'Executor';
            case 'warnEmbedFooter': return `Case ${vars[0]}`;
            case 'warnEmbedReasonTitle': return 'Reason';
            case 'xpDescription': return 'Tells a member\'s xp in a server';
            case 'xpUsage0': return '[(user)]';
            case 'xpUsage1': return 'rank';
            case 'xpUsage2': return 'roles';
            case 'xpDisabled': return 'The xp system is disabled in this server';
            case 'lbDeprecated': return 'The `lb` argument is deprecated and will be removed at a future update, please use `rank` instead';
            case 'xpRankEmbedAuthor': return 'Xp ranking';
            case 'xpRankEmbedFooter': return `You are ranked at #${vars[0]}`;
            case 'noXpRoles': return 'There are no xp roles in this server';
            case 'xpRolesEmbedAuthor': return 'Xp roles';
            case 'noXp': return 'This member does not yet have any xp';
            case 'xpEmbedAuthor': return 'Xp';
            case 'xpEmbedDescription': return `${vars[0] ? `Current level: <@&${vars[0].roleID}>\n` : ''}${vars[1] ? `Next level: <@&${vars[1].roleID}>\n` : ''}Progress: **${vars[2]}${vars[1] ? `/${vars[1].xp}` : ''}**`;
            case 'xpEmbedFooter': return `#${vars[0]}`;
            case 'dmBotAdder': return `Greetings ${vars[0]}! Thank you for adding me to **${vars[1]}**. Since I am a highly customizable bot, I recommend that you start by having a look at \`${vars[2]}help configs\` and setting up command permissions with \`${vars[2]}help perm\`, otherwise, some of them might have too restrictive default permissions, like the \`mute\` command, which by default is only allowed to users with the Manage Roles permission\n\nIf you need any help, don\'t hesitate to **[join my support server](https://discord.gg/${vars[3]})**, you can also read the **[full documentation](https://github.com/HordLawk/YottaBot#get-started)** for more detailed information`;
            case 'autoUnmuteEmbedAuthorMember': return `${vars[0]} was unmuted`;
            case 'autoUnmuteEmbedAuthorNoMember': return 'Unmute';
            case 'autoUnmuteEmbedTargetTitle': return 'Target';
            case 'autoUnmuteEmbedTargetValue': return `<@${vars[0]}>\n${vars[0]}`;
            case 'autoUnmuteEmbedReasonTitle': return 'Reason';
            case 'autoUnmuteEmbedReasonValue': return 'End of mute';
            case 'autoUnmuteEmbedDescription': return `[\`Referred mute\`](${vars[0]})`;
            case 'kickDescription': return 'Kicks a member from a server\nAlso accepts a media attachment';
            case 'kickUsage': return '(user) [(reason)]';
            case 'cantKick': return 'I can\'t kick this member';
            case 'youCantKick': return 'You can\'t kick this member';
            case 'kickAuditReason': return `Executor: ${vars[0]}${vars[1] ? ` | Reason: ${vars[1]}` : ''}`;
            case 'kickSuccess': return `Member kicked\nCase ID: \`${vars[0]}\``;
            case 'kickEmbedAuthor': return `${vars[0]} kicked ${vars[1]}`;
            case 'kickEmbedDescription': return `[\`Action message\`](${vars[0]})`;
            case 'kickEmbedTargetTitle': return 'Target';
            case 'kickEmbedTargetValue': return `${vars[0]}\n${vars[1]}`;
            case 'kickEmbedExecutorTitle': return 'Executor';
            case 'kickEmbedFooter': return `Case ${vars[0]}`;
            case 'kickEmbedReasonTitle': return 'Reason';
            case 'massbanDescription': return 'Bans many users at the same time';
            case 'massbanUsage': return '(user) [(list of users)] [(reason)]';
            case 'massbanSuccess': return `${vars[0] ? `${vars[0]} users banned\n` : ''}${vars[1] ? `${vars[1]} invalid users\n` : ''}${vars[2] ? `${vars[2]} users could not be banned\n` : ''}${vars[3] ? `${vars[3]} users were already banned` : ''}`;
            case 'firstBoost': return `Congratulations ${vars[0]}, you boosted **${vars[1]}** and was rewarded with a premium key, use the \`premium\` commannd in any server to activate its premium features`;
            case 'renewBoost': return `Thank you for boosting **${vars[0]}** for another month! You got a premium key as a reward, use the \`premium\` commannd in any server to activate its premium features`;
            case 'recommendMinLevels': return 'You can\'t ask for recommendations for less than 2 levels';
            case 'recommendMinXp': return 'Highest level xp has to be at least 13';
            case 'recommendXpNotEnough': return `**${vars[0]}** is not enough xp for **${vars[1]}** levels`;
            case 'recommendSuccess': return `The recommended xp amounts are ${vars[0].map(e => `\`${Math.round(e / 20)}\``).join(' ')}`;
            case 'infoEmbedAuthor': return 'YottaBot information';
            case 'infoEmbedDescription': return `[\`Invite me\`](${vars[0]})`;
            case 'infoEmbedVersionTitle': return 'Version';
            case 'infoEmbedEngineTitle': return 'Engine';
            case 'infoEmbedEngineValue': return `Node.js ${vars[0]}`;
            case 'infoEmbedLibraryTitle': return 'Library';
            case 'infoEmbedLibraryValue': return `discord.js v${vars[0]}`;
            case 'infoEmbedDeveloperTitle': return 'Developer';
            case 'infoEmbedUptimeTitle': return 'Last login';
            case 'infoEmbedUptimeValue': return `<t:${Math.floor(vars[0] / 1000)}:R>`;
            case 'infoEmbedRAMTitle': return 'RAM usage';
            case 'infoEmbedRAMValue': return `${(vars[0] / 1048576).toFixed(2)} MB`;
            case 'infoEmbedSupportTitle': return 'Support server';
            case 'infoEmbedSupportValue': return `[\`discord.gg/${vars[0]}\`](https://discord.gg/${vars[0]})`;
            case 'infoEmbedRepoTitle': return 'Source code';
            case 'infoEmbedRepoValue': return '[\`github.com/HordLawk/YottaBot\`](https://github.com/HordLawk/YottaBot)';
            case 'upvoteDescription': return 'Upvote me on Top.gg';
            case 'upvoteEmbedDescription': return `**[Upvote me](https://top.gg/bot/${vars[0]}/vote)** on Top.gg!`;
            case 'voiceXpEmbedAuthor': return 'Voice xp system settings';
            case 'voiceXpEmbedDesc': return `Enabled: ${vars[0] ? `\`on\`\nCooldown: \`${vars[0]} minutes\``: '`off`'}`;
            case 'voiceXpIgnoredChannels': return 'Ignored voice channels';
            case 'betaSuccess': return `Beta features turned **${vars[0]}**`;
            case 'voicexpDescription': return 'Manages xp earnings in voice channels';
            case 'voicexpUsage0': return 'enable (cooldown minutes)';
            case 'voicexpUsage1': return 'ignore <add/remove> (channel)';
            case 'invCooldown': return 'Cooldown minutes has to be an integer between 1 and 59';
            case 'voicexpEnableSuccess': return `Xp earning in voice channels was enabled and its cooldown was set to ${vars[0]}`;
            case 'voicexpDisableSuccess': return 'Xp earning in voice channels disabled';
            case 'slashOnly': return `The \`${vars[0]}\` command can only be executed through Discord's built in slash commands feature\nType \`/${vars[0]}\` to use it`;
        }
    },
};