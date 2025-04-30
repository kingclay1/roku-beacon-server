// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/beacon/applaunchcomplete', (req, res) => {
  console.log("Beacon received:", req.query);
  res.status(200).send('Beacon received');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
