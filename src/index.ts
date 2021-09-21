import { Constants } from "discord.js";
import DotEnv from "dotenv";

import { Client } from "./lib/client";

DotEnv.config();
const client = new Client();

client.login(process.env.CLIENT_TOKEN);

client.on(Constants.Events.CLIENT_READY, () => {
  console.log("Client logged in as " + client.user.tag);
});
