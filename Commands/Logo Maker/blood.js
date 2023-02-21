const maker = require('mumaker')

module.exports = {
    name: "blood",
    alias: ["bld"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}blood Rungkads Bot*`);
        maker.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [
    `${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}