import { Client } from 'discord.js';
import { CommandList } from '../commands/_commandList';

export default (client: Client): void => {
  client.on('ready', async () => {
    if (!client.user || !client.application) {
      return;
    }

    const commandData = CommandList.map((command) => command.data.toJSON());

    await client.application.commands.set(commandData);

    console.log(`${client.user.username} is online`);
  });
};
