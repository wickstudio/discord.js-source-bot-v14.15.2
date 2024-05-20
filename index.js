const { Client, GatewayIntentBits, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


const clientId = 'Client_Id';

const guildId = 'uildl_Id';

const token = 'Token';

client.commands = new Collection();


const commands = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name, command);

    commands.push(command.data.toJSON());

}

const rest = new REST({ version: '9' }).setToken(token);

(async () => {

    try {

        console.log('Started refreshing application (/) commands.');

        await rest.put(

            Routes.applicationGuildCommands(clientId, guildId),

            { body: commands },

        );

        console.log('Successfully reloaded application (/) commands.');

    } catch (error) {

        console.error(error);

    }

})();

client.on('interactionCreate', async interaction => {

    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {

        await command.execute(interaction);

    } catch (error) {

        console.error(error);

        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

    }

});


client.login(token);