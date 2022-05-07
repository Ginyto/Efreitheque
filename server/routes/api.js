const express = require('express');
const router = express.Router();

const sequelize = require('../sequelize')

const { Livre } = require('../sequelize')
const { User } = require('../sequelize')
const { Panier } = require('../sequelize')

// sequelize.syncDB()





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

router.get('/book', (req, res) => {

    Livre.findAll().then(livres => {

        res.json({ livres });
        
    })
});

router.get('/book/:id', (req, res) => {

    const id = req.params.id;

    Livre.findByPk(id).then(livres => {

        res.json({ livres });
    })
});






module.exports = router;