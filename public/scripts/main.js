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