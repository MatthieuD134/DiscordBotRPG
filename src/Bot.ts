import config from '../config';
import { Client } from 'discord.js';
import ready from './listeners/ready';
import interactionCreate from './listeners/interactionCreate';

const token = config.DISCORD_BOT_TOKEN;
console.log(token);

console.log('Bot is starting...');

const client = new Client({
  intents: [],
});

ready(client);

interactionCreate(client);

client.login(token);
