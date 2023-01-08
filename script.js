const mainMenu = document.querySelector('.main-menu');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const openAbout = document.querySelector('.open-about');
const openRugby = document.querySelector('.open-rugby');
const openGetInvolved = document.querySelector('.open-get-inv');
const getInvolvedNav = document.querySelector('.getinv-drop');
const rugbyNav = document.querySelector('.rugby-drop');
const aboutNav = document.querySelector('.about-drop');



// Nav Menu
openMenu.addEventListener('click', function(){
    mainMenu.classList.toggle('show-menu');
});

closeMenu.addEventListener('click', function(){
    mainMenu.classList.remove('show-menu');
});

openAbout.addEventListener('click', function(){
    aboutNav.classList.toggle('show-second-menu');
});

openRugby.addEventListener('click', function(){
    rugbyNav.classList.toggle('show-second-menu');
});

openGetInvolved.addEventListener('click', function(){
    getInvolvedNav.classList.toggle('show-second-menu');
    console.log(getInvolvedNav);
});

// Home Page image slider

const images = ['/Images/team-hands-in.jpg', '/Images/oslo-pirates-together.jpg', '/Images/captain-talk.jpg', '/Images/Line-defence.jpg', '/Images/2-caps-tackle-other.jpg', '/Images/trond-caps-together-2.jpg', '/Images/caps-player-running-ball.jpg', '/Images/caps-trond-together.jpg', '/Images/caps-2014.jpg'];
const homeImage = document.querySelector('.home-image');
const leftImgSlider = document.querySelector('.left-img-slider');
const rightImgSlider = document.querySelector('.right-img-slider');
const interval = setInterval(function(){
    starthomeImage();
}, 8000);
var index = 1;

starthomeImage = () => {
    homeImage.src = images[index++];
    if (index > images.length - 1) index = 0;
};