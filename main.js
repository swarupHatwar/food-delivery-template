
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener('click', function(){
    mobile.classList.toggle('is-active');
    mobileLink.classList.toggle('active');
});

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if (window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle('active');
    }
});

var step = 100;
var stepFilter = 60;
var scrolling = true;

$(".back").bind("click", function(e){
    e.preventDefault();
    $(".highlite-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$('.forward').bind("click", function(e){
    e.preventDefault();
    $('.highlite-wrapper').animate({
        scrollLeft: "+=" + step + 'px'
    });
});

$(".back-menu").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".forward-menu").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});
