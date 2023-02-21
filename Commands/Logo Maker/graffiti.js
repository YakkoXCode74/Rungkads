const maker = require('mumaker')

module.exports = {
    name: "graffiti",
    alias: ["grafiti"],
    desc: "Make text logo.",
    react: "🍁",
    category: "Logo Maker",
    start: async(Icaa, m,{pushName,prefix,text}) => {
        if(!text.includes("|")) return m.reply(`Example: *${prefix}graffiti Rungkads Bot|Team Rungkads*`);
        teks1 = text.split("|")[0]
        teks2 = text.split("|")[1]
        maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
            `${teks1}`,`${teks2}`]).then((data) => Icaa.sendMessage(m.from, { image: { url: data }, caption: `Made by ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}