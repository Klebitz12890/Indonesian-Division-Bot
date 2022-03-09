let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
m.reply(wait)
heum = await fetch(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=089510fd9369ede85213ea91`)
   if (!heum) throw json
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Darkjoke By Official ID Bot', footer, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['darkjoke']
handler.tags = ['other']
handler.command = /^((drag|dark)joke|jokes)$/i

module.exports = handler