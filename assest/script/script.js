$(document).ready(function () {
    $('.main-menu-mobile > i').click(function (e) {
        // $('.main-menu-mobile-popup-container').show(300);
        $(".main-menu-mobile-popup-container").toggleClass('active')
    });
    $('.main-menu-shop-btn').click(function (e) {
        e.preventDefault();
        $('.main-menu-shop-container').slideToggle(300);
    });
    $('.main-menu-shop-btn').mouseenter(function () {
        if ($(window).width() > 770) {
            $('.main-menu-shop-container').fadeIn(300);
        }
    });
    $('.main-menu-shop-container').mouseleave(function () {
        if ($(window).width() > 770) {
            $(this).fadeOut(200);
        }
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.main-menu-mobile-popup-container, .main-menu-mobile > i').length) {
            $('.main-menu-mobile-popup-container').toggleClass('active');
            $('.main-menu-shop-container').slideUp(300);
        }
    });
});
const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", asd);

function asd() {
    if (slides.length > 0) {
        slides[slideindex].classList.add("displayslide");
        intervalid = setInterval(nextbutton, 5000);
    }
}

function showslide(index) {
    if (index >= slides.length) {
        slideindex = 0;
    } else if (index < 0) {
        slideindex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displayslide");
    });
    slides[slideindex].classList.add("displayslide");
}

function backbutton() {
    clearInterval(intervalid);
    slideindex--;
    showslide(slideindex);
    intervalid = setInterval(nextbutton, 5000);
}

function nextbutton() {
    slideindex++;
    showslide(slideindex);
}

