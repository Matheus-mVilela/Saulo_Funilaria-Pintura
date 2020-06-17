jQuery(document).ready(function () {
    $(document).ready(function () {
        $('a[href^="#"].my-nav-link').on('click', function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - 100
            }, 900, 'swing', function () {
                window.location.hash = target - 100;
            });
        });
    });
});


$('.img-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
});


$("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
    }
});


$(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("nav").addClass('secondary-bg')
    }
    else {
        if ($("nav").hasClass('secondary-bg')) {
            $("nav").removeClass('secondary-bg');
        }
    }
});