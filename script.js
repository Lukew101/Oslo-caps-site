// Nav menu
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-menu-ul");
    const navMenuUl = document.querySelectorAll(".nav-menu-ul li");
    const overlay = document.querySelector(".overlay");
    
    burger.addEventListener('click', () =>{
        // Toggle nav
        nav.classList.toggle("nav-active");

        // Animate links
        navMenuUl.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5}s`
            }
        });
        // Burger animation
        burger.classList.toggle("toggle");
        // Back nav screen shade
        overlay.classList.toggle("overlay-opn");
    });
};
navSlide();

// Nav sub-Menu
const mainMenu = document.querySelector('.main-menu');
const openAbout = document.querySelector('.open-about');
const openRugby = document.querySelector('.open-rugby');
const openGetInvolved = document.querySelector('.open-get-inv');
const getInvolvedNav = document.querySelector('.getinv-drop');
const rugbyNav = document.querySelector('.rugby-drop');
const aboutNav = document.querySelector('.about-drop');

openAbout.addEventListener('click', function(){
    aboutNav.classList.toggle('show-second-menu');
});

openRugby.addEventListener('click', function(){
    rugbyNav.classList.toggle('show-second-menu');
});

openGetInvolved.addEventListener('click', function(){
    getInvolvedNav.classList.toggle('show-second-menu');
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