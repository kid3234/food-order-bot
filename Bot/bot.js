const { Telegraf } = require("telegraf");
const TOKEN = "7012820649:AAEagQcG6J6euVOcPkYnLujvLp-F3uz4mlY";
const bot = new Telegraf(TOKEN);

const web_link = "https://addis-crud-pi5a.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();