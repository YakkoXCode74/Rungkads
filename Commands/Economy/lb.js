const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const fs = require("fs");
const { economy } = require("discord-mongoose-economy/models/economy.js");

 
 module.exports = { 
    name: "leaderboard", 
    desc: "To view the leaderboard of current users", 
    alias: ["lb"],
    category: "Economy", 
    usage: "leaderboard", 
    react: "š", 
    start: async (Icaa, m,{ text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator,eco,ty} ) => { 
        try { 
            let h = await eco.lb('cara', 10);
            if(h.length === 0) {
                return Icaa.sendMessage(m.from, { text: 'No users found on leaderboard.' }, { quoted: m });
            }
            let str = `*Top ${h.length} users with more money in wallet.*\n`;
            let arr = [];
            for(let i = 0; i < h.length; i++){
                let username = await mku.findOne({ id: h[i].userID, name: m.pushName });
                var tname;
                if (username && username.name) {
                    tname = username.name;
                } else {
                    tname = Icaa.getName(h[i].userID);
                }
                str += `*${i+1}*\nā­āāāāāāāāāāāāāā\nā *š Name:-* _${tname}_\nā *āļø User:-* _@${h[i].userID.split('@')[0]}_\nā *š³ Wallet:-* _${h[i].wallet}_\nā *š Bank Amount:-* _${h[i].bank}_\nā *š Bank Capacity:-* _${h[i].bankCapacity}_\nā°āāāāāāāāāāāāāā\n\n`;  	 
                arr.push(h[i].userID);
            }
            Icaa.sendMessage(m.from, { text: str, mentions: arr }, { quoted: m });
        } catch (err) {
            console.log(err);
            return Icaa.sendMessage(m.from, { text: `An internal error occurred while fetching the leaderboard.` }, { quoted: m });
        }
    }
}