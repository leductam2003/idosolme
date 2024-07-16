const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/:refCode', async (req, res) => {
    const refCode = req.params.refCode;
    const apiUrl = `https://zofrlhlhqd.execute-api.ap-southeast-1.amazonaws.com/api/white-list/page?ref=${refCode}&page=1&size=100000`;

    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
