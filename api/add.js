const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const data = require("./data.json");

app.get("/", (req, res) => {
  res.send("Nobita Random Video API is live!");
});

app.get("/random", (req, res) => {
  const randomItem = data[Math.floor(Math.random() * data.length)];
  res.json({ video: randomItem });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
