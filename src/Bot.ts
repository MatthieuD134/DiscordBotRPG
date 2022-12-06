import config from '../config';
import { Client } from 'discord.js';

const token = config.DISCORD_BOT_TOKEN;
console.log(token);

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});

client.login(token);

console.log(client);
