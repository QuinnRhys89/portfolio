'use strict';

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    draggable: true,
    wrapAround: true
});

//  Scroll Reveal Animation 

window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal', { duration: 1200 });

// Smooth Scroll

$('a').smoothScroll({
    offset: 0
});

// Active link highlight
var scrollLink = $('.scroll');

$(window).scroll(function () {
    var scrollLocation = $(this).scrollTop();

    scrollLink.each(function () {

        var test = $(this.hash);
        var sectionOffset = $(this.hash).offset().top - 360;

        console.log(sectionOffset);
        if (sectionOffset <= scrollLocation) {
            $(this).parent().addClass('active pulse');
            $(this).parent().siblings().removeClass('active pulse');
        }
    });
});