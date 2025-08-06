import fs from 'fs';
import data from '../data.json';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { category, videoUrl } = req.body;
  if (!category || !videoUrl) return res.status(400).json({ error: 'Missing category or videoUrl' });

  if (!data[category]) data[category] = [];

  data[category].push(videoUrl);

  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  res.json({ success: true, message: `Added to ${category}` });
}
