const yts = require('youtube-yts');

module.exports = {
    name: "youtubesearch",
    alias: ["yts"],
    desc: "To search a video on YouTube",
    category: "Search",
    usage: `yts <search term>`,
    react: "🍁",
    start: async (Icaa, m, { text, prefix, args }) => {
      if (!args[0])
        return Icaa.sendMessage(
          m.from,
          { text: `Please provide a search term !` },
          { quoted: m }
        );
        let search = await yts(text);
          let num =1;
          let sections = [] 
        for (let i of search.all) {
          //console.log(i)
          const list = {title: `Reseult: ${num++}`,
          rows: [
          
                  {
                   title: `${i.title}`, 
                   rowId: `${prefix}play ${i.title}`,
                   description: `Duration: ${i.timestamp}`
                  }
                  ]
               }
                  sections.push(list)
              }
              var txt = `     *『  YouTube Search Engine  』*\n\n\n_Search Term:_ *${args.join(" ")}*\n\nChoose an item to play\n`

              let buttonMessage = {
                //image: { url: randomimage },
                text: txt,
                footer: `*${botName}*`,
                buttonText: "Choose Song",
                sections,
              };
          
              Icaa.sendMessage(m.from, buttonMessage, { quoted: m });


    }}
