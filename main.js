const advertise = document.querySelector('.advertise');
const close = document.querySelector('.close');
window.onload = function () {
  setTimeout(function (){
    advertise.style.display = "block"
  }, 2000)
}
close.addEventListener('click', () => {
  advertise.style.display = "none";
})

let payment = document.getElementById("popup");
function openPopup(){
  popup.classList.add("open-popup");
}
function closePopup(){
  popup.classList.remove("open-popup");
}