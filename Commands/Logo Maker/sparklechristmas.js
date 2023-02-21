const maker = require('mumaker')

module.exports = {
    name: "sparklechristmas",
    alias: ["schristmas"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}schristmas Rungkads Bot*`);
        maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}