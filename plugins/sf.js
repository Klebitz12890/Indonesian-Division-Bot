// ALYAAXZY RECODE

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} plugins/sticker.js`
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${text}`
    await require('fs').writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
}
handler.help = []
handler.tags = []
handler.command = /^sf$/i

handler.owner = true

module.exports = handler
