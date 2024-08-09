const axios = require('axios');
const { PIXABAY_API_KEY } = require('../config/config');

const getImages = async (query, page = 1, perPage = 10) => {
    perPage = Math.max(3, Math.min(perPage, 200));

    try {
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: PIXABAY_API_KEY,
                q: query,
                page,
                per_page: perPage,
                image_type: 'photo'
            }
        });

        return response.data.hits;
    } catch (error) {
        console.error('Error fetching data from Pixabay:', error.response?.data || error.message);
        throw new Error('Error fetching images from Pixabay');
    }
};

module.exports = {
    getImages
};
