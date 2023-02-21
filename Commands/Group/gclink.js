require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "grouplink",
  alias: ["gclink"],
  desc: "To get concurrent group link.",
  category: "Group",
  usage: "gclink",
  react: "🍁",
  start: async (
    Icaa,
    m,
    { prefix, isBotAdmin, isAdmin, metadata,mime }
  ) => {
    if (!isAdmin)
      return Icaa.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    var link = await Icaa.groupInviteCode(m.from);
    var linkcode = `https://chat.whatsapp.com/${link}`;

    try {
      ppgc = await Icaa.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = botImage1;
    }

    try {
      await Icaa.sendMessage(
        m.from,
        {
          image: { url: ppgc, mimetype: "image/jpeg" },
          caption: `\n_🎀 Group Name:_ *${metadata.subject}*\n\n_🔷 Group Link:_\n${linkcode}\n`,
        },
        { quoted: m }
      );
    } catch (err) {
      Icaa.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
