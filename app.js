//'use strict';
const TelegramApi = require('node-telegram-bot-api')

const token = '6373394979:AAG9pQ-LqeNm0Ssw_iO-J6avm4_Txr_vpZ4'

const bot = new TelegramApi(token, { polling: true })

const buttons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }, { text: '100', callback_data: '1.1' }, { text: '100', callback_data: '1.2' }, { text: '100', callback_data: '1.3' }, { text: '100', callback_data: '1.4' }],
      [{ text: '100', callback_data: '2.1' }, { text: '100', callback_data: '2.2' }, { text: '100', callback_data: '2.3' }, { text: '100', callback_data: '2.4' }],
      [{ text: '100', callback_data: '3.1' }, { text: '100', callback_data: '3.2' }, { text: '100', callback_data: '3.3' }, { text: '100', callback_data: '3.4' }],
      [{ text: '100', callback_data: '4.1' }, { text: '100', callback_data: '4.2' }, { text: '100', callback_data: '4.3' }, { text: '100', callback_data: '4.4' }],
    ]
  })
}

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'Hello' },
    { command: '/info', description: 'your info' },
  ])

  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    /* first try to comunication */

    if (text === '/start') {
      await bot.sendSticker(chatId, 'https://chpic.su/_data/archived/stickers/w/wt/wtfishe.webp')
      await bot.sendMessage(chatId, 'IDI DOMOY', buttons)
      return bot.sendMessage(chatId, `your info: ${msg.from.first_name}, ${msg.from.last_name}, ${msg.from.username}, ${msg.from.id}`)
    }

    if (text === '/info')
      return bot.sendMessage(chatId, `your info: ${msg.from.first_name}, ${msg.from.last_name}, ${msg.from.username}, ${msg.from.id}`)

    //console.log(msg)
    return bot.sendMessage(chatId, 'shut up!!!')
  })

  bot.on('callback_query', async msg => {
    const chatId = msg.message.chat.id;
    const data = msg.data;
    console.log(msg)
    return bot.sendMessage(chatId, `${data}`)
  })
}


start();