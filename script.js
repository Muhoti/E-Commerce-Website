const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let MainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName('small-img');

if (bar) {
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    });
}

if(close) {
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    });
}

smallImg[0].onclick = function() {
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    MainImg.src = smallImg[0].src;
}
smallImg[2].onclick = function() {
    MainImg.src = smallImg[0].src;
}
smallImg[3].onclick = function() {
    MainImg.src = smallImg[0].src;
}