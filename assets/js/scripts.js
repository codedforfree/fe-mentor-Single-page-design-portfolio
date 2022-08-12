import Alpine from 'alpinejs'


window.Alpine = Alpine

Alpine.start();

// init Swiper:
const swiper = new Swiper('.work-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
});
