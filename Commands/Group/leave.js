const fs = require("fs");
const { mku } = require("../../Database/dataschema.js");

module.exports = {
    name: "leave",
    alias: ["leavegc"],
    desc: "ask bot to leave a group",
    category: "Group",
    usage: "leave",
    react: "👋",
    start: async (
      Icaa,
      m,
      { args, text,prefix, isCreator, pushName,isAdmin,participants }
    ) => {
      var modStatus = await mku.findOne({id:m.sender}).then(async (user) => {
        if (user.addedMods=="true") {
          return "true";
        }
        else{
          return "false";
        }
      }).catch(error => {
        console.log(error)
        //return Icaa.sendMessage(m.from, { text: `An internal error occurred while checking your mod status.` }, { quoted: m });
      });

      
      if (modStatus=="false"&&!isCreator && !isAdmin)  return Icaa.sendMessage(m.from, { text: 'Sorry, only *GroupAdmins* and *Mods* can use this command !' }, { quoted: m });
      let img ="https://wallpapercave.com/wp/wp9667218.png";

      await Icaa.sendMessage(m.from, { image:{url:"https://wallpapercave.com/wp/wp9667218.png"  }, caption: `I'm Leaving this group on request... \n\nTake care everyone :)`,mentions: participants.map((a) => a.id) , quoted: m }).then(async () => {
         Icaa.groupLeave(m.from).catch(e => {
          Icaa.sendMessage(m.from, { text: `An error Occurd !` }, { quoted: m });
        });
      });

      
            }
          }
