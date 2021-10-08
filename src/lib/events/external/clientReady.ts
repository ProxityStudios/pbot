import { Constants } from "discord.js";

import { PbotCluster } from "../../client";
import { Event } from "../event";

export default class ClientReadyEvent implements Event {
  on = Constants.Events.CLIENT_READY;

  invoke(lib: PbotCluster): void {
    console.log("ready event");
    console.log(lib.config);
  }
}
