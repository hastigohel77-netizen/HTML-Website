/* MUSIC */

const song = document.getElementById("song");

window.addEventListener("load", function(){

    song.play().catch(function(){
        console.log("Autoplay blocked by browser");
    });

});


function startWebsite(){

    song.play().catch(function(){
        console.log("Music could not start");
    });

}


/* SLIDESHOW */

let currentSlide = 0;

const slides = document.querySelectorAll(".slide");


function showSlide(index){

    slides.forEach(function(slide){
        slide.classList.remove("active");
    });

    if(index >= slides.length){
        currentSlide = 0;
    }

    if(index < 0){
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}


function changeSlide(direction){

    currentSlide += direction;

    showSlide(currentSlide);

}


/* AUTOMATIC SLIDESHOW */

setInterval(function(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

},5000);


/* FINAL BUTTON */

function showLove(){

    alert(
        "Obviously YOU, My Gotuuu ❤️🥹♾️"
    );

}


/* FLOATING HEARTS */

setInterval(function(){

    const heart =
    document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() * 100 + "%";

    heart.style.animationDuration =
    (4 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },9000);

},700);