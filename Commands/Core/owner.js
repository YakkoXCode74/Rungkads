const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../Database/dataschema.js");

module.exports = { 

    name: "owner", 
    desc: "To view the list of current Mods", 
    alias: ["modlist","mods","mod"],
    category: "Core", 
    usage: "owner", 
    react: "š", 
    start: async (
      Icaa, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator,owner,includes,modStatus} 
    ) => { 

        try { 
        
            var modlist = await mku.find({addedMods: "true"});
            var modlistString = "";
            var ownerList = global.owner;
            modlist.forEach(mod => {
              modlistString += `\n@${mod.id.split("@")[0]}\n`
            });
            var mention = await modlist.map(mod => mod.id);
            let xy = modlist.map(mod => mod.id);
            let yz = ownerList.map(owner => owner+"@s.whatsapp.net");
            let xyz = xy.concat(yz);

            ment = [ownerList.map(owner => owner+"@s.whatsapp.net"), mention];
            let textM = `             š§£  *${botName} Mods*  š§£\n\n`;

            if(ownerList.length == 0){
              textM = "*No Mods Added !*";
            }

            for (var i = 0; i < ownerList.length; i++) {
              textM += `\nć½ļø @${ownerList[i]}\n`
            }

            if(modlistString != ""){
              for (var i = 0; i < modlist.length; i++) {
                textM += `\nš @${modlist[i].id.split("@")[0]}\n`
              }
            } 
            
            if(modlistString != "" || ownerList.length != 0){
               textM += `\n\nš *Don't Spam them to avoid Blocking !*\n\nš For any help, type *${prefix}support* and ask in group.\n\n*š« Thanks for using ${botName}. š«*\n`
            }
            
            return Icaa.sendMessage( 
              m.from, 
              { text: textM, mentions: xyz }, 
              { quoted: m } 
            );

          } catch (err) { 
            console.log(err);
            return Icaa.sendMessage(m.from, { text: `An internal error occurred while fetching the mod list.` }, { quoted: m });
          } 
        }, 
    }
