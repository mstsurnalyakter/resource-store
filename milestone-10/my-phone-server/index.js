const express = require("express");
const phones = require('./phones.json');
const cors = require("cors");
const app = express();
app.use(cors())
const port = 5000;

app.get("/",(req,res)=>{
    res.send("Phone from server")
})


app.get("/phones",(req,res)=>{
    res.send(phones)
})

app.get("/phones/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    console.log('i need data for id:',id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)

})

app.listen(port,()=>{
    console.log(`Server is running at:http://localhost:${port}`);
})