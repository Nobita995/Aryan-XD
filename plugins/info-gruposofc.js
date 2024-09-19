let media = './src/Grupo.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '⚡️', key: m.key } })
let str = `*📍𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐂𝐇𝐀𝐍𝐍𝐄𝐋*

   *_〾̷̸‣⃝⃨⃛⃰⁝̵̓ᝒ̷̸͙🌸̶̩ܻᝒ̷̸͙𓂃🎀 ͢𝐌᭄𝐮͎𝐬͎̽𝐢𝐱͜͡͡ ❥͜͡⋆᭄᳭̽̽»𓆩֟֯፝𓆪𝝣⃯ᵴͦ𝛒⃨ᷫ𝛆ͨ🄲⃪⃯𝛊ᷨ𝛂⃨ͦꝆ᷽ͭ🍁⃝⃙̻⃮̋⃛⃰⁌̷̸̊͟⿻᳔̶̷̸_*
  ┃🧸❏ ${gp1}

   *_ ͟͞〾⃝̵͡𝑬⃗ꭙȾ⃯𝑟𝘦𝑚⃖𝚎֟֯፝͜❀̵⃕𝖏♡̵̭̭̎͟͞ ₂₀፝֟֯࣪࣪࣪₁₂_*
┃🧸❏ https://youtube.com/@musixeditz-?si=MclPLvWyWLdAA360
*_╰━━━━━━━━━━━━━━━━⊜_*
`
await conn.sendButton(m.chat, str, `͟͞ ࠱𒄬 ⃝⃝𝐀– 𝐫𝐲͡𝐚͜𝐧 𝐱͜͡ᴆ ⸙ -❯ ࠭ ͟͞\n` + wm, media, [
['Menu List 💖', '/lista']], null, [
['⏤͟͞ू⃪ ፝͜⁞𝐌᭄𝐮𝐬𝐢𝐱↻-♪ ✦✰⃔࿐', `${md}`]], fkontak)}
                      
handler.command = ['grupos','linksk','gruposofc','gruposoficiales']
handler.register = true
handler.exp = 33

export default handler