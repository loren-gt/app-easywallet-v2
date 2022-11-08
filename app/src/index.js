const express = require('express');

require('dotenv').config();

require('../database/config');

const app = express();

const PORT = process.env.PORT

app.get('/', (_req, res) => res.send('Hello World!'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});
