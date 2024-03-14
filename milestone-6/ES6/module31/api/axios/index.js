
const makeRequest = async (config) =>{
    return await axios(config);
}


const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then(res =>console.log(res))
    .catch(err => console.log(err));
}

getData();



const createData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "post",
    data: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

createData();

const updatedData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      title: "foddddddddddddo",
      body: "bar",
      userId: 1,
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

updatedData();


const updatedSingData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "patch",
    data: JSON.stringify({
      title: "fodddddddddddddddddddddo",
    }),
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

updatedData();


const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

deleteData();