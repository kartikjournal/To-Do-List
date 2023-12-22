const inputbox = document.getElementById('input-box')
const listcontainer = document.getElementById('list-container')
let li = document.querySelector('li')
li.innerHTML = localStorage.getItem('value')
function start(){
    let li = document.createElement('li')
    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li)
    localStorage.setItem('value', inputbox.value)
}
function myFunction(){
    document.getElementById("navbar").classList.toggle("nav-hide");
    document.getElementById("out").classList.toggle("hide");
}