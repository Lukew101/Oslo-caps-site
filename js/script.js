import { homeImageSlider } from "./components/homeImageSlider.js";

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-menu-ul");
const navMenuUl = document.querySelectorAll(".nav-menu-ul li");
const overlay = document.querySelector(".overlay");
const secondNavUlDrop = document.querySelectorAll(".nav-menu-ul li ul li");
// Nav menu
const navSlide = () => {
    burger.addEventListener('click', () =>{
        // Toggle nav
        let navActive= nav.classList.toggle("nav-active");
        // Animate links
        navMenuUl.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 30}s`;
            };
        });
        //Second layer of nav drop
        secondNavUlDrop.forEach((link) =>{
            link.style.animation = `navLinkFade 0.3s ease forwards 0.1s`;
        });
        // Burger animation
        burger.classList.toggle("toggle");
        // Back nav screen shade
        overlay.classList.toggle("overlay-opn");
    });
};
navSlide();

// Close nav when clicking outside of nav bar
function closeNavFromOutside(){
    document.onclick = function(e){
        if(!e.target.closest("nav")){
            nav.classList.remove("nav-active");
            burger.classList.remove("toggle");
            overlay.classList.remove("overlay-opn");
            navMenuUl.forEach((link) =>{
                link.style.animation = "";
            })
        };
    }
};
closeNavFromOutside()

// Nav sub-Menu
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

// Arrow rotation on click
const aboutArrow = document.querySelector('.about-arrow');
const rugbyArrow = document.querySelector('.rugby-arrow');
const getInvArrow = document.querySelector('.getinv-arrow');

aboutArrow.addEventListener("click", function(){
    aboutArrow.classList.toggle("arrow-rotate");
});

rugbyArrow.addEventListener("click", function(){
    rugbyArrow.classList.toggle("arrow-rotate");
});

getInvArrow.addEventListener("click", function(){
    getInvArrow.classList.toggle("arrow-rotate");
});

// Home Page image slider
homeImageSlider();