const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Assembla-Cliq Backend Running Successfully!");
});

// Endpoint for bot (we will configure Cliq to call this)
app.post("/cliq", (req, res) => {
    console.log("Received from Cliq:", req.body);
    res.json({
        text: "Hello! Your Assembla-Cliq bot is connected 🎉"
    });
});

// Start server on port 3000
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
