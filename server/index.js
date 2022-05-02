const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

const api = require('./routes/api');

app.use(bodyParser.json());
app.use(cors());
app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Hello World from Index');
});





app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)});