const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk } = require("../../Database/dataschema.js");



module.exports = {
    name: "cmd",
    alias: ["bot","botswitch"],
    desc: "Enable or disable bot in a group",
    category: "Group",
    usage: "cmd [on/off]",
    react: "🎀",
    start: async (
      Icaa,
      m,
      { args, isBotAdmin, isAdmin, isCreator, reply,prefix,pushName,participants }
    ) => {
      
        if (!isAdmin)
        return Icaa.sendMessage(
          m.from,
          {
            text: `*${pushName}* must be *Admin* to turn ON/OFF bot !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Icaa.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });

      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, botSwitch: "true" }).save();
          Icaa.sendMessage(
            m.from,
            {
              text: `*${botName}* has been Re-Activated in this group!`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Icaa.sendMessage(
            m.from,
            { text: `*${botName}* has been Re-Activated in this group!` },
            { quoted: m }
          );
        } else {
          if (checkdata.botSwitch == "true")
            return Icaa.sendMessage(
                m.from,
                { text: `*${botName}* is already Activated in this group !` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { botSwitch: "true" });
          return Icaa.sendMessage(
            m.from,
            { text: `*${botName}* has been Activated in this group!` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, botSwitch: "false" }).save();
          return Icaa.sendMessage(
            m.from,
            { text: `*${botName}* has been De-Activated in this group !\n\nNow only *Admins* can use bot` },
            { quoted: m }
          );
        } else {
          if (checkdata.botSwitch == "false") return Icaa.sendMessage(
            m.from,
            { text: `*${botName}* is already De-Activated in this group !` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { botSwitch: "false" });
          return Icaa.sendMessage(
            m.from,
            { text: `${botName} has been De-Activated in this group !\n\nNow only *Admins* can use bot` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}cmd on`,
            buttonText: { displayText: "On" },
            type: 1,
          },
          {
            buttonId: `${prefix}cmd off`,
            buttonText: { displayText: "Off" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage2} ,
          caption: `\nPlease click the button below\n*On / Off*\n`,
          footer: `*${botName}*`,
          buttons: buttonsntilink,
          headerType: 4,
        };
        await Icaa.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};