/**
 * ACCESS_TOKEN_SECRET generate require('crypto').randomBytes(64).toString('hex')
 * install jsonwebtoken
 * const jwt = require("jsonwebtoken");
 * jwt.sign(payload,secret,{expiresIn:"time"})
 * token send client side
 *
 */

/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. localStorage --> ok type(XSS)
 * 3. cookies: http only
 */

/**
 * 1. set cookies with http only. for development secure:false
 * 2. cors
 *  app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
 * 3. client side axios setting
 * in axios set withCredentials:true
 */

/**
 * 1. to send cookies from the client make sure you added withCredentials true for the api call using axios
 * 2. use cookie parser as middleware
 */


/**
 *
 * --------------------------------------
 *            Make API Secure
 * --------------------------------------
 *
 * The person who should have access
 *
 * concept:
 * 1. assign two tokens for each person (access token,refresh token)
 * 2. access token contain : user identification (email,role etc.).valid for shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * 4. if refresh token is invalid then logout the user
 *
 */



/**
 * 1. jwt ---> json web token
 * 2. install jsonwebtoken
 * 3. token generate: sign the user --> it take three things -->data , secretKey, expiresIn Time
 * 4. 
 */