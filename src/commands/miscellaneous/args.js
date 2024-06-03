const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("args")
    .setDescription("Command with arguments")
    .addBooleanOption((option) =>
      option.setName("boolean").setDescription("boolean")
    )
    .addIntegerOption((option) =>
      option.setName("integer").setDescription("integer")
    )
    .addChannelOption((option) =>
      option.setName("channel").setDescription("channel")
    )
    .addMentionableOption((option) =>
      option.setName("mentionable").setDescription("mentionable")
    ),
  async execute(interaction) {
    const boolean = interaction.options.getBoolean("boolean");
    const integer = interaction.options.getInteger("integer");
    const channel = interaction.options.getChannel("channel");
    const mentionable = interaction.options.getMentionable("mentionable");

    await interaction.reply(
      `Boolean: ${boolean}\nInteger: ${integer}\nChannel: ${channel}\nMentionable: ${mentionable}`
    );
  },
};
