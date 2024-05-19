/**
 * 1. jwt --> json web token
 * 2. i jsonwebtoken
 * 3.create api set to cookie.
 * 4. generate token using jwt.sign  http only,secure,sameSite
 * 5. from client side: axios withCredentials true
 * 6. cors setup origin and credentials:true
 *
 *
 */

/**
 * 1. for secure api calls
 * 2. server side: install cookie parser and user it as a middleware
 * 3. req.cookies
 * 4. on the client side: make api call using axios withCredentials: true or credentials:include while using fetch
 *
 */


/**
 * not get cookies
 * 1. withCredentials: true not user client side
 * 2. not install cookie-parser
 * 3. not user cookie-parser as a middleware
 */