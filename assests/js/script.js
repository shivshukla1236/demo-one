$(document).ready(function() {
    $("#arrow-down").on('click', function() {
        console.log('hello');
        // $(window).scroll(500);
        $('.msv-intro__wrap').addClass('msv-intro__wrap--hidden');
        $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').addClass('msv-intro__button--visible');
    });
    if ($(window).width() > 768) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 150) {
                console.log('150');
                $('.msv-intro__wrap').addClass('msv-intro__wrap--hidden');
                $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').addClass('msv-intro__button--visible');
            } else if ($(this).scrollTop() < 150) {
                $('.msv-intro__wrap').removeClass('msv-intro__wrap--hidden');
                $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').removeClass('msv-intro__button--visible');

            }
        })
    } else if ($(window).width() <= 768) {
        console.log("yes");
        $(window).scroll(function() {
            if ($(this).scrollTop() < 20) {
                console.log('150');
                $('.msv-intro__wrap').addClass('msv-intro__wrap--hidden');
                $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').addClass('msv-intro__button--visible');
            } else if ($(this).scrollTop() < 300) {
                $('.msv-intro__wrap').removeClass('msv-intro__wrap--hidden');
                $('.msv-intro__wrap').siblings('.msv-intro__button--hidden').removeClass('msv-intro__button--visible');

            }
        })
    }


    $(document).ready(function() {
        $('.msv-navbar__toggler').on('click', function() {
            $('.msv-collapse').addClass('msv-show');
            $(this).siblings('.msv-navbar').toggleClass('msv-navbar__expand');
            $('.msv-navbar').css("transform", "translateX(0%)");
            // $('.msv-navbar').css("width", "50%");


            // $('.msv-navbar__expand').animate({ maxWidth: '350px' }, 3000);
        });
        $("#cut").on('click', function() {
            console.log("hfeo");
            $('.msv-collapse').removeClass('msv-show');
            $('.msv-navbar').css("transform", "translateX(100%)");

        });

    })
})