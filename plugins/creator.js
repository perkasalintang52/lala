function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Lintang Bot;;;FN:Lintang Bot\nORG:Lintang Bot;\nTEL;type=CELL;type=VOICE;waid=6281322577123:+6281322577123\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '081322577123', 'Lintang', m)
m.reply(m.chat,'*Tuh nomor owner ku*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
