const { exec, spawn, execSync } = require("child_process")
const fs = require("fs");
const {getRandom}=require('../../lib/myfunc')

module.exports = {
    name: "fat",
    alias: ["fateffect"],
    desc: "To add fat effect in a song",
    category: "Audio Edit",
    usage: "fat <reply to audio>",
    react: "🍁",
    start: async (Icaa, m, { text, prefix,quoted,pushName,mime,body }) => {

     let media = await Icaa.downloadAndSaveMediaMessage(quoted)
     let set = '-filter:a "atempo=1.8,asetrate=30100"'
     let ran = getRandom('.mp3')
     try{
        exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return m.reply('An error Occurd !')
            let buff = fs.readFileSync(ran)
            Icaa.sendMessage(m.from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
            fs.unlinkSync(ran)
            })

     }catch(e){
         m.reply('An error Occurd ! Please mention an Audio!')
        }
        
    }
}
