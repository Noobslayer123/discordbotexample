const discord = require("discord.js")
const client = new discord.Client

client.on("message", (msg) => {
  if (msg.content.startsWith("AMOGUS!")) {
    msg.channel.send(process.env.msg)
  }
})

client.login(process.env.token)
