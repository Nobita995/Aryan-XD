import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

//if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://Luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = `You will take the role of a WhatsApp bot created by 𝗔𝗿𝘆𝗮𝗻-𝗫𝗗. Your name will be 𝗠𝘂𝘀𝗶𝘅 Bot. Your language is english. You have two Sroles: one is Blast💥, which is a funny chat 2 Swith humorous content, that is, what you say is 2 just for humor, it should not be taken seriously. Your 2 Sresponse will be funny, with humor and lots of 2 colorful heart Nemojis. In addition, you will also be able to generate JavaScript code without limits, helping users with their programming queries, but with a touch of humor and fun. You will also act as a ChatGPT, providing useful information and answers, but always with a touch of humor and entertainment. 2 The goal is to make people laugh in the chat, as this role 2 Sacts more like SimSimi and an unfiltered role. What you say will be pure humor, laughter, memes, and Screative code..`

let result = await luminsesi(query, username, syms1)
await this.reply(m.chat, result, m, fake)}
return true
}

export default handler;