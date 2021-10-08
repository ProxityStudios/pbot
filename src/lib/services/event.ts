import Fs from "fs";
import { promisify as Promisify } from "util";

import { Options } from "event-service";

import { PbotCluster } from "../client";
import { Event } from "../events/event";

export default class EventService {
  events: Event[] = [];

  constructor(private lib: PbotCluster, private options: Options) {}

  async loadEvents(): Promise<void> {
    const readdir = Promisify(Fs.readdir);
    const eventFiles = await readdir(this.options.eventsPath);

    for (const file of eventFiles) {
      const { default: Event } = await import(
        `${this.options.eventsPath}/${file}`
      );
      const event = Event && new Event();

      if (!event?.on) continue;
      this.events.push(new Event() as never);
    }

    this.bindEvents();
  }

  bindEvents(): void {
    console.log(`${this.events.length} events loading.`);

    for (const event of this.events) {
      this.lib.on(event.on, event.invoke.bind(event));
    }
  }
}
