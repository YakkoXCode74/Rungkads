module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Say hello to bot.",
    react: "🧣",
    category: "Core",
    start: async(Icaa, m,{pushName,prefix}) => {
        await Icaa.sendMessage(m.from,{text:`Konichiwa *${pushName}* senpai, I am *${botName}* bot. type *${prefix}help* to get my full command list.`},{quoted:m})
    }
}