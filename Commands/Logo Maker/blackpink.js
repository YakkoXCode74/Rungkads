const maker = require('mumaker')

module.exports = {
    name: "blackpink",
    alias: ["bp"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}blackpink Rungkads Bot*`);
        maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}