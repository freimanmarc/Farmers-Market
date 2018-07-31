const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.static(__dirname + '/client/build'));

app.get('/zipCode/:zipId', async(req, res) => {
  let data = await axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${req.params.zipId}`);
  res.json(data.results);
})

app.get('/marketDetails/:marketId', async(req, res) => {
  let data = await axios.get(`http://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=${req.params.marketId}`);
    res.json(data);
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
