import data from '../data.json';

export default function handler(req, res) {
  const category = req.query.category;

  if (!category || !data[category] || data[category].length === 0) {
    return res.status(404).json({ error: 'No videos found in this category' });
  }

  const randomIndex = Math.floor(Math.random() * data[category].length);
  const randomVideo = data[category][randomIndex];

  res.json({ videoUrl: randomVideo });
}
