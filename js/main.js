
/* ---------------- Sticky Header -------------- */
let header=document.querySelector(".header");

window.addEventListener("scroll",()=>{
    if (window.scrollY > 100 ){
        header.classList.add("sticky");
        
    }else{
        header.classList.remove("sticky");
    }
})
/* ---------------- Nav Menu --------------- */
let hamburgerBtn=document.querySelector(".hamburger-btn");
let navMenu=document.querySelector(".nav-menu ul");

hamburgerBtn.addEventListener("click",()=>{
    if (!navMenu.classList.contains("active")){
        navMenu.classList.add("active");
    }else{
        navMenu.classList.remove("active");
    }
})
/* ------------ video editing --------------*/
let videoContainer=document.querySelector(".video-container");
let playBtn= document.getElementById("play-btn");
let video= document.getElementById("video");

playBtn.addEventListener("click",(e)=>{
    if (video.paused){
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        video.play();
       videoContainer.style.setProperty("--afterBack","none");
    }else{
        e.target.classList.add("fa-play");
        e.target.classList.remove("fa-pause");
        video.pause();
        videoContainer.style.setProperty("--afterBack","rgb(0,0,0,45%)");
    }
});
// Current Time
setInterval(()=>{
    document.getElementById("time").innerHTML=video.currentTime.toFixed(2)+" / "+video.duration.toFixed(2);
},100)
/* ------------------- CountDown --------------------*/
let nums =document.querySelectorAll(".third-section .down .num");
let sectionDown =document.querySelector(".third-section .down");
let started=false; // function started ? no

window.onscroll =function(){
    if (window.scrollY >=2100 && window.scrollY <=2800 ){
        if (!started){
            nums.forEach((num)=>countDown(num));
        }
        started=true;
    }   
}
function countDown(e){
    let goal=e.dataset.goal;
    let count=setInterval(()=>{
        e.textContent++;
        if(e.textContent == goal){
            clearInterval(count);
        }
    },1000 / goal);
}
/* ------------------- Testimonial Slider --------------*/
let sliderContainer=document.querySelector(".testi-slider-container"),
slides=document.querySelectorAll(".testi-item"),
slidesWidth=sliderContainer.offsetWidth;

let slideIndex=0;

slides.forEach((slide)=>{
    slide.style.width=slidesWidth + "px";

    sliderContainer.style.width=slidesWidth * slides.length + "px";
})

// Testi Slider Nav
let nextBtn=document.querySelector(".testi-slider-nav .next-btn");
let prevBtn=document.querySelector(".testi-slider-nav .prev-btn");

nextBtn.addEventListener("click",()=>{
    if(slideIndex ===slides.length-1){
    slideIndex=0;
    }else{
    slideIndex++;
}
sliderContainer.style.marginLeft= -(slidesWidth * slideIndex) + "px";
})


prevBtn.addEventListener("click",()=>{
    if(slideIndex===0){
    slideIndex=slides.length-1;
    }else{
    slideIndex--;
}
sliderContainer.style.marginLeft= -(slidesWidth * slideIndex) + "px";
})
/* ------------------------- Faq Box ---------------------*/
let faqs=document.querySelectorAll(".faq");

faqs.forEach(faq=>{
    faq.addEventListener("click",()=>{
        faq.classList.toggle("active");
    })  
})


