//  Scroll Reveal Animation 

window.sr = ScrollReveal({ reset: true });
sr.reveal('.reveal', { duration: 1200 });

// Smooth Scroll

$('a').smoothScroll({
    offset: 0
});

// Active link highlight
const scrollLink = $('.scroll');

$(window).scroll(function () {
    const scrollLocation = $(this).scrollTop();

    scrollLink.each(function () {

        const test = $(this.hash);
        const sectionOffset = $(this.hash).offset().top - 360;

        console.log(sectionOffset);
        if (sectionOffset <= scrollLocation) {
            $(this).parent().addClass('active pulse');
            $(this).parent().siblings().removeClass('active pulse');
        }
    })
});
   