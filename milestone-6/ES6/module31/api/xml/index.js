console.clear()

/**
 * event --> onload(), onerror()
 * properties --> response, responseText, responseType, responseURL, status, statusText
 * function --> open(), send(),setRequestHeader()
 */

const makeRequest = (method,url,data) =>{
     return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = () => {
          let data = xhr.response;
          //    console.log(xhr.status);
          console.log(xhr.statusText);
          console.log(JSON.parse(data));
        };

        xhr.onerror = () => {
          console.log("Error is occur.");
        };

        xhr.send(JSON.stringify(data));
     })
}

const getData = () =>{
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
    .then(res=>console.log(res))
}

getData();

// const sendData = () =>{
//     makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     });
// }
// // full body updated --> put
// const updatedData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title: "fooMa",
//     body: "barMa",
//     userId: 1,
//   });
// };

// // full body updated --> PATCH
// const updatedSingleData = () => {
//   makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
//     title: "This is change",
//   });
// };

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
// };

// // deleteData();
// getData()
