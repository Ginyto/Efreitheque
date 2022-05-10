const express = require('express');
const router = express.Router();

const sequelize = require('../sequelize')
const { Op } = require("sequelize");

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

router.get('/cart', (req, res) => {

    Panier.findAll().then(paniers => {

        res.json({ paniers });
        
    })
});

router.get('/book/:id', (req, res) => {

    const id = req.params.id;

    Livre.findByPk(id).then(livres => {

        res.json({ livres });
    })
});

router.get('/lookingfor/:target', (req, res) => {
    const target = req.params.target;

    Livre.findAll(
        {
            where: {
                titre: {
                    [Op.like]: `%${target}%`
                }
            }
        }
    ).then(livres => {

        res.json({ livres });
    })
});


//POST

router.post('/:user/:idbook', (req, res) => {
    const user = req.params.user;
    const idbook = req.params.idbook;

    Panier.create({

        id_user: user,
        id_livre: idbook

    }).then(livre => {
        res.json({ livre });
    })
        .catch(err => {
        res.json({ err });
    })
});

router.post('/update/:user/:idbook/:qte', (req, res) => {
    const user = req.params.user;
    const idbook = req.params.idbook;
    const qte = req.params.qte - 1;

    Livre.update({
        
        quantite: qte
    },
    
        {
            where: {
                id: idbook
            }
        }

    ).then(livre => {
        res.json({ livre });
    }
    ).catch(err => {
        res.json({ err });
    })

});


//Delete
router.delete('/:user/:idbook', (req, res) => {
    const user = req.params.user;
    const idbook = req.params.idbook;

    Panier.destroy({
        where: {
            id_user: user,
            id_livre: idbook
        }
    }).then(livre => {
        res.json({ livre });
    })

})






module.exports = router;