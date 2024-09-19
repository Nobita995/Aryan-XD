var handler = async (m, { conn, participants, usedPrefix, command }) => {
    if (!m.mentionedJid[0] && !m.quoted) {
        return conn.reply(m.chat, '🚩 *Tag or reply to the message of the person you want to remove*', m, rcanal );
    }

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

    const groupInfo = await conn.groupMetadata(m.chat);
    const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
    const ownerBot = global.owner[0][0] + '@s.whatsapp.net';
    //const nn = conn.getName(m.sender);

    if (user === conn.user.jid) {
        return conn.reply(m.chat, '🚩 Bot removed from the group', m, rcanal, );
    }

    if (user === ownerGroup) {
        return conn.reply(m.chat, '🚩 Can not remove admin in this group', m, rcanal, );
    }

    if (user === ownerBot) {
        return conn.reply(m.chat, '🚩 Not delete the owner', m, rcanal );
    }

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

//conn.reply('573012482597@s.whatsapp.net', `🚩 Un Admin Acabo De Eliminar Un Usuario En El Grupo:\n> ${groupMetadata.subject}.`, m, rcanal, );
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick','remove','warn','sacar','ban'];
handler.admin = true;
handler.group = true;
handler.register = true
handler.botAdmin = true;

export default handler;