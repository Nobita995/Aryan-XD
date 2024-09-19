let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍭 *¡THIS CHAT IS NOT REGISTERD!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '🍟 *¡MUSIX-BOT NOT BANNED IN THIS CHAT!*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '🚩 *¡MUSIX-BOT IS ALREADY UNBAN THIS CHAT!*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['mods'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.mods = true 
//handler.group = true

export default handler