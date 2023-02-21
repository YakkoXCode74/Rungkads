const maker = require('mumaker')

module.exports = {
    name: "neongreen",
    alias: ["gereenneon","gerenneon","ngreen"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}ngreen Rungkads Bot*`);
        maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}