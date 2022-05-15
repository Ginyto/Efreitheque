const express = require('express');
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 3000;

const apirest = require('./routes/api.js')


app.use(cors());
app.use('/api', apirest);


app.get('/', (req, res) => {
    res.send('This is the backend of the project')
});



app.listen(PORT, () => { console.log(`Server started on port ${PORT}`)})