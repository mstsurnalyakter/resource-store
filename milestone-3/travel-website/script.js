const toggleBar = document.getElementsByClassName("navbar-toggle")[0];
const navLinks = document.getElementsByClassName("nav-link ");

toggleBar.addEventListener('click',()=>{
    for(let i = 0; i < navLinks.length; i++){
        navLinks[i].classList.toggle("active");
    }
})
