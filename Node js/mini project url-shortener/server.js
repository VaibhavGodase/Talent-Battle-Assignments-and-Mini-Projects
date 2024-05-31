const express = require('express');
const mongoose = require('mongoose');
const ShortId = require('shortid');
require('dotenv').config();
const Url = require('./models/url');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    const shortUrl = ShortId.generate();

    const url = new Url({ longUrl, shortUrl });
    await url.save();

    res.json({ shortUrl: `${req.headers.host}/${shortUrl}` });
});

app.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });

    if (url) {
        return res.redirect(url.longUrl);
    } else {
        return res.status(404).json('URL not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
