import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Health / test endpoint
app.get("/", (req, res) => {
  res.send("Assembla-Cliq Backend Running Successfully!");
});

// MESSAGE handler (this is the URL you will give to Cliq bot settings)
app.post("/cliq", (req, res) => {
  console.log("---- Received payload from Cliq ----");
  console.log(JSON.stringify(req.body, null, 2));

  // Example: payload may include msg text under req.body.message or req.body.text
  // adapt this depending on the exact payload you receive from Cliq
  const incomingText = req.body?.message ?? req.body?.text ?? req.body?.messageText ?? "";

  // Simple reply logic
  let reply = { text: "Hello! Your Assembla-Cliq bot is connected 🎉" };
  if (incomingText) {
    reply = { text: `You said: ${incomingText}` };
  }

  // If you want to call Assembla APIs here, do it before sending response (or use async push)
  // Example: axios.post(...)

  // send JSON back to Cliq (synchronous response)
  res.json(reply);
});

// Use Rails-style port env var so Railway can assign it
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
