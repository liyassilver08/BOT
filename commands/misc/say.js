const {
    ApplicationCommandOptionType,
} = require('discord.js');
  
module.exports = {
    name: 'say',
    description: 'Resend a message.',
    // devOnly: Boolean,
    // testOnly: true,
    // options: Object[],
    // deleted: Boolean,
    options: [
        {
          name: 'message',
          description: 'Your message.',
          type: ApplicationCommandOptionType.String,
          required: true,
        }
      ],

    callback: async (client, interaction) => {
        const messageToSay = interaction.options.getString('message');
        if (!messageToSay) {
            return interaction.reply('Please provide a message to resend.');
        }
        const repliedMessage = await interaction.reply(messageToSay);
    },
};
