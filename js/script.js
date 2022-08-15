
// BURGER
let menuBurger = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu");
menuBurger.addEventListener("click", function(){
   console.log('hi')
   menuBurger.classList.toggle("active");
   headerMenu.classList.toggle("active");
   document.body.classList.toggle("lock");
});
