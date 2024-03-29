const { jwt } = require('../utils/auth')
require('dotenv').config()

/**
 * Function to verify weather toke exists or not
 * @param {string} token 
 * @returns 
 */
function token_provided(token){
    if(!token){
        return  false;
    }else{
        return true;
    }
}

/**
 * verifying token and returning user data from it.
 * @param {token} token 
 * @returns 
 */
async function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY , (err, decoded) => {
            if (err) {
                // Token verification failed
                reject(err);
            } else {
                // Token is valid, return the decoded payload
                resolve(decoded);
            }
        });
    });
}

module.exports = { token_provided, verifyToken }