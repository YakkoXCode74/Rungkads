module.exports = {
  name: "promote",
  alias: ["prom"],
  desc: "Promote a member",
  category: "Group",
  usage: "promote @user",
  react: "🍁",
  start: async (
    Icaa,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName,groupAdmin }
  ) => {
    if (!isAdmin) {
      return Icaa.sendMessage(
        m.from,
        { text: `${mess.useradmin}` },
        { quoted: m }
      );
    }
  //
    if (!text && !m.quoted) {
      return Icaa.sendMessage(
        m.from,
        { text: `Please tag a user to *Promote*!` },
        { quoted: m }
      );
    } else if (m.quoted) {
      var mentionedUser = m.quoted.sender;
    } else {
      var mentionedUser = mentionByTag[0];
    }

    let userId = (await mentionedUser) || m.msg.contextInfo.participant;
    if(groupAdmin.includes(userId)){
      return Icaa.sendMessage(
        m.from,
        { text: `@${
          mentionedUser.split("@")[0]
        } Senpai is already an *Admin* !`,mentions: [mentionedUser], },
        { quoted: m }
      );
    }

    try {
      await Icaa.groupParticipantsUpdate(m.from, [userId], "promote").then(
        (res) =>
          Icaa.sendMessage(
            m.from,
            {
              text: `Congratulations @${
                mentionedUser.split("@")[0]
              } Senpai 🥳, you have been *Promoted* Successfully !`,
              mentions: [mentionedUser],
            },
            { quoted: m }
          )
      );
    } catch (error) {
       Icaa.sendMessage(
        m.from,
        { text: `${mess.botadmin}` },
        { quoted: m }
      ); 
    }
    
  },
};
