/**
 * 1. create a post api on the server side
 * 2.client side send data via post
 * 3. set fetch method inside the fetch  option(second parameter)
 * 4. options will have three things(method,header,body)
 * 5. header: "content-type":"application/json"
 * 6. don't forget to send data by JSON.stringify(data) in the body:JSON.stringify(data)
 * 7. on the server side: don't forget to use app.use(express.json()) middleware
 */