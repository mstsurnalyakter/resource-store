const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');

btn1.addEventListener('click',alertMessage);

function alertMessage(){
    alert('Hello World');
}


btn2.addEventListener('click',removeMessage);

function removeMessage(){
    btn1.removeEventListener('click',alertMessage);
}
