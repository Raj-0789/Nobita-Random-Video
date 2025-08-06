const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ error: 'Missing category' });
  }

  const filePath = path.join(__dirname, '..', 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath));

  if (!data[category] || data[category].length === 0) {
    return res.status(404).json({ error: `No videos found in ${category}` });
  }

  const rndmVideo = data[category][Math.floor(Math.random() * data[category].length)];
  res.json({ video: rndmVideo });
};
