This source is the source for the Wick® Studio application on the Discord platform.  It is used to develop Discord bots using discord.js.

 The following steps explain how to use the source:

 1. Install all necessary libraries.  You can use npm to install them with the following command:
    ```
    npm install discord.js @discordjs/rest discord-api-types fs
    ```

 2. Create a Discord app and get a Client ID and Token Bot.  You can do this by logging into https://discord.com/developers and creating a new app.

 3. Replace 'Client_Id' with the Client ID of your application, replace 'Guild_Id' with the Guild ID of the server on which you want to use the bot, and replace 'Token' with the Token Bot of your application in the following codes.

 4. There is a folder called "commands" in the same folder that contains the main code.  Place all the command files you want to add in this folder with .js extension.

 5. Run the code and the bot will load the commands and reload them into the application on startup.

 6. You can use the following link to join the Wick Studio server in Discord and get help if you have any questions:
    https://discord.gg/wicks

 Make sure the following variables in your code are updated:
 - clientId: 'Client_Id' should be replaced with your application's Client ID.
 - guildId: You must replace 'Guild_Id' with the Guild ID of the server you want to use the bot on.
 - token: 'Token' should be replaced with your app's Token Bot.

 After running the source, you can use the commands you placed in the “commands” folder by typing them in the chat on the specific Discord server.
