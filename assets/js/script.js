// tyed text


var typingEffect = new Typed(".type-Text",{
    strings : ["Frontend Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 });

 let nav = document.querySelector(".navbar");
 window.onscroll = function() {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    } else{
        nav.classList.remove("header-scrolled");
    }
 }

 let navbar = document.querySelectorAll(".nav-link");
 let collaspe = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collaspe.classList.remove("show");
    })
})

// tab 
var mixer = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-item'
    },
    animation: {
        duration: 300
    }
});