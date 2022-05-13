const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

//Importing the models
const LivreModel = require('./models/Livre');
const UserModel = require('./models/User');
const PanierModel = require('./models/Panier');



//BDD
const sequelize = new Sequelize( "efreitheque", "root", "gianlucca",{

    dialect: "mysql",
    host: "localhost"
    
});

//authentication
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully to Efreitheque')  

} catch (error) {
    console.error('Unable to connect to the database efreitheque', error)
}  


//Creating the models and syncing them with the database
const Livre = LivreModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Panier = PanierModel(sequelize, DataTypes);



const syncDB = () => {

    return sequelize.sync({ force: false }).then(() => {

        console.log('Livres has been synced successfully');

        Livre.create({
            titre: 'Death of Doctor Strange (2021) #1',
            auteur: 'Jed Mackay',
            publication: 'September 22, 2021',
            couverture: 'https://i.annihil.us/u/prod/marvel/i/mg/9/03/6142604d8a947/clean.jpg',
            quantite: 5
        })
        
        Livre.create({
            titre: 'Death of Doctor Strange (2021) #2',
            auteur: 'Jed Mackay',
            publication: 'October 20, 2021',
            couverture: 'https://i.annihil.us/u/prod/marvel/i/mg/6/d0/6169ef434f2b6/clean.jpg',
            quantite: 5
        })
            
        Livre.create({
            titre: 'Death of Doctor Strange (2021) #3',
            auteur: 'Jed Mackay',
            publication: 'November 24, 2021',
            couverture: 'https://i.annihil.us/u/prod/marvel/i/mg/6/b0/619e63954bda3/clean.jpg',
            quantite: 5
        })
        
        Livre.create({
            titre: 'Death of Doctor Strange (2021) #4',
            auteur: 'Jed Mackay',
            publication: 'December 29, 2021',
            couverture: 'https://i.annihil.us/u/prod/marvel/i/mg/f/10/61d4c4fa1faf5/clean.jpg',
            quantite: 5
        })
            
            
        Livre.create({
            titre: 'Death of Doctor Strange (2021) #5',
            auteur: 'Jed Mackay',
            publication: 'January 26, 2022',
            couverture: 'https://i.annihil.us/u/prod/marvel/i/mg/5/b0/61cf40567ca00/clean.jpg',
            quantite: 5
        })


        bcrypt.hash('admin', 10).then(hash => {

            User.create({

                pseudo : 'admin',
                password : hash,
                admin: true

            })
            .then(user => { console.log(user) })
                .catch(err => { console.log(err) })

        })


    }, (err) => {
        console.log('An error occurred while creating the table:', err)
    })



}

module.exports = {
    syncDB, Livre, User, Panier
}








