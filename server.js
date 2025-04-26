const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/news', async (req, res) => {
    try {
        const apiKey = process.env.NEWS_API_KEY; // Store API key in .env file
        const url = `https://newsapi.org/v2/everything?q=donald%20trump&sortBy=relevancy&apiKey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
