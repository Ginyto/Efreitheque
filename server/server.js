const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const api = require('./routes/api.js');


// set port, listen for requests

app.get("/", (req, res) => {
    this.$router.push({ name: 'home' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


app.use('/api', api)