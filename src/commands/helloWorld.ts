import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../interfaces/Command';

export const helloWorld: Command = {
  data: new SlashCommandBuilder()
    .setName('hello')
    .setDescription('respond with hello world'),
  run: async (interaction) => {
    await interaction.reply('Hello World!');
  },
};
