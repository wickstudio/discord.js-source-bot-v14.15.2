const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

  data: new SlashCommandBuilder()

    .setName('ping')

    .setDescription('Displays bot latency and response speed.'),

  async execute(interaction) {

    const embedColor = ping => {

      if (ping < 100) return '#44b37f'; // green

      if (ping < 200) return '#faa61a'; // yellow

      return '#f04747'; // red

    };

    const botPing = Date.now() - interaction.createdTimestamp;

    const embed = new EmbedBuilder()

      .setTitle('ðŸ“ Pong!')

      .addFields(

        { name: 'Bot Latency', value: `\`${botPing}ms\``, inline: true },

        { name: 'API Latency', value: `\`${Math.round(interaction.client.ws.ping)}ms\``, inline: true }

      )

      .setColor(embedColor(Math.round(interaction.client.ws.ping)))

      .setTimestamp();

    await interaction.reply({ embeds: [embed] });

  },

};

