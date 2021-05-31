$(document).ready(() => {

    // /scroll from link header
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
    // /scroll from link header

    // burger-menu
    $('.burger').click(() => {
        $('.header__container').toggleClass('menu-open');
    });

    $('.header__menu-link').click(() => {
        $('.header__container').removeClass('menu-open');
    });

    $('.header__btn').click(() => {
        $('.header__container').removeClass('menu-open');
    });
    // /burger-menu

    // choose-language
    $('.header__menu-language-btn').click(() => {
        $('.header__menu-choose-language').slideToggle();
    });

    $('.header__menu-choose-link').click(() => {
        $('.header__menu-choose-language').css('display', 'none')
    });
    // /choose-language

    // advantages__slide
    $('.advantages__slider').slick({
        infinite: true,
        slidesToShow: 3,
        speed: 700,
        swipeToSlide: true,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
                breakpoint: 1256,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    // /advantages__slide

    // reviews__slider
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 700,
        swipeToSlide: true,
        slidesToScroll: 1,
        dots: false
    });
    // /reviews__slider

    // accordion
    $(function() {
        let icons = {
            header: "iconClosed",
            activeHeader: "iconOpen"
        };
        $(".features__accordion").accordion({
            collapsible: true,
            heightStyle: "content",
            active: 0,
            icons: icons,
            animate: 200
        });
    });
    // accordion


});