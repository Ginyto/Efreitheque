const express = require('express');
const router = express.Router();


//GET

router.get('/', (req, res) => {
    res.json({ message: 'Hello World from API test' });
});

router.get('/hello', (req, res) => {
    res.json({ message: 'This is a Hello World from your API rest by using axios' });
});

router.post('/login', (req, res) => {
    res.json({ message: `Here are the parameter : ${req.query.name} ${req.query.pass}` });
    
});






module.exports = router;