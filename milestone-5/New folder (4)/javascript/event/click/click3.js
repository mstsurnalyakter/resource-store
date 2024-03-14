let len = document.querySelectorAll('.btn').length;

for (let i = 0; i < len; i++) {

document.querySelectorAll(".btn")[i].addEventListener("click", () => {
  document.querySelector("h1").innerHTML = "is clicked";
});

}
