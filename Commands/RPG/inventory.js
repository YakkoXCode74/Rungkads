const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { player, axe } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://YokkoEddy23:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");


module.exports = {
    name: "inventory",
    desc: "View your mine inventory.",
    alias: ["inv", "items"],
    category: "RPG",
    usage: "inventory",
    react: "ð¹",
    start: async (Icaa, m) => {
        let user = await player.findOne({id:m.sender});
        if(!user) {
            return Icaa.sendMessage(m.from, { text: "You don't have any items in your inventory yet. Use `mine` command to get some." }, { quoted: m });
        }
        let inventory = user.inventory;
        Icaa.sendMessage(m.from, { text: `[ðº INVENTORY ðº]\n\n*ð Golden Apple*: ${inventory.goldenApple}\n*ð¥ Wood*: ${inventory.wood}\n*ð® Stone*: ${inventory.stone}\n*â Iron*: ${inventory.iron}\n*ð Diamonds*: ${inventory.diamonds}\n\n*ð¨Toolsð¨*\n\n*Wooden axe*: ${inventory.woodenaxe}\n*Iron axe*: ${inventory.ironpickaxe}\n*Stone axe*: ${inventory.stonepickaxe}\n*Diamond axe*: ${inventory.diamondpickaxe}` }, { quoted: m });
    }
}



