const express = require("express");
const cors = require("cors");

const cliqService = require("./services/cliqService");

const app = express();
app.use(express.json());
app.use(cors());

// Health check
app.get("/", (req, res) => {
    res.send("Assembla-Cliq Backend Running Successfully!");
});

// Main bot handler endpoint
app.post("/cliq", async (req, res) => {
    console.log("📩 Received from Cliq:", req.body);

    try {
        const responseMessage = await cliqService.handleMessage(req.body);
        res.json(responseMessage);
    } catch (err) {
        console.error("❌ Error:", err);
        res.json({ text: "Oops! Something went wrong 😢" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("🚀 Server running on port", PORT);
});
