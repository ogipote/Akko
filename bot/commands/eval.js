module.exports = {
    active: true,
    name: 'eval',
    description: () => 'Directly evaluates JavaScript code',
    dev: true,
    args: true,
    usage: () => ['(code)'],
    execute: async message => eval(message.content.replace(/^\S+\s+/, '')),
    executeSlash: async interaction => {
        interaction.awaitModalSubmit({
            filter: i => (i.customId === `eval${interaction.id}`) && (i.user.id === interaction.client.application.owner.id),
            time: 600_000,
        }).then(async i => {
            await i.reply({
                content: 'Executing code...',
                ephemeral: true,
            });
            eval(i.fields.getTextInputValue('code'));
        }).catch(async () => await interaction.followUp({
            content: 'Modal timed out!',
            ephemeral: true,
        }));
        await interaction.showModal({
            customId: `eval${interaction.id}`,
            title: 'eval',
            components: [{
                type: 'ACTION_ROW',
                components: [{
                    type: 'TEXT_INPUT',
                    customId: 'code',
                    label: 'Code',
                    placeholder: 'console.log("Hello, World!");',
                    required: true,
                    style: 'PARAGRAPH',
                }],
            }],
        });
    },
};