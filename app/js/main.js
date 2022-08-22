$(function () {
    
    $('.header__btn').on('click', function() {
        console.log('11111');
        $('.side-menu').removeClass('side-menu--close');
    })
    $('.side-menu__close').on('click', function() {
        console.log('333333');
        $('.side-menu').addClass('side-menu--close');
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });

})