const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://YokkoEddy23:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");



module.exports = {
    name: "mine",
    alias: ["hunt", "dig", "chop"],
    desc: "Gives all bot commands list",
    react: "🔨",
    category: "rpg",
    usage: "mine",
    start: async (Icaa, m, {prefix,pushName}) => {
  
  console.log("Fetching user inventory from database...");
  let user = await player.findOne({id:m.sender});
  if(!user) {
    console.log("User not found in database, sending error message...");
    return Icaa.sendMessage(m.from, { text:` 😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: m });
  }
  console.log("User inventory retrieved successfully.");
  let inventory = user.inventory;
  
  const sections = [{
    "title": "🔖１． ＷＯＯＤＥＮＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.woodenaxe}`,
            "rowId": `${prefix}hunt2 woodenaxe`
        }
       ]
   },
        {
           "title": "🔖２． ＩＲＯＮＰＩＣＫＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.ironpickaxe}`,
            "rowId": `${prefix}hunt2 ironpickaxe`
        }
       ]
   },
        {
           "title": "🔖３． ＳＴＯＮＥＰＩＣＫＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.stonepickaxe}`,
            "rowId": `${prefix}hunt2 stonepickaxe`
        }
       ]
   },
        {
           "title": "🔖４． ＤＩＡＭＯＮＤＰＩＣＫＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.diamondpickaxe}`,
            "rowId": `${prefix}hunt2 diamondpickaxe`
        }
    ]
}
]
let con = `
Hello, 
1 | Please select an axe you want to use for mining.
`
let ments = [m.sender]

const listMessage = {
footer: `*${botName}*`,
text: 'Powered By TEAM Rungkads',
title: con,
buttonText: `CLICK HERE ⎙`,
mentions: ments,
headerType: 4,
sections
}
await Icaa.sendMessage(m.from, listMessage,{ quoted:m })

}
}



