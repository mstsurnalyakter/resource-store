# E-Commerce MERN Stack Project


- /test -> health check (D) -
- /seed -> seeding some data (D) -
- /api/users (D)

- POST / register -> create the user account (D) -
- POST / activate -> activate the user account (D) -
- GET / profile -> get the user account (D) -
- DELETE/:id -> delete the user account (D) -
- PUT/:id -> update the user account (D) -
- PUT/update-password/:id(D) -> Update the user account (D) -
- POST/forget-password/:id(D) ->update the password-
- POST/forget-password (D) -> forget password
- PUT /reset-password (D) -> reset the password
- PUT - Admit /ban/:id (D) -> ban the user
- PUT - Admin/unban/:id(D) -> unban the user
- GET - Admin /export-users (D) -> export all the users
- GET - Admin - /all-users -> get all users including search pagination (D) -


- /api/auth(JWT Auth = JSON Web Tokens )

  - POST/Login -> isLoggedOut -> user login (D) -
  - POST/logout -> isLoggedIn -> user logout (D) -
  - GET / refresh -> get refresh token (D) -


- Middleware
    - isLoggedIn (D)
    - isLoggedOut (D)
    - isAdmin (D)
    - uploadFile(D)
    - getRefreshToken
    - userValidation(D)
    - runValidation(D)


- /api/categories(CRUD)

    - POST/ -> create the category(Admin)
    - GET/-> get all the categories (Admin)
    - GET/-> :id -> get single category (Admin)
    - POST/ -> create a category (Admin)
    - DELETE/:id -> delete a category (Admin)
    - PUT /:id -> update a category (Admin)


- /api/products(CRUD)


    - POST/-> create the product (Admin)
    - GET /-> get all the products
    - GET/:id -> get single product
    - POST/-> create a blog (Admin)
    - DELETE/:id -> delete a product (Admin)
    - PUT/:id -> update a product(Admin)


- /api/orders (CRUD)


    - POST/-> create the order (User/Admin)
    - GET/-> get the order(User/Admin)
    - GET/all-order -> get all the orders (Admin)
    - DELETE/:id -> delete an order (Admin)
    - PUT/:id -> update an order (Admin)


- /api/payment

    - GET/token -> get the payment token (User/Admin)
    - POST /process-payment -> process the payment (User/Admin)


- package that we will need


`npm install  express  cors http-errors multer body-parser bcrypt  jsonwebtoken nodemailler cookie-parser`

`npm install --save-dev morgan nodemon`

## Basic SetUp

1. Project plan
2. Evnironment setup
3. Create express server -> express & dotenv package
4. HTTP request & response
5. nodemon and morgan package -> nodemon & morgan package
6. Middleware
7. Express Error Handling Middleware
8. How to handling HTTP Error -> http-errors
9. How to secure API -> xss-clean , express-rate-limit
10. Environment variable & .gitignore
11. MVC Architecture
12. connect to MongoDB database
13. Schema & Model User
14. create seed route for testing
15. GET/api/users -> isAdmin -> getAllUsers -> searchByNAME +
16. responseHandler controller for error or success
17. GET/api/users/:id ->get a single user by id
18. How to create services in the backend 
19. DELETE /api/users/:id -> delete a single user by id
20. PUT /api/users/:id ->  update a single user by id 
21. Refactoring & reuseability,dynamic 
22. DeleteImage helper 
23. POST/api/users/process-rerister -> process the  registration 
24. Create JWT 
25. send email with nodemailer
26. POST/api/users/verify -> verify + register into database
27. POST /api/users -> create an user
28. add multer middleware for file upload
29. filtering files by size and type
30. add express validator middleware -> express-validator package
31. should we store image as string or buffer
32. PUT/api/users/:id -> update a single user by id authentication and authorization
33. POST/api/auth/login -> user login
34. POST/api/auth/logout -> user logout
35. Middleware -> isLoggedIn, isLoggedOut, isAdmin
36. input validation when signed in and refactoring
37. PUT/api/users/ban-user -> ban user
38. PUT/api/users/unban-user -> unban
39. PUT/api/users/update-password -> update password
40. POST/api/users/forget-password -> forget password
41. PUT/api/users/reset-password -> reset password
42. POST/api/auth/refresh-token -> refresh the token
43. GET/api/auth/protected -> verify the token and give access to other routes
44. refactoring
45. modular code structure
46. winston logger library
47. Category API Model and Input validation
48. Category API CRUD -> create Category
49. Category API CRUD -> read Category[GET:/api/categories] , [GET:/api/categories/:slug]
50. Category API CRUD -> update  Category[PUT:/api/categories/:slug]
51. Category API CRUD -> delete Category[DELETE:/api/categories/:slug]
52. Product API -> Product Modal
53. Product API -> Create seed route for testing products
53. Product API -> create product[POST/api/products]
54. Product API -> read product [GET/api/products],[GET/api/products/:slug]
55. Product API -> update product[PUT/api/products/:slug]
56. Product API -> delete product[DELETE/api/products/:slug]
