const maker = require('mumaker')

module.exports = {
    name: "carbon",
    alias: ["carboneffect","carbonstyle"],
    desc: "Make text logo",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}carbon Rungkads Bot*`);
        maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}