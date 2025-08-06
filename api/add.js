const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  const { category, video } = req.query;

  if (!category || !video) {
    return res.status(400).json({ error: 'Missing category or video URL' });
  }

  const filePath = path.join(__dirname, '..', 'data.json');
  const data = JSON.parse(fs.readFileSync(filePath));

  if (!data[category]) data[category] = [];
  data[category].push(video);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  res.json({ success: true, message: `Added to ${category}`, total: data[category].length });
};
