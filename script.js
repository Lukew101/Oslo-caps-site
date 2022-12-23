const mainMenu = document.querySelector('.main-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', function(){
    mainMenu.classList.toggle('show-menu');
});

closeMenu.addEventListener('click', function(){
    mainMenu.classList.remove('show-menu');
})