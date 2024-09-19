import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `_𝐖𝐫𝐢𝐭𝐞 𝐚 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐚𝐟𝐭𝐞𝐫 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝:_ \n*${usedPrefix + command} Billie Eilish - Bellyache*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
╭ׅׄ̇─͓̗̗─ׅ̻ׄ╮۪̇߭⊹߭̇︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇߭︹ׅ۪ׄ̇߭̇⊹
┟─⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🅳🄾🅆🄽🄻🄾🄰🄳🅂໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╮
╭┄─🍂⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪🅼🅄🅂🄸🅇໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╯
│
├ ⚘݄𖠵⃕⁖𖥔. _*🅃𝕚𝕥𝕦𝕝𝕠*_
├» ${yt_play[0].title}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┄
├ ⚘݄𖠵⃕⁖𖥔. _*🄿𝕦𝕓𝕝𝕚𝕔𝕒𝕕𝕠*_
├» ${yt_play[0].ago}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌┈
├ ⚘݄𖠵⃕⁖𖥔. _*🄳𝕦𝕣𝕒𝕔𝕚𝕠𝕟*_
├» ${secondString(yt_play[0].duration.seconds)}
├╌╌╌╌╌╌╌╌╌╌╌╌┄
├ ⚘݄𖠵⃕⁖𖥔. _*🅅𝕚𝕤𝕥𝕒𝕤*_
├» ${MilesNumber(yt_play[0].views)}
├╌╌╌╌╌╌╌╌╌╌┄
├ ⚘݄𖠵⃕⁖𖥔. _*🄰𝕦𝕥𝕠𝕣(𝕒)*_
├» ${yt_play[0].author.name}
├╌╌╌╌╌╌╌╌┈
├ ⚘݄𖠵⃕⁖𖥔. _*🄴𝕟𝕝𝕒𝕔𝕖*_
├» ${yt_play[0].url}
╰ׁ̻۫─۪۬─۟─۪─۫─۪۬─۟─۪─۟─۪۬─۟─۪─۟─۪۬─۟─۪─۟┄۪۬┄۟┄۪┈۟┈۪`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['𝐌 𝐄 𝐍 𝐔 💥', `${usedPrefix}menu`],['🔥 𝗔 𝗨 𝗗 𝗜 𝗢',`${usedPrefix}play5 ${yt_play[0].url}`],['🔥 𝗩 𝗜 𝗗 𝗘 𝗢',`${usedPrefix}play6 ${yt_play[0].url}`]], null, null, fgif2)
} catch (e) {
await conn.reply(m.chat, `*[ ! ] THERE WAS AN ERROR IN THE COMMAND PLEASE TRY LATER..*`, fkontak, m, rcanal)
console.log(`❗❗ᴇʀʀᴏʀ ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
handler.register = true 
handler.group = true
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}