import Path from "path";

import { Client, ClientOptions, Intents } from "discord.js";
import DotEnv from "dotenv";
import { Config } from "pbot-cluster";

import EventService from "./services/event";
export class PbotCluster extends Client {
  config: Config;

  constructor(options?: ClientOptions) {
    super({
      ...options,
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    });

    this.config = this.loadConfigs();
    new EventService(this, {
      eventsPath: Path.resolve(__dirname, "events", "external"),
    }).loadEvents();
    this.onLoad();
  }

  onLoad(): void {
    this.login(this.config.token);
  }

  private loadConfigs(path?: string): Config {
    DotEnv.config({ path: path });
    return {
      token: process.env.CLIENT_TOKEN,
    };
  }
}
