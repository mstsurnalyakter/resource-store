/**
 * axios is JavaScript library
 * it helps to make request from browser (plain js/Vue/React/Angular), node.js
 *
 * + very easy to use
 * + it supports all modern browser include IE
 * + it return promise
 * + Throws error brilliantly
 * + No need to set header cause axios is intelligent
 *
 *
 * axios(config)
 * axios(url [, config])
 *
 * axios.get(url [, config])
 * axios.post(url [,config])
 * axios.put(url [, config])
 * axios.patch(url [, config])
 * axios.delete(url [,config])
 *
 * axios returns response object - data, status, statusText, header , config
 */

console.clear();

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      id: 1,
      title: "fooggggggg",
      body: "bar",
      userId: 1,
    }),
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      title: "fdddddddddoo",
    }),
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
