function clearBotMessage (ctx) {
    if (ctx.update?.callback_query?.message?.chat?.id != undefined && ctx?.update?.callback_query?.message?.message_id != undefined) {
     ctx.api.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id );
    } else {
        null
    }
}

function clearCommandMessage (ctx) {
     if (ctx?.message?.chat?.id != undefined && ctx?.message?.message_id != undefined) {
        ctx.api.deleteMessage(ctx.message.chat.id, ctx.message.message_id - 1);
        ctx.api.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
     } else {
        null
     }
}

module.exports = {
    clearBotMessage,
    clearCommandMessage,
}