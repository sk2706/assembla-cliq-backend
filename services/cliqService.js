const replyBuilder = require("../utils/replyBuilder");

async function handleMessage(body) {
    const message = body.text?.toLowerCase() || "";

    if (message.includes("hello") || message.includes("hi")) {
        return replyBuilder.text("Hi! 👋 How can I help you today?");
    }

    if (message.includes("ticket")) {
        return replyBuilder.text("Would you like to view or create a ticket?");
    }

    return replyBuilder.text("Sorry, I didn't understand that 🤔");
}

module.exports = { handleMessage };
