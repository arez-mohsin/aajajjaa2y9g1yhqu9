
const { Client, MessageEmbed } = require("discord.js");
var { Util } = require("discord.js");
const client = new Client({ disableEveryone: true });
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss");
const botversion = require("./package.json").version;
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const ms = require("ms");
const jimp = require("jimp");
const math = require("math-expression-evaluator");
const { get } = require("snekfetch");
const guild = require("guild");

const dateFormat = require("dateformat");
var table = require("table").table;
const Discord = require("discord.js");
const cmd = require("node-cmd");
const prefix = "s-";
client.login("");
client.on("ready", async () => {
  console.log(`Logged in as ${client.user.username}!`);
  client.user.setStatus("idle");
  client.user.setActivity(`${prefix}he`, { type: "PLAYING" });
  client.guilds.cache.forEach(g => {
    if (g.member(client.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});

//////////

client.on("message", async message => {
  if (message.content.startsWith(prefix + "help")) {
    let help = new Discord.MessageEmbed()
    .setColor(RA)
      .setThumbnail(message.author.avatarURL({dynamic: "true"}))
    
      .setDescription(`
      
 **
┏━━━━━°❀•°:🎀 - 🎀:°•❀°━━━━━┓
${prefix}shelp = Security CmD

▓▓▓▓▓▓ <a:emoji_35:786619950328315955> ▓▓▓▓▓▓

${prefix}phelp = Public CmD

▓▓▓▓▓▓ <a:emoji_35:786619950328315955> ▓▓▓▓▓▓

${prefix}fhelp = Fun CmD

▓▓▓▓▓▓ <a:emoji_35:786619950328315955> ▓▓▓▓▓▓

${prefix}mhelp = MOD CmD

▓▓▓▓▓▓ <a:emoji_35:786619950328315955> ▓▓▓▓▓▓
┗━━━━━°❀•°:🎀 - 🎀:°•❀°━━━━━┛
**

`);
    message.channel.send(help);
  }
});

////////


const rast = "";
const rastw = "";
const ghallat = "";
const ghallatw = "";
const logosec = "";
const warn = "⚠";
const color = "RANDOM";
let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./configg.json", "UTF8"));
client.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3,
      time: 0.1
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (!message.member.hasPermission("OWNERSHIP")) return;
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544> | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544>| Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544> | Type A `Number` **");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544> | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544> | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544> | Type A `Number` .**");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num)
        return message.channel.send("**<a:warning:786619837383573544> | Type A `0.1 or 0.10` .**");
      if (isNaN(num))
        return message.channel.send(
          "**<a:warning:786619837383573544> | Only Type A `Number` .**"
        );
      config[message.guild.id].time = num;
      message.channel.send(
        `**<:yes:786618192734060562> | Successful Changed To : ${config[message.guild.id].time}**`
      );
    }
    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

client.on("channelCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("channelDelete", async channel => {
  const entry1 = await channel
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Channels\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Delete\` Many \`Rolea\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Create\` Many \`Roles\` .**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      chaCrLimit: 3,
      roleCrLimits: 3
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("TETS");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = "0";
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members.cache
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(
            `**${warn} | ${entry.username} Tryed To \`Kick\` Many \`Members\` .**`
          )
        );
      anti[guild.id + entry.id].actions = "0";
      fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

client.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.id])
      config[member.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        chaCrLimit: 3,
        roleCrLimits: 3
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("TETS");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = "0";
      }, config[member.guild.id].time * 1000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members.cache
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**${warn} | ${entry.username} Tryed To \`Ban\` Many \`Members\` .**`
            )
          );
        anti[member.guild.id + entry.id].actions = "0";
        fs.writeFile("./configg.json", JSON.stringify(config), function(e) {
          if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti), function(e) {
          if (e) throw e;
        });
      }
    }

    fs.writeFile("./configg.json", JSON.stringify(config, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});

/////


////////




///////

client.on("message", message => {
  if (message.content.startsWith(`${prefix}bot`)) {
    const tnx = new Discord.MessageEmbed()
      .setAuthor(client.user.username, client.user.avatarURL())

      .setColor("RANDOM")
      .setTitle(`Info about ${client.user.username}.`)
      .addField(
        "**Ping Bot**",
        `${Date.now() - message.createdTimestamp}` + "MS",
        true
      )
      .addField(
        "**Ram Usage**",
        `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
        true
      )
      .addField("**Name Bot**", `[ ${client.user.tag} ]`, true)
      .addField("**ID Bot**", `[ ${client.user.id} ]`, true)
      .addField("**Prefix Bot**", `[ ${prefix} ]`, true)
      .addField("**Bot Language**", `[ Java Script ]`, true)
      .setFooter("SOURCE PRO");

    message.channel.send(tnx);
  }
});

////////

///////

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(Saad => {
          message.guild.unban(Saad);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args) return message.channel.send("**Please Type the member ID**");
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(
          `<a:x2:669825119492767745> **-** **Done Unbanned ${m.username}**`
        );
      })
      .catch(stry => {
        message.channel.send(
          `<a:x1:669825119904071691> **-** **I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

///////

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content == "count")
    message.reply(`**${message.guild.memberCount}**`);
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "nick")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check Your Permission.");
    if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES"))
      return message.channel.send("Please Check My Permission.");
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send(`**>>> ${prefix}nick @mention nickname**`);
    let args = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!args)
      message.guild
        .member(user)
        .setNickname("")
        .then(m => {
          message.channel.send(
            " " + user.username + " has been reseted nickname "
          );
        })
        .catch(error => {
          message.channel.send("Error: **" + error.message + "**");
        });
    message.guild
      .member(user)
      .setNickname(args)
      .then(m => {
        let embed = new Discord.MessageEmbed()
          .setTitle("Nicknamed User!")
          .setDescription(
            "User: ```" +
              user.username +
              "```\nBy: ```" +
              message.author.username +
              "```\nNickname: ```" +
              args +
              "``` "
          );
        message.channel.send(embed);
      })
      .catch(error => {
        message.channel.send("Error: **" + error.message + "** ");
      });
  }
  if (message.content.toLowerCase() === prefix + "help nick") {
    let nick = new Discord.MessageEmbed()
      .setTitle(`Command: nick`)
      .addField("Usage", `${prefix}nick @user nickname`)
      .addField("Information", "Nicknames");
    message.channel.send(nick);
  }
});

////////

client.on("message", async message => {
  if (message.content.toLowerCase() === prefix + "profile") {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 200).then(
      message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      })
    );
  }
});

/////

client.on("message", message => {
  if (!message.guild) return;
  if (message.author.bot) return;
  let args = message.content.split(" ");
  let command = args[0].toLowerCase();
  if (command === prefix + "clear") {
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ You are missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        `❌ I Am missing the permission \`MANAGE MESSAGES\`.`
      );
    if (!args[1]) {
      message.channel
        .bulkDelete(100)
        .then(m =>
          message.channel
            .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
            .then(p => p.delete({ timeout: 3000 }))
        );
    } else {
      message.delete().then(n => {
        message.channel
          .bulkDelete(args[1])
          .then(m =>
            message.channel
              .send(`\`\`\`\nDeleted ${m.size} messages\n\`\`\``)
              .then(p => p.delete({ timeout: 3000 }))
          );
      });
    }
  }
});

////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'slaw') {
    msg.reply('<a:slaw:786289752570986497> لە تۆش ❤');
  }
});
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Slaw') {
    msg.reply('<a:slaw:786289752570986497> لە تۆش ❤');
  }
});
client.on('message', msg => {
  if (msg.content === 'SLAW') {
    msg.reply('<a:slaw:786289752570986497> لە تۆش ❤');
  }
});
client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Welcome Bro ❤');
  }
});
client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Welcome Bro ❤');
  }
});
client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Welcome Bro ❤');
  }
});
client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Welcome Bro ❤');
  }
});
client.on('message', msg => {
  if (msg.content === 'HELLO') {
    msg.reply('Welcome Bro ❤');
  }
});


////////



//////

////////

client.on("message", storm => {
  if (storm.content.startsWith(prefix + "uinvites")) {
    storm.guild.fetchInvites().then(invs => {
      let user = storm.mentions.users.first() || storm.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      storm.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});

/////////

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "user")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(client.user.username)
      .setThumbnail(client.user.avatarURL())
      .setColor("BLACK")
      .setTitle("Your Info User")
      .addField(" ▶️| Your Name", `<@${prof.author.id}>`)
      .addField(" 🆔| Your ID", `${prof.author.id}`)
      .addField(" 🌐| Create User", prof.author.createdAt.toLocaleString())
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

/////////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "emoji")) {
    if (message.author.bot) return;
    var emojiid = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    console.log(emojiid);
    if (emojiid.length < "18" || emojiid.length > "18" || isNaN(emojiid))
      return message.channel.send(`- Usage  
${prefix}emoji <EmojiID>`);
    else
      message.channel.send("This is the emoji that you requested:-", {
        files: [`https://cdn.discordapp.com/emojis/${emojiid}.png`]
      });
  }
});

//////////////mute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user =
    message.mentions.users.first() || message.guild.members.cache.get(args[1]);
  if (message.content.startsWith(prefix + "mute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}mute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    if (!mute)
      mute = await message.guild.roles.create({
        data: {
          name: "Muted",
          color: "#0000",
          permissions: []
        }
      });
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.add(mute);
    message.channel.send(`**${user.username} has been muted!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help mute`) {
    let mute = new Discord.MessageEmbed()
      .setTitle(`Command: Mute `)
      .addField("Usage", `${prefix}mute @user`)
      .addField("Information", "Mute Members");
    message.channel.send(mute);
  }
});

//////////unmute

client.on("message", async message => {
  let args = message.content.split(" ");
  let user = message.mentions.users.first();
  if (message.content.startsWith(prefix + "unmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check Your Permission MUTE_MEBMERS**"
      );
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send(
        "**Please Check My Permission MUTE_MEBMERS**"
      );
    if (!user)
      return message.channel.send(`**>>> ${prefix}unmute <@mention Or ID>**`);
    let mute = message.guild.roles.cache.find(role => role.name === "Muted");
    message.guild.channels.cache.forEach(async channel => {
      await channel.createOverwrite(mute, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false
      });
    });
    message.guild.member(user).roles.remove(mute);
    message.channel.send(`**removed mute from ${user.username}!**`);
  }
  if (message.content.toLowerCase() === `${prefix}help unmute`) {
    let unmute = new Discord.MessageEmbed()
      .setTitle(`Command: unmute `)
      .addField("Usage", `${prefix}unmute @user`)
      .addField("Information", "unmute Members");
    message.channel.send(unmute);
  }
});

//////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "roles") {
    let roles = message.guild.roles.cache.map(r => `> ${r.name}  `).join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Roles")
      .setDescription(" ```javascript\n" + roles + "``` ");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let roles = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All Roles For Server");
    message.channel.send(roles);
  }
});

////////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "bans") {
    message.guild
      .fetchBans()
      .then(bans => message.channel.send(`**__${bans.size}__ Bans**`))
      .catch(error => {
        message.channel.send(error.message);
      });
  }
  if (message.content.toLowerCase() === prefix + "hbans") {
    let unban = new Discord.MessageEmbed()
      .setTitle(`Command: bans `)
      .addField("Usage", `${prefix}bans`)
      .addField("Information", "bans count");
    message.channel.send(unban);
  }
});

////////avatar

client.on("message", async message => {
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "avatar") {
    let args = message.content.split(" ");
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.member.cache.get(args[1]);
    message.channel.send(
      new Discord.MessageEmbed()
        .setAuthor(user.username, user.avatarURL())
        .setDescription(`**[Avatar Link](${user.avatarURL()})**`)
        .setImage(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    );
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@everyone")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send everyone .```");
  }
});

////////

client.on("message", msg => {
  if (msg.author.bot) return;
  if (msg.content.includes("@here")) {
    if (msg.member.hasPermission("MENTION_EVERYONE")) return;
    if (!msg.channel.guild) return;
    msg.delete();
    msg.reply("```You cant send here .```");
  }
});

//////

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("**Info Server**")
      .addField(" ⚠️| **Server Name:**", `${prof.guild.name}`)
      .addField(" 👑| **Owner Server:**", `${prof.guild.owner}`)
      .addField(" 🔰| **Server ID:**", `${prof.guild.id}`)
      .addField(" ✅| **Created:**", `${prof.guild.createdAt.toLocaleString()}`)
      .addField(" 🚦| **Members:**", `${prof.guild.memberCount}`)
      .addField(" 🔳| **Channels:**", `${prof.guild.channels.cache.size}`)
      .addField(" 🌐| **Region**:", `${prof.guild.region}`)
      .addField(" **Roles:**", ` ${prof.guild.roles.cache.size}`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

////////

client.on("message", message => {
  if (message.content.startsWith(prefix + "slowmode")) {
    if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS"))
      return message.channel.send("🧐 - Please Check Your Permission");
    if (
      !message.guild
        .member(message.client.user)
        .hasPermission("MANAGE_CHANNELS")
    )
      return message.channel.send(
        "🧐 - Please Check My Permission to can edit in this channel."
      );

    let time = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (isNaN(time)) return message.channel.send("**🧐 - Its not a time**");
    if (!time)
      return message.channel.send("**🧐 - Please Type a New SlowMode**");
    message.channel.setRateLimitPerUser(time);
    message.channel.send("**Done Changed A SlowMode To: " + time + "**");
  }
});

//////

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong | :ping_pong: ").then(msg => {
      var PinG = `${Date.now() - msg.createdTimestamp}`;
      var ApL = `${Math.round(client.ping)}`;
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\`\`\``);
    });
  }
});

////////

client.on("message", async message => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.startsWith(prefix)
  )
    return;
  const args = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/),
    commandName = args.shift().toLowerCase();
  if (["ban", "kick"].includes(commandName)) {
    let mode = commandName;
    if (
      !message.member.hasPermission(
        mode == "kick" ? "KICK_MEMBERS" : "BAN_MEMBERS"
      )
    )
      return message.channel.send(
        "**❌ | You don't have Permissions do to this.**"
      );
    let user = message.guild.member(
      message.mentions.users.first() ||
        message.guild.members.cache.find(x => x.id == args[0])
    );
    if (!user) return message.channel.send("**❌ | Member not found!**");
    let bot = message.guild.member(client.user);
    if (user.user.id == client.user.id) return message.channel.send("lol no");
    if (user.user.id == message.guild.owner.id)
      return message.channel.send(`**❌ | You can't ${mode} the owner!**`);
    if (
      user.roles.highest.position >= message.member.roles.highest.position &&
      message.author.id !== message.guild.ownerID
    )
      return message.channel.send(
        `**❌ | You can't ${mode} people higher ranked than yourself!**`
      );
    if (user.roles.highest.position >= bot.roles.highest.position)
      return message.channel.send(
        `**❌ | I can't ${mode} people who are higher ranked than me!**`
      );
    if (!user[`${mode == "ban" ? "bann" : mode}able`])
      return message.channel.send(
        `**❌ | Specified user is not ${mode}able.**`
      );
    user[mode](
      mode == "ban"
        ? { days: 7, reason: `Banned by ${message.author.tag}` }
        : `Kicked by ${message.author.tag}`
    )
      .then(() =>
        message.channel.send(
          `**✅ ${mode == "ban" ? "Bann" : mode}ed __${
            user.user.tag
          }__ (ID: \`${user.user.id}\`)**`
        )
      )
      .catch(console.error);
  }
});

///////

client.on("message", message => {
  if (message.content.startsWith(prefix + "sp")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`[Support](https://discord.gg/TXM3dArZwW)join for helping and supported bot 💜`)
      .setTimestamp()
      .setFooter(`By: ${message.author.tag}`)
      .setAuthor(client.user.username)
      .setThumbnail(message.author.avatarURL)
      .setColor("BLUE");
    message.author.send(embed);
    message.react("✅");
  }
});
var antibots = (fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
////////

client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti bot on")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "On"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor("GREEN")
      .setTitle("AntiBot")
      .setDescription(`Anti Bots Enable <a:emoji_35:786619950328315955>`)
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("✅");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", professor => {
  if (professor.content.startsWith(prefix + "anti bot off")) {
    if (!professor.channel.guild) return;
    if (!professor.member.hasPermission("OWNERSHIP")) return;
    antibots[professor.guild.id] = {
      onoff: "Off"
    };
    var profe = new Discord.MessageEmbed()
      .setAuthor(professor.guild.name)
      .setColor("RED")
      .setTitle("AntiBot")
      .setDescription(
        `Anti Bots Disabled`
      )
      .setTimestamp();
    professor.channel.send(profe).then(p => {
      professor.react("❎");
    });
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});

///////

client.on("message", message => {
  let args = message.content.split(" ");
  if (args[0] === prefix + "hightRole") {
    let user =
      message.mentions.users.first() ||
      client.users.cache.get(args[1]) ||
      message.author;
    if (!user) return message.channel.send(`> ❎ | I Can't Find This User.`);
    let height = message.guild.member(user).roles.highest.id;
    let heightR = message.guild.roles.cache.find(r => r.id === height);
    let embed = new Discord.MessageEmbed()
      .setAuthor(`${user.username} info`)
      .addField(`Height Role:`, heightR)
      .setFooter(
        `Requsted By ${message.author.username}`,
        message.author.displayAvatarURL()
      )
      .setThumbnail(user.displayAvatarURL());
    message.channel.send(embed);
  }
});

///////

client.on("message", message => {
  let commands = message.content.split(" ");
  if (commands[0] == prefix + "say") {
    if (!message.guild) return;
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES"))
      return message.reply("**You Dont Have `MANAGE_MESSAGES` Permission .**");
    if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
      return message.reply(
        "Please Check My Role Permission To `MANAGE_MESSAGES`"
      );
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      return message.channel.send("`Usage : " + prefix + "say <message>`");
    }
    message.delete();
    var embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${args}`)
      .setFooter(`By ${message.author.tag}`);
    message.channel.send(embed);
  }
})
client.on("message", async message => {
  if (message.content.startsWith(prefix + "shelp")) {
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
    .setTitle("**Security CmD**")
      .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()


      .setThumbnail(message.guild.iconURL)
   .setDescription(`
**
> ${prefix}anti ban [numbers]
> ${prefix}anti kick [numbers]
> ${prefix}anti role [numbers]
> ${prefix}anti channel [numbes]
> ${prefix}anti bot [on/off]
> ${prefix}anti prune [on/off]
> ${prefix}anti template [on/off] 

** 

`);
    message.channel.send(help);
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "phelp")) {
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
    .setTitle("**Public CmD**")
      .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()


      .setThumbnail(message.guild.iconURL)
   .setDescription(`
**
> ${prefix}server
> ${prefix}bot
> ${prefix}ping
> ${prefix}profile
> ${prefix}hightRole
> ${prefix}nick
> ${prefix}invite
> ${prefix}avatar 
> ${prefix}member
> ${prefix}time

** 

`);
    message.channel.send(help);
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "fhelp")) {
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
    .setTitle("**Fun CmD**")
      .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()


      .setThumbnail(message.guild.iconURL)
   .setDescription(`
**
> ${prefix}muslim
> ${prefix}love
> ${prefix}boom
> ${prefix}slap
> ${prefix}kiss
> ${prefix}hug
** 

`);
    message.channel.send(help);
  }
});
client.on("message", async message => {
  if (message.content.startsWith(prefix + "mhelp")) {
    let help = new Discord.MessageEmbed()
      .setColor("RANDOM")
    .setTitle("**MOD CmD**")
      .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()


      .setThumbnail(message.guild.iconURL)
   .setDescription(`
**
> ${prefix}ban
> ${prefix}kick
> ${prefix}mute
> ${prefix}unmute
> ${prefix}bans
> ${prefix}say
> ${prefix}unban[userid/all]
> ${prefix}lock
> ${prefix}unlock
> ${prefix}nick
> ${prefix}slowmode
> ${prefix}active vc
> ${prefix}channeltopic【enter mess】
> ${prefix}move
** 

`);
    message.channel.send(help);
  }
});
client.on('message',  (message) => {
        if(message.content.startsWith('s-kiss')) {
  let user = message.mentions.users.first();
  if (!user) return message.reply('mention someone to Kiss')
  var kiss = [
"https://media.discordapp.net/attachments/738277612039962688/775017819980431360/image0.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820161179648/image1.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820445868032/image2.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820643262465/image3.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017820853239808/image4.gif",
"https://media.discordapp.net/attachments/738277612039962688/775017821129932860/image5.gif",       
"https://media.discordapp.net/attachments/738277612039962688/775017821611753472/image7.gif",
"https://media.discordapp.net/attachments/725046590242291763/775020613109678090/image0.gif",  

  
  
  ];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} kiss ${user.username}!`)

.setImage(kiss[Math.floor(Math.random() * kiss.length)])

message.channel.send(embed)
        }})
client.on('message',  (message) => {
        if(message.content.startsWith('s-hug')) {
  let user = message.mentions.users.first() 
  if (!user) return message.reply('mention someone to Hug')

  
  let hugs = [
    "https://media.discordapp.net/attachments/738277612039962688/775010008437096508/image0.gif"
  ,"https://media.discordapp.net/attachments/738277612039962688/775010008676433945/image1.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008823103508/image2.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010008982224896/image3.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009151045692/image4.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009322094602/image5.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009578340382/image6.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009796575262/image7.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010009972867082/image8.gif",
  "https://media.discordapp.net/attachments/738277612039962688/775010010152566804/image9.gif"
  
  
  ];

  const embed = new Discord.MessageEmbed()
.setDescription(`${message.author.username} Hugs ${user.username}!`)

.setImage(hugs[Math.floor(Math.random() * hugs.length)])
.setFooter('')
message.channel.send(embed)
           
        }})
client.on("guildCreate" , hama => {
  if(hama.memberCount < 50 ){
    console.log(`  name ( ${hama.name} ) zhmaray memberakan ( ${hama.memberCount}) created by MrHAMA`)//by MrHAMA
    hama.leave();
  }
})
