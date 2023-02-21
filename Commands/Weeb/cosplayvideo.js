const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "cosplayvideo",
  alias: ["cv","cosplayamv","cosplayvid" ],
  desc: "To get a random cosplayvideo",
  category: "Weeb",
  usage: `cosplayamv`,
  react: "😉",
  start: async (Icaa, m, { prefix }) => {
    var VID = await getBuffer(`https://cosplay-video-api.onrender.com`);
    var Button = [
      {
        buttonId: `${prefix}cv`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      video: VID,
      gifPlayback:true,
      caption: `Cosplayvideo API by *Team Rungkads*\n\n*API link:* https://shubhapratimbiswas.tech\n`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Icaa.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
