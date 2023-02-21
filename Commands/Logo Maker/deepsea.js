const maker = require('mumaker')

module.exports = {
    name: "deepsea",
    alias: ["deepseastyle"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}deepsea Rungkads Bot*`);
        maker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}