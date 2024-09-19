const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('[❗] MENSAJE DE BIENVENIDA CONFIGURADO CORRECTAMENTE PARA ESTE GRUPO*');
  } else throw `[❗] ENTER THE WELCOME MESSEGE YOU WANT TO ADD, USE:*\n*- @user (mention)*\n*- @group (nombre de grupo)*\n*- @desc (description de grupo)*`;
};
handler.help = ['setwelcome <text>'];
handler.tags = ['group'];
handler.command = ['setwelcome'];
handler.admin = true;
export default handler;