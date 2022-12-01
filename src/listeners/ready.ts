import { Activity } from "discord.js";
import { ActivityType } from "discord.js";
import { Presence } from "discord.js";
import { Options } from "discord.js";
import { Client } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }
    await client.application.commands.set(Commands);

    console.log(`${client.user.username} is online`);
    client.user.setActivity('/imagine')
    // client.user.setStatus("online")
  });
};
