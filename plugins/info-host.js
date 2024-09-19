let handler = async (m, { conn, command, usedPrefix }) => {
let txt = `🚩 *H O S T* 

*🇮🇳.

🟢 \`\`\`The Host Info\`\`\`

🔮 *Follow on YouTube:* 
• https://youtube.com/@musixeditz-?si=MclPLvWyWLdAA360

⚜️ *Contact (Mateo)*
https://wa.me/916376212352

> *Subscribe My YouTube Channel :D*` 
await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🔵 H O S T 🔵`,
body: `⚜️ Super Hosting 24/7 ⚜️`,
"previewType": "PHOTO",
thumbnailUrl: 'https://i.imgur.com/aajebPy.jpeg', 
sourceUrl: 'https://dash.olympus-host.xyz'}}},
{ quoted: fkontak})
}
handler.tags =['main'] 
handler.help = ['host', 'hosting'] 
handler.command = ['host', 'owner', 'olympushost', 'hosting']
export default handler