const axios = require("axios");

module.exports = {
  name: "iguser",
  alias: ["instagramuser", "instauser", "iginfo"],
  desc: "To get details of an instagram user",
  category: "Essentials",
  usage: "iguser <instagram username>",
  react: "π",
  start: async (Icaa, m, { text, prefix, pushName,args }) => {
    if (!text)
      return m.reply(
        `Please provide me a instagram username ${pushName} senpai !`
      );
    let igSearchTeram = text;
    try {
      fids = await axios.get(
        `https://api.popcat.xyz/instagram?user=${igSearchTeram}`
      );

      console.log(fids.data)
      const reply = `
*β‘Name:* ${fids.data.full_name}
*π Username:* ${fids.data.username}
*π§ Followers:* ${fids.data.followers}
*β¨ Type:* ${fids.data.private}
*β Verified:* ${fids.data.verified}
*π Following:* ${fids.data.following}
*π€ Post:* ${fids.data.posts}
*π­Bio:* ${fids.data.biography}\n`;
      Icaa.sendMessage(
        m.from,
        { image: { url: fids.data.profile_pic }, caption: reply },
        { quoted: m }
      );
    } catch (err) {
      console.log(err);
      return m.reply(
        `An error occurd ! Please check instagram username ${pushName} senpai !`
      );
    }
  },
};
