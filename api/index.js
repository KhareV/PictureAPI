const express = require('express');
require('dotenv').config();

const imageRoutes = require('../routes/imageRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Image Search API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;/
                    background-color: #e0f7fa; 
                }
                h1 {
                    color: #00796b; 
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <h1>Welcome to the Image Search API! Use the /:query endpoint to search for images.</h1>
        </body>
        </html>
    `);
});

app.use('/', imageRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

module.exports = app;
