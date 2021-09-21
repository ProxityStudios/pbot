import { ClientOptions, Client as DiscordClient, Intents } from "discord.js";

export class Client extends DiscordClient {
  constructor(options?: ClientOptions) {
    super({
      ...options,
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });
  }
}
