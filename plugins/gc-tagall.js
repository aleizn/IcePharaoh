let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*πΌπ΄π½ππ°πΉπ΄:* ${pesan}`
let teks = `*βΊπΈ π½ π πΎ π² π° π½ π³ πΎ - πΆ π π πΏ πΎβΊ*\n\nβ ${oi}\n\nβ *π΄ππΈπππ΄ππ°π:*\n`
for (let mem of participants) {
teks += `β£β₯ @${mem.id.split('@')[0]}\n`}
teks += `βπππ ππ‘ππ«ππ¨π‘ πππ¦π’π§π `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciΓ³n)$/i
handler.admin = true
handler.group = true
export default handler
