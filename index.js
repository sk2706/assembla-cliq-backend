import express from "express";

const app = express();
app.use(express.json());

// root test
app.get("/", (req, res) => {
    res.send("Backend is running on Railway!");
});

// Zoho Cliq Handler
app.post("/cliq", (req, res) => {
    console.log("Received:", req.body);

    const msg = req.body.message || "Nothing received";
    res.json({ text: "You said: " + msg });
});

// IMPORTANT: Railway uses dynamic port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
