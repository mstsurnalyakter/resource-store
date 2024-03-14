axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));


const payload = {name:'JOhn',age:30};
axios.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(payload))
.then(res =>{
    console.log(res);
})
.catch(err =>{
    console.error(err)
})