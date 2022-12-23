const mainMenu = document.querySelector('.main-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');



// Nav Menu
openMenu.addEventListener('click', function(){
    mainMenu.classList.toggle('show-menu');
});

closeMenu.addEventListener('click', function(){
    mainMenu.classList.remove('show-menu');
})


// Home Page image slider
const images = ['/Images/team-hands-in.jpg', '/Images/oslo-pirates-together.jpg', '/Images/captain-talk.jpg', '/Images/Line-defence.jpg', '/Images/2-caps-tackle-other.jpg', '/Images/trond-caps-together-2.jpg', '/Images/caps-player-running-ball.jpg', '/Images/caps-trond-together.jpg', '/Images/caps-2014.jpg'];
const homeImage = document.querySelector('.home-image');
const interval = setInterval(function(){
    starthomeImage();
}, 5000);
var index = 1;

starthomeImage = () => {
    homeImage.src = images[index++];
    if (index > images.length - 1) index = 0;
};