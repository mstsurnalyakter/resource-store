// BOM --> Browser Object Model
// BOM --> help us to communicate with browser or DOM --> help us to connect html
//Window Object
// location Object
console.clear()
console.log(window);

// location
console.log(location);

//href --> return page URL
console.log(location.href);

// protocol --> return protocol name
console.log(location.protocol);

// hostName --> return hostName
console.log(location.hostname);

// port --> return port
console.log(location.port);

// host[hostName + port] --> return host name
console.log(location.host);

// origin[protocol + host ] --> return origin
console.log(location.origin);

// pathname --> return pathName/fileName
console.log(location.pathname);


let locationDiv = document.querySelector(".location");
locationDiv.children[0].innerText = `Href = ${location.href}`;
locationDiv.children[0].style.color = 'red'
locationDiv.children[0].style.fontSize = '3rem';

locationDiv.children[1].innerText = `Origin = ${location.origin}`;
locationDiv.children[1].style.color = "red";
locationDiv.children[1].style.fontSize = "3rem";

locationDiv.children[2].innerText = `Protocol = ${location.protocol}`;
locationDiv.children[2].style.color = "red";
locationDiv.children[2].style.fontSize = "3rem";


locationDiv.children[3].innerText = `Protocol = ${location.hostname}`;
locationDiv.children[3].style.color = "red";
locationDiv.children[3].style.fontSize = "3rem";

locationDiv.children[4].innerText = `host = ${location.host}`;
locationDiv.children[4].style.color = "red";
locationDiv.children[4].style.fontSize = "3rem";


locationDiv.children[5].innerText = `pathName = ${location.pathname}`;
locationDiv.children[5].style.color = "red";
locationDiv.children[5].style.fontSize = "3rem";

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    location.assign("https://github.com/mstsurnalyakter");
})