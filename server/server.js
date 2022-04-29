const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const api = require('./routes/api.js');

const Home = window.httpVueLoader("../client/src/views/HomeView.vue")

const routes = [
    { path: '/', component: Home }
]

const router = new VueRouter({ routes })

app.get("/", (req, res) => { 
    this.$router.push('/')
});

app.use((req, res, next) => {
    
    res.setHeader("Access-Control-Allow-Origin", `http://localhost:8081`);

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next();
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


app.use('/api', api)