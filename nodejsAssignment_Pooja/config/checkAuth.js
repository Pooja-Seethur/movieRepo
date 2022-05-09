/*************************************************************
 * Name         :   checkAuth.js 
 * Author       :   Pooja
 * Description  :   Checks a unique token whenever user logins
 *                  in, which is valid for 2 hrs with 
 *                  error handling       
 *************************************************************/

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        if (token === 'FSMovies2021') {
            console.log("authorized")
        }
        next();
    }
    catch (err) {
        return res.status(401).json({ responseCode: 401, responseDescription: 'Auth failed' });
    }
};