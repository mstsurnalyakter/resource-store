// JavaScript BOM
// Popup boxes --> alert, confirm, prompt

// alter box --> alter box use alter user
// confirm ---> confirm box use get confirmation from user
// prompt ---> prompt use to get input from user. When we need get something from when they enter our website then we use prompt

console.clear();
console.log(window);

alert("Error Here");
confirm("hello");

const deleteSomeThing = () => {
  let value = confirm("DO you want to delete?");

  if (value) {
    console.log("deleted");
  } else {
    console.log("not deleted");
  }
};

deleteSomeThing();

prompt("Enter Your name?");

const welcomeMess = () => {
  let h1 = document.createElement("h1");
  let text;

  let name = prompt("Enter Your name.");
  if (name === null || name === "") {
    text = "No name found.";
  } else {
    text = `Welcome ${name}`;
  }
  let textNode = document.createTextNode(text);
  h1.appendChild(textNode);
  // h1.innerText = textNode

  document.body.appendChild(h1);
};

welcomeMess();
