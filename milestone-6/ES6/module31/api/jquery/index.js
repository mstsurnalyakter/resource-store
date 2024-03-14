/**
 * ************  add jquery ******************
 *  add jquery library cdn
 *  ajax --> asynchronous javascript and xml
 *
 */

console.clear();

const makeRequest = async (url,method,data) =>{
    try {
         const result = await $.ajax({
           url: url,
           method: method,
           data:data
         });
         return result;
    } catch (err) {
        console.log(err);
    }
}

const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1','GET')
    .then(res => console.log(res))

}

getData();

const createData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: "foo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};

createData();


const updatedData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
    id: 1,
    title: "fdddddoo",
    body: "bar",
    userId: 1,
  }).then((res) => console.log(res));
};

updatedData();


const updatedSingleData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PATCH", {
    title: "EEEEEEEEEEfdddddoo",
  }).then((res) => console.log(res));
};

updatedSingleData();


const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then((res) => console.log(res));
};

deleteData();