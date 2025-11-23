import express from "express";

const app = express();
app.use(express.json());

// Root check
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Cliq bot handler
app.post("/cliq", (req, res) => {
    console.log("Received from Cliq:", req.body);

    let replyText = "Hello from Node.js backend!";

    if (req.body.message) {
        replyText = "You said: " + req.body.message;
    }

    res.json({ text: replyText });
});

// FIXED!!
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
