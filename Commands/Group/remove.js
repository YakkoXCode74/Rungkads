require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "remove",
  alias: ["rem"],
  desc: "Remove a member from group",
  category: "Group",
  usage: "remove @user",
  react: "🍁",
  start: async (
    Icaa,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag,pushName}
  ) => {
    if (!text && !m.quoted) return m.reply(`Please tag a user to *Remove* from group!`)
    if (!isAdmin) return Icaa.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    if (!text && !m.quoted) {
      return Icaa.sendMessage(
        m.from,
        { text: `Please tag a user to *Remove* !` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let users = (await mentionedUser) || m.msg.contextInfo.participant;

    try {
      await Icaa.groupParticipantsUpdate(m.from, [users], "remove").then(
        (res) =>
          Icaa.sendMessage(
            m.from,
            { text: `User has been *Removed* Successfully by *${pushName}*` },
            { quoted: m }
          )
      );
    } catch (err) {
      Icaa.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
