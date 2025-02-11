import express from 'express';
import cors from 'cors';
import multer from 'multer';
import fetch from 'node-fetch';
import { FormData } from 'node-fetch';

const app = express();
const upload = multer();
const port = process.env.PORT || 3001;

app.use(cors());

// Handle form submissions
app.post('/api/getform-proxy', upload.none(), async (req, res) => {
  try {
    const formData = new FormData();
    Object.entries(req.body).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const response = await fetch(
      'https://getform.io/f/bzywlpya?token=tg2J6KHgPYeUXYfYcTRdFkCtLYeKgu6CjSlyfwCCgzkyYIj72i3njepH16GP',
      {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Getform responded with status: ${response.status}`);
    }

    const text = await response.text();
    res.status(response.status).send(text);
  } catch (error) {
    console.error('Error in getform-proxy:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
}); 