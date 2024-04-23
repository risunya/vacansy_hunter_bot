async function clearBotMessage(ctx) {
    try {
        if (ctx.update?.callback_query?.message?.chat?.id != undefined && ctx?.update?.callback_query?.message?.message_id != undefined) {
            await ctx.api.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
        }
    } catch (error) {
        console.error("An error occurred while deleting bot message:", error);
    }
}

async function clearCommandMessage(ctx) {
    try {
        if (ctx?.message?.chat?.id != undefined && ctx?.message?.message_id != undefined ) {
            await ctx.api.deleteMessage(ctx.message.chat.id, ctx.message.message_id - 1);
            await ctx.api.deleteMessage(ctx.message.chat.id, ctx.message.message_id);
        }
    } catch (error) {
        console.error("An error occurred while deleting command message:", error);
    }
}

module.exports = {
    clearBotMessage,
    clearCommandMessage,
}