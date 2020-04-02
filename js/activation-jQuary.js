(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {
        var wWidth = $(window).width();
        //-----menuzord------
        jQuery("#menuzord").menuzord({
            trigger:"click",
            indicatorFirstLevel: '<i class="fa fa-caret-down"></i>',
            indicatorSecondLevel: '<i class="fa fa-caret-right"></i>'
        });


        //------Adjusting the top nav showing the top nav when scrolling >= 53----
        $(window).on('scroll', function () {
            var check=$('#logo');
            if ($(this).scrollTop() >= 53) {
                $("#stick_header").addClass("sticked");
                $("#stick_header_v2").addClass("sticked");
                if(check.length){
                    document.getElementById("logo").src = "images/logo_black.png";
                }
            } else {
                $("#stick_header").removeClass("sticked");
                $("#stick_header_v2").removeClass("sticked");
                if(check.length){
                    document.getElementById("logo").src = "images/logo.png";
                }

            }
        });


        //-------owl carousel for home-testimonial and case_carousel_wrapper-------
        $(".testimonial_wrapper, .case_carousel_wrapper").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: false,
            smartSpeed: 900,
            autoplayTimeout: 3000
        });
        
        //-------owl carousel for support-------
        $("#support_content").owlCarousel({
            items: 1,
            loop: true,
            margin:1,
            dots: true,
            autoplay: false,
            smartSpeed: 900,
            autoplayTimeout: 3000
        });


        //-----counter js active-----
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });


        //-----nice select--------
        $('select').niceSelect();



        //------Masonry active-----
        $(window).load(function () {
            if (wWidth > 767) {
                $('.all_testimonial_wrapper').masonry({
                    itemSelector: '.single_testimonial',
                });
                $('#two_column_content').masonry({
                    itemSelector: '#two_column_content > .col-md-6',
                });
                $('#fullwidth_twoColumn').masonry({
                    itemSelector: '#fullwidth_twoColumn > .col-md-6',
                });
            }
        });

        //-------main slider active----
        $(".Modern-Slider").slick({
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 900,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            pauseOnDotsHover: true,
            fade: true,
            prevArrow: '<button class="PrevArrow"></button>',
            nextArrow: '<button class="NextArrow"></button>',
            draggable: 'true',
            arrows: true,
        });
        
        //=----Hide arrow
        if (wWidth < 767) {
            $('.slick-arrow').hide()

        }






    });


    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


}(jQuery));
