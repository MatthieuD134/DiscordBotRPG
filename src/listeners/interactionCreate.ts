import { Client, CommandInteraction, Interaction } from 'discord.js';
import { CommandList } from '../commands/_commandList';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (interaction.isCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
): Promise<void> => {
  // handle slash command
  console.log(
    'interaction from ',
    interaction.user.username,
    ': ',
    interaction.commandName
  );
  for (const Command of CommandList) {
    if (interaction.commandName === Command.data.name) {
      await Command.run(interaction);
      break;
    }
  }
};
