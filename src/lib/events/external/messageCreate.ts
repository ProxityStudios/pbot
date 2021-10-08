import { Constants, Message } from "discord.js";

import { Event } from "../event";

export default class MessageCreateEvent implements Event {
  on = Constants.Events.MESSAGE_CREATE;

  invoke(message: Message) {
    console.log("message create event");
    console.log(message);
  }
}
