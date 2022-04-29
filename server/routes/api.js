const express = require("express");

const router = express.Router();



router.get("/hello", (req, res) => { 
    res.json({
        message: "This is a hello message from the server."
    });
});















module.exports = router;