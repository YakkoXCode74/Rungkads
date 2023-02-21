const maker = require('mumaker')

module.exports = {
    name: "demon",
    alias: ["evil"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}demon Rungkads Bot*`);
        maker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}