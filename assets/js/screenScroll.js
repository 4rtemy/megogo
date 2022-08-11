const screenSlider = new Swiper('.page', {
    wrapperClass: "page__wrapper",
    slideClass: "section",
    direction: "vertical",
    slidesPerView: "auto",
    parallax: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensivity: 1,
    },
    watchOverflow: true,
    speed: 800,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    navigation: {
        nextEl: '.section-introduction__arrow',
    }
});