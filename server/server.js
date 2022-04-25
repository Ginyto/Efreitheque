const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;


app.get("/", (req, res) => {
    res.json({ message: "Bienvenu à l'efreitheque" });
});


// set port, listen for requests

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});