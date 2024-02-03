// navigation bar function 
function myMenuFanction(){
    var menuBtn = document.getElementById("MyNavMenu");
    if(menuBtn.className === "nav-menu"){
        menuBtn.className += "responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// shadow on navigation bar while scrolling 
window.onscroll = function() {headerShadow()};
function headerShadow(){
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";  
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";  
    }
}

//  Animation 
 const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

//  home 
 sr.reveal('.featured-text-card',{})
 sr.reveal('.featured-name',{delay: 100})
 sr.reveal('.featured-text-info',{delay: 200})
 sr.reveal('.featured-text-btn',{delay: 200})
 sr.reveal('.social_icons',{delay: 200})
 sr.reveal('.featured-image',{delay: 300})

