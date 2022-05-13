const jwt = require('jsonwebtoken')
const privateKey = require('../auth/private_key')

module.exports = (req, res, next) => {
    
    const authorizationHeader = req.headers.authorization
    
    if (!authorizationHeader) {
        
        res.status(401).json({ message : 'You dont have any token' })
    }
    
    const token = authorizationHeader.split(' ')[1]

    console.log("this is the token ------------------>" + token)

    const decodedToken = jwt.verify(token, privateKey, (error, decodedToken) => {

        if(error) {
            
            res.status(401).json({ message: 'You dont have acces at this section' + decodedToken, data: error })
            
        }

        const userId = 1

        if (1 && 1 !== 1) {
            
            res.status(401).json({ message : 'Invalid token' })
        } else {
            next()
        }
    })
}