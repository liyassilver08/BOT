require('dotenv').config();
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const { getServer } = require('./libs/api');
var serverData;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', () => {
    let index = 0;

    setInterval(async () => {
        serverData = await getServer(24027830);

        let status = [
            {
                name: '♥ SCUM',
                type: ActivityType.Playing,
            },
            {
                name: `🔫 ${serverData.players}/${serverData.maxPlayers} Players`,
                type: ActivityType.Watching,
            },
            {
                name: `🏡 ${serverData.players}/${serverData.maxPlayers} Players`,
                type: ActivityType.Watching,
            },
            {
                name: '🏆 SiGMA COMMUNTIY',
                type: ActivityType.Listening,
            },
        ];

        index = (index + 1) % status.length;
        client.user.setActivity(status[index]);
    }, 15000);
});


const eventHandler = require('./handlers/eventHandler');
eventHandler(client);

// const dbHandler = require('./handlers/dbHandler');
// dbHandler(client);

client.login(process.env.TOKEN);