'use strict';

jQuery(function($) {
    var el, set,

        sliderContinue;
    var Application = {
        settings: {
            sliderAutoplaySpeed: 7000,
            sliderSpeed: 1200
        },
        elements: {
            slider: $('#slick'),
            slickAllThumbs: $('.slick-dots button'),
            slickActiveThumb: $('.slick-dots .slick-active button'),
        },
        init: function() {
            set = this.settings;
            el = this.elements;
            this.slider();
        },

        /**
         * Slider
         */
        slider: function() {

            el.slider.on('init', function() {
                $(this).find('.slick-dots button').text('');
                // Application.dotsAnimation();

            });

            el.slider.slick({
                arrows: false,
                dots: true,
                autoplay: false,
                autoplaySpeed: set.sliderAutoplaySpeed,
                fade: false,
                infinite: true,
                speed: set.sliderSpeed,
                pauseOnHover: false,
                pauseOnDotsHover: true
            });

            $('.slick-dots').hover(
                function() {
                    // var trackWidth = $('.slick-dots .slick-active button').width();
                    // $('.slick-dots .slick-active button').stop().width(trackWidth);
                    el.slider.slick('slickPause');
                    clearTimeout(sliderContinue);
                },
                function() {
                    // Application.dotsAnimation(timeRemain);
                    var trackWidth = $('.slick-dots .slick-active button').width();


                    // sliderContinue = setTimeout(function() {
                    //     el.slider.slick('slickNext');
                    //     el.slider.slick('slickPlay');
                    // }, timeRemain);
                }
            );

            el.slider.on('beforeChange', function() {
                $('.slick-dots button').stop().width(0);
            });

            el.slider.on('afterChange', function() {
                $('.slick-dots button').width(0);
                // Application.dotsAnimation();
            });

        },

        /**
         *
         * @param remain {number}
         */

        // dotsAnimation: function(remain) {
        //
        //     if (remain) {
        //         var newDuration = remain;
        //     } else {
        //         var newDuration = set.sliderAutoplaySpeed;
        //     }
        //
        //     $('.slick-dots .slick-active button').animate({ width: '100%' },
        //         {
        //             duration: newDuration,
        //             easing: 'linear',
        //             step: function(now, fx) {
        //                 var timeCurrent = Math.round((now*set.sliderAutoplaySpeed)/100);
        //                 timeRemain = set.sliderAutoplaySpeed - timeCurrent;
        //             }
        //         }
        //     );
        // },

    };

    //Init
    Application.init();
    $(function () {
        $('.slick-slide .img--holder').height($(window).height());
    });

    $(function () {
        $(".js-slider-prev").on("click", function() {
            $('#slick').slick("slickPrev");
        });

        $(".js-slider-next").on("click", function() {
            $('#slick').slick("slickNext");
        });

    });


    $(window).resize(function() {
        $('.slick-slide .img--holder').height($(window).height());
    });

});
$(function () {
    $('.slider__pic').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        fade: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnDotsHover: true
    });


    // ============= GOOGLE MAP SCRIPT =============
    var map;
    var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);

    var MY_MAPTYPE_ID = 'custom_style';

    function initialize() {

        var featureOpts = [
            {
                stylers: [
                    { saturation: -100 },
                    { lightness: -20 },
                    { visibility: 'simplified' },
                    { gamma: 0.8 },
                    { weight: 0.4 }
                ]
            },
            {
                elementType: 'labels',
                stylers: [
                    { visibility: 'on' }
                ]
            },
            {
                featureType: 'water',
                stylers: [
                    { color: '#000' }
                ]
            }
        ];

        var mapOptions = {
            zoom: 14,
            scrollwheel: false,
            panControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            center: new google.maps.LatLng(33.978, -118.1),
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
            },
            mapTypeId: MY_MAPTYPE_ID
        };

        map = new google.maps.Map(document.getElementById('canvas-map'),mapOptions);
        var image = 'img/point.png';
        var myLatLng = new google.maps.LatLng(33.974, -118.07);
        var beachMarker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image
        });
        var styledMapOptions = {
            name: 'Custom Style'
        };

        var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

        map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
    }

    google.maps.event.addDomListener(window, 'load', initialize);


    $('.check-main input').iCheck({
        checkboxClass: 'icheckbox_square',
        radioClass: 'iradio_square',
        increaseArea: '20%' // optional
    });

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 70
    });


    //
    // $(window).scroll(function () {
    //     if(location.hash == "#about"){
    //         console.log("23");
    //     }
    // });

    // var hash = window.location.hash;
    //
    // switch(hash){
    //     case "#about":
    //         $('#about').removeClass("active");
    //         $('#about').addClass('active');
    //         break;
    // }
    //
    //
    // var progress =$(".progress-bar"),
    //     progress_cent = progress.attr("aria-valuenow") + "%";
    //
    //     progress.each(function(){
    //         progress.animate({
    //             width: progress_cent
    //         }, 2500 );
    //     });



        // prog.css("width",function() {
        //     return $(this).attr("aria-valuenow") + "%";
        // });
        //
        // console.log(progpocent)

});


