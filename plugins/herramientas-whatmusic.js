import fs from 'fs'
import acrcloud from 'acrcloud'
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: 'c33c767d683f78bd17d4bd4991955d81',
access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/audio|video/.test(mime)) { if ((q.msg || q).seconds > 20) return m.reply('᥀·࣭࣪̇˖⚙️◗ 𝙏𝙝𝙚 𝙛𝙞𝙡𝙚 𝙞𝙨 𝙩𝙤𝙤 𝙡𝙖𝙧𝙜𝙚, 𝙩𝙧𝙞𝙢 𝙞𝙩 𝙩𝙤 𝙖𝙩 𝙡𝙚𝙖𝙨𝙩 10 𝙩𝙤 20 𝙨𝙚𝙘𝙤𝙣𝙙𝙨 𝙩𝙤 𝙜𝙚𝙩 𝙧𝙚𝙨𝙪𝙡𝙩𝙨.')
await conn.reply(m.chat, wait, m)
let media = await q.download()
let ext = mime.split('/')[1]
fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`))
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
let txt = `
𝐍𝐎𝐌𝐁𝐑𝐄: ${title}
𝐀𝐑𝐓𝐈𝐒𝐓: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'No encontrado'}
`.trim()
fs.unlinkSync(`./tmp/${m.sender}.${ext}`)
m.reply(txt)
} else throw '᥀·࣭࣪̇˖⛔◗ 𝘼𝙣 𝙪𝙣𝙚𝙭𝙥𝙚𝙘𝙩𝙚𝙙 𝙚𝙧𝙧𝙤𝙧 𝙤𝙘𝙘𝙪𝙧𝙧𝙚𝙙, 𝙞𝙣𝙩 2  𝙎𝙞𝙩 𝙝𝙞𝙢 𝙙𝙤𝙬𝙣 𝙖𝙜𝙖𝙞𝙣, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙 𝙩𝙤 𝙖𝙣 𝙖𝙪𝙙𝙞𝙤 𝙤𝙧 𝙫𝙞𝙙𝙚𝙤.'
}
handler.tags = ['herramientas']
handler.command = ['shazam','quemusicaes','whatmusic']
export default handler