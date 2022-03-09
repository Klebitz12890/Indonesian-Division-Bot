let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=089510fd9369ede85213ea91`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Meme By Official ID Bot', footer, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['meme']
handler.tags = ['other']
handler.command = /^(meme)$/i

module.exports = handler