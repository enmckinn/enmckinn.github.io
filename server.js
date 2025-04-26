const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

app.get('/api/news', async (req, res) => {
    try {
        const today = new Date();
        const thirtyDaysAgo = new Date(today);
        thirtyDaysAgo.setDate(today.getDate() - 30);

        const formatDate = (date) => date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
        const fromDate = formatDate(thirtyDaysAgo);

        const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=donald+trump&begin_date=${fromDate.replace(/-/g, '')}&api-key=${NYT_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!data.response.docs || data.response.docs.length === 0) {
            throw new Error("No articles found");
        }

        const headlines = data.response.docs.map(article => article.headline.main);
        res.json({ headlines });
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
