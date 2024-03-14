const user = {
    id:1,
    name:'Surnaly',
    job:'Web Developer'
}

console.log(JSON.stringify(user));


const shop = {
    owner:'Alia',
    address:{
        street:'kkdk',
        city:'dhaka',
        country:'db'
    },
    product:["laptop","mic","monitor"],
    revenue:44400,
    isOpen:true,
    isNew:false
}


const shopJSON = JSON.stringify(shop);
const shopObj = JSON.parse(shopJSON)
console.log(shopJSON);
console.log(shopObj);