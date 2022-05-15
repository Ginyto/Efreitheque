const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const privateKey = require('../auth/private_key')
const auth = require('../auth/auth');

const sequelize = require('../sequelize')
const { Op } = require("sequelize");

const { Livre } = require('../sequelize')
const { User } = require('../sequelize')
const { Panier } = require('../sequelize')

//sequelize.syncDB()





//GET

router.get('/', (req, res) => {
    res.json({ message: 'Hello World from API test' })
});

router.get('/hello', (req, res) => {
    res.json({ message: 'This is a Hello World from your API rest by using axios' })
});

router.post('/login', (req, res) => {

    const name = req.query.name
    const mdp = req.query.mdp


    User.findOne({
        where: {
            pseudo: name
        }
    }).then(user => {

        if (user) {

            bcrypt.compare(mdp, user.password, (err, result) => {

                if (result) {

                    //JWT
                    const token = jwt.sign({ id: user.id }, privateKey, { expiresIn: '5min' });

                    res.json({ message: 'Login successful', user: user, auth: true, token: token })

                } else {

                    res.json({ message: 'Login failed -> wrong Password', auth: false })
                }
            })
        }
        else {
                res.json({ message: 'Login failed -> Wrong Username', auth: false })
            }
    })

})

router.post('/signup', (req, res) => {

    const name = req.query.name
    const mdp = req.query.mdp

    bcrypt.hash(mdp, 10).then(hash => {
            
        User.create({

            pseudo: name,
            password: hash,
            admin: false

        }).then(user => {
            res.json({ message: 'Signup successful', user: user, sign : true })
        })
        .catch(err => {
            res.json({ message: 'Signup failed', err: err, sign : false })
        })   
    })

});


router.get('/book', auth, (req, res) => {

    Livre.findAll().then(livres => {

        res.json({ livres });
        
    })
});

router.get('/cart/:iduser', (req, res) => {

    const iduser = req.params.iduser

    Panier.findAll({
        where: {
            id_user: iduser
        }
    }).then(paniers => {

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


router.post('/addbook', auth, (req, res) => {

    const titre = req.query.titre;
    const auteur = req.query.auteur;
    const publication = req.query.publication;
    const couverture = req.query.couverture;

    

    Livre.create({

        titre: titre,
        auteur: auteur,
        publication: publication,
        couverture: couverture,
        quantite: 5
        
    }).then(livre => {
        
        res.json({ livre, message: 'Livre ajouté' });
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

router.delete('/deletebook', auth, (req, res) => {
    const idbook = req.query.idbook;

    console.log("this is a test ------------> ", idbook)

    Livre.destroy({

        where: {
            id: idbook
        }

    }).then(livre => {
        res.json({ livre });
    }
    ).catch(err => {
        res.json({ err });
    })

})






module.exports = router;