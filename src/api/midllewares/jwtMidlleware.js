const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET;

exports.verifyToken = (req, res, next) => {
    let token =  req.headers['authorization'];

    if (token !== undefined) {
        
        jwt.verify(token, jwtKey, (error, decoded) => {
            if (error) {
                res.status(403);
                console.log(error);
                res.json({ message: "Token invalide." });
            }
            else {
                req.user = decoded;
                next();
            }
        })
    }
        else {
            res.status(403);
            res.json({ message: "Acces interdit" });
        
        }
}