const express = require('express');
const router = express.Router();
const { getImages } = require('../services/pixabayService');

router.get('/:query', async (req, res) => {
    try {
        const { query } = req.params;
        console.log(`Fetching images for query: ${query}`);
        const images = await getImages(query);
        if (images.length > 0) {
            const imageUrl = images[0].webformatURL;
            res.send(`
                <html>
                <head>
                    <style>
                    body {
                        font-family: Arial, sans-serif;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                        background-color: #e0f7fa; 
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                    }
                    h1 {
                        text-align: center;
                        color: #00796b; 
                    }
                    </style>
                </head>
                <body>
                    <img src="${imageUrl}" alt="Image of ${query}">
                </body>
                </html>
            `);
        } else {
            res.status(404).send(`
                <html>
                <head>
                    <title>No Image Found</title>
                </head>
                <body>
                    <h1>No image found</h1>
                </body>
                </html>
            `);
        }
    } catch (error) {
        console.error(`Error fetching image for query: ${req.params.query}`, error);
        res.status(500).send(`
            <html>
            <head>
                <title>Error</title>
            </head>
            <body>
                <h1>Error fetching image</h1>
                
            </body>
            </html>
        `);
    }
});

module.exports = router;
