/**
 * 1. install jsonwebtoken and  cookie-parser
 * 2. jwt.sign(payload,secret,{expiresIn:"1h"})
 * 3. token client
 */


/**
 * how to store token in the client side
 * 1. memory --> ok type
 * 2. localStorage --> ok type(XSS)
 * 3. cookies:http only
 */

/**
 * 1. set cookies with http only.
 * 2.cors setting
 * 3. client side axios setting
 */

/**
 * 1. to send cookies from the client make sure you added withCredentials true for the api call using axios
 * 2. use cookie parser as middleware
 */