export function homeImageSlider(){
    const images = ['/Images/team-hands-in.jpg', '/Images/oslo-pirates-together.jpg', '/Images/captain-talk.jpg', '/Images/Line-defence.jpg', '/Images/2-caps-tackle-other.jpg', '/Images/trond-caps-together-2.jpg', '/Images/caps-player-running-ball.jpg', '/Images/caps-trond-together.jpg', '/Images/caps-2014.jpg'];
    const homeImage = document.querySelector('.home-image');
    const rightImgSlider = document.querySelector('.fa-chevron-right');
    const leftImgSlider = document.querySelector('.fa-chevron-left');
    const circleContainer = document.querySelector(".circle-container");
    let index = 1;
    
    function pictureSlider(){

        rightImgSlider.addEventListener("click", function(){
            index = (index + 1) % images.length;
            homeImage.src = images[index];
        })

        leftImgSlider.addEventListener("click", function(){
            index = (index - 1 + images.length) % images.length;
            homeImage.src = images[index];
        })
    }
    pictureSlider();

    for(let i = 0; i < images.length; i++){
        const circle = document.createElement("div");
        circle.classList.add("circle");
        circleContainer.appendChild(circle);
    }

    function highlightCircle(){
        const circles = document.querySelectorAll(".circle");

        circles.forEach((circle, i) => {
            if(i === index){
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });
    }
    highlightCircle();

    circleContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("circle")){
            index = Array.from(circleContainer.children).indexOf(event.target);
            homeImage.src = images[index];
            highlightCircle();
        }
    });

    setInterval(() => {
        index = (index + 1) % images.length;
        homeImage.src = images[index];
        highlightCircle();
    }, 8000);
}

// Arrows don't trigger circle color change. Fix this.