const maker = require('mumaker')

module.exports = {
    name: "neondevil",
    alias: ["ndevil","nd","neond"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}neondevil Rungkads Bot*`);
        maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${text}`,]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}