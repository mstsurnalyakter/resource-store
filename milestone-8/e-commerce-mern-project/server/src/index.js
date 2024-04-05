const connectDB = require('../config/db');
const app = require('./app');
const { port } = require('./secret');
const hostName = '127.0.0.1';

app.listen(port,hostName,async ()=>{
    console.log(`Server is running at http://${hostName}:${port}`);
    await connectDB();
})
