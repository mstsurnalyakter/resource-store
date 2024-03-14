/**
 * 4 ways to call api ---> XMLHttpRequest, fetch, axios, jquery
 *
 * fetch() --->> has replaced XMLHttpRequest
 * fetch() --->> global method for making HTTP Request
 * 2 ways to call -->> then, async await
 *
 *
 * + fetch() -->>is easy to use compare to XMLHttpRequest
 * + fetch() -->> return a promise
 * - returned promise can only handle network error
 * - does not support all the older browser
 *
 *  */

console.clear()

const makeRequest = async (url,config) =>{
  /** return promise with through await | return string*/
  const res = await fetch(url,config);

  /** check error*/
  if (!res.ok) {
    const message = `Error: ${res.status}`;
    throw new Error(message);
  }
  // convert json format
  const data = await res.json();
  return data;
}


const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
}

const sendData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const updatedData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo hello world",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};


const updatedSingleData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "Hello World foo hello world",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
}

const deleteData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

deleteData();


