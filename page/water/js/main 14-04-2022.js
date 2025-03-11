$(document).ready(function () {

    $('.body-overlay').fadeOut(100);

    $(window).on('load scroll', function () {
        if ($('.wasser-aroma').length) {
            if ($(window).width() > 767) {
                if (!$('body').hasClass('hide-animation')) {
                    if ($(this).scrollTop() > $('.wasser-aroma').offset().top) {
                        $('.header').addClass('active');
                    } else {
                        $('.header').removeClass('active');
                    }
                }
            }
        } else {
            $('.header').toggleClass('active', $(this).scrollTop() > 0);
        }
    });

    /* custom change cursor hover buble */
    $('.bg-head').on("mousemove", function (e) {
        var offsetBubller = $('.wasser-aroma').offset();
        mouseX2 = e.pageX - offsetBubller.left;
        mouseY2 = e.pageY - offsetBubller.top;

        $('.wiewasser-cursor:not(.nomouse)').css({
            opacity: 1,
            left: mouseX2,
            top: mouseY2
        });

    })

    $(document).on('mouseenter', '.header', function () {
        if ($(window).width() > 1199) $('.cursor--canvas, .cursor--small').addClass('active');
    }).on('mouseleave', '.header', function () {
        if ($(window).width() > 1199) $(".cursor--canvas, .cursor--small").removeClass("active");
    });

    $(document).on('mouseenter', '.entweder-body, .zumshop-swiper.swiper-slide-active .zumshop-slick__thumb', function () {
        if ($(window).width() > 1199) $('.entweder-cursor').addClass('active');
    }).on('mouseleave', '.entweder-body, .zumshop-swiper.swiper-slide-active .zumshop-slick__thumb', function () {
        if ($(window).width() > 1199) $(".entweder-cursor").removeClass("active");
    });

    /* custom change cursor hover sale */
    $(document).on("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY - $(window).scrollTop();
        TweenLite.to('.entweder-cursor', 0, { left: mouseX, top: mouseY });
    });


    $('.header, .aktion-box, .cookie-zum').on("mouseenter", function (e) {
        $('.wiewasser-cursor').css('opacity', 0);
    }).on('mouseleave', '.header', function () {
        $('.wiewasser-cursor').css('opacity', 1);
    });

    if ($(".bg-head").length) {
        if (!readCookie('firstVisit')) {
            $(".bublle-wiewasser, .bg-head, .bublle-pin, .wasser-aroma").removeClass('first-visit');
            $("body").addClass("hide-animation");
            $(".bublle-pin").append('<div class="wiewasser-cursor"><div class="wiewasser-cursor__bubble"></div></div>');
            function myFunction() {
                animationScroll();
                $('body').css({ position: "fixed", "padding-right": "17px", "background-color": "#F4F8FF" });
                $('.header').css({ "padding-right": "17px" });
                $('.header-shop').css({ "margin-left": "-8px" });
                setTimeout(function () {
                    $('body').css({ position: "relative", "padding-right": "0", "background-color": "transparent" });
                    $('.header').css({ "padding-right": "0" });
                    $('.header-shop').css({ "margin-left": "0" });
                    //$('.wasser-main').css({"min-height": "100%"});
                    AOS.refresh();
                }, 300);
                $(".wiewasser-cursor").addClass('nomouse').css({ top: "50%", "left": "4%" });
                ;
                $('body').removeClass('hide-animation');
                $(".pin-spacer, .bublle-pin").removeAttr('style');
                $(".bublle-wiewasser").css('opacity', 0);
                tl.kill();

                document.cookie = 'firstVisit=true; max-age=604800;';
            }

            gsap.registerPlugin(ScrollTrigger);


            const tl = gsap.timeline({

                scrollTrigger: {
                    trigger: ".bg-head",
                    endTrigger: ".bg-head",
                    pin: ".bublle-pin",
                    start: 0,
                    end: "bottom 0",
                    scrub: 0.5,
                    //toggleActions: "play none none none",
                    snap: {
                        snapTo: 1 / 1.5,
                        duration: 0,
                    },
                    //markers: true,
                },
                onComplete: function () {

                }
            }).to(".title-wiewasser__tofrom1", {
                opacity: 0,
            }).to(".title-wiewasser__tofrom2", {
                opacity: 1,
            }).to(".title-wiewasser__tofrom2", {
                opacity: 0,
            }).call(myFunction, null, "-=0.2").call(() => {
                tl.kill();
            });
        }
        
        if (readCookie('firstVisit')) {
            $(".bublle-wiewasser, .bg-head, .bublle-pin, .wasser-aroma").addClass('first-visit');
            $("body").removeClass("hide-animation");
            $(".wiewasser-cursor").remove();
            animationScroll();
        }

    } else {
        animationScroll();
    }

    /* animation */
    AOS.init({
        once: true,
        duration: 1000,
        offset: 100,

        useClassNames: "wasser-title",
    });

    if (!readCookie('accept')) {
        $(".cookie-zum").removeClass("closed");
    }
    $(".cookie-close, .cookie-zum__link").click(function (e) {
        e.preventDefault();
        $(".cookie-zum").addClass("closed");
        document.cookie = 'accept=true; max-age=604800;';
    });
    function readCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) > -1) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    if ($(".wasser-banner").length) {
        if (!readCookie('accept')) {
            var wasserBanner = $(".wasserhahn").offset().top * 1.25;
            //console.log(wasserBanner);
        } else {
            var wasserBanner = $(".wasserhahn").offset().top / 1.25;
        }

        $(window).scroll(function () {
            if ($(window).scrollTop() >= wasserBanner) {
                $(".wasser-banner").addClass("fadeout");
                return;
            }
        });
    }

    if ($(".aktion-box").length) {
        if (sessionStorage.aktionClose) {
            $(".aktion-box").remove();
            $("body").removeClass("open-video");
        }
        var aktionBoxHeigh = ($(window).height());
        //var aktionBox = $(".aktion-box-point").offset().top - aktionBoxHeigh;
        $(window).on('load resize', function () {
            // if ($(window).width() < 767) {
            //     var aktionBox = popUpHeightPda * $('body').height() / 100;
            //     $(window).scroll(function () {
            //         if ($(window).scrollTop() >= aktionBox) {
            //             $(".aktion-box").css({
            //                 "opacity": 1,
            //                 "z-index": 501,
            //                 "position": "fixed"
            //             }).addClass("active");
            //             $("body").addClass("open-video");
            //             return false;
            //         }
            //     });
            // } else {
            //     var aktionBox = popUpHeightWeb * $('body').height() / 100;
            //     $(window).scroll(function () {
            //         if ($(window).scrollTop() >= aktionBox) {
            //             $(".aktion-box").css({
            //                 "opacity": 1,
            //                 "z-index": 20,
            //                 "position": "fixed"
            //             }).addClass("active");
            //
            //             $("body").addClass("open-video");
            //             return false;
            //         }
            //     });
            // }

            setTimeout(function () {
                $(".aktion-box").css({
                    "opacity": 1,
                    "z-index": 501,
                    "position": "fixed"
                }).addClass("active");
                $("body").addClass("open-video");
                return false;
            }, 7000);
        });
    }

    function putAktionCloseCookie() {
        $(".aktion-box").animate({
            opacity: 0
        }, {
            duration: 500,
            complete: function () {
                $(this).css({
                    display: "none"
                });
                //document.cookie = 'aktionClose=true; max-age=604800;';
                sessionStorage.aktionClose = "1";
            }
        });

        $("body").removeClass("open-video");
    }

    $(document).on("click", ".aktion-button > a", function (e) {
        putAktionCloseCookie();
    });

    $(document).on("click", ".aktion-close", function (e) {
        putAktionCloseCookie();
    });

    // $( ".aktion-close" ).click(function() {
    //     $( ".aktion-box" ).animate({
    //         opacity: 0
    //     }, {
    //         duration: 500,
    //         complete: function() {
    //             $(this).css({
    //                 display: "none"
    //             });
    //             document.cookie = "eau-aktion-box=closed";
    //         }
    //     });
    //
    //     $("body").removeClass("open-video");
    // });



    $('.wie-rating__num').each(function () {
        var wierating = (100 / 5) * $(this).data("wierating");
        $(this).css("width", wierating + "%");
    });

    // if ($(".wie-review").length) {
    //     const wieReview = new Swiper('.wie-review', {
    //         loop: true,
    //         autoplay: {
    //             delay: 0,
    //             disableOnInteraction: false,
    //             pauseOnMouseEnter: true,
    //         },
    //         speed: 5000,
    //         grabCursor: true,
    //         slidesPerView: "auto",
    //         centeredSlides: true,
    //         spaceBetween: 50,
    //         loopPreventsSlide: false,
    //         freeModeMomentum: false,
    //         freeMode: true,
    //     });
    // }

    // const kommtBody = new Swiper('.kommt-body', {
    //     loop: true,
    //     autoplay: {
    //         delay: 0,
    //         disableOnInteraction: false,
    //         pauseOnMouseEnter: true,
    //     },
    //     speed: 5000,
    //     grabCursor: true,
    //     slidesPerView: "auto",
    //     centeredSlides: true,
    //     spaceBetween: 0,
    //     loopPreventsSlide: false,
    //     freeModeMomentum: false,
    //     freeMode: true,
    // });

    if ($(".wie-review").length) {
        let wieClickOn = true;
        const wieReview = new Flickity('.wie-list', {
            freeScroll: true,
            resize: true,
            accessibility: false,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            percentPosition: true,
            setGallerySize: true,
            on: {
                dragStart: function (event, pointer) {
                    wieClickOn = false;
                    //console.log(event)
                },
                dragEnd: function () {
                    setTimeout(function (event, pointer) {
                        wieClickOn = true;
                        //console.log(event)
                    }, 300)
                },
                pointerDown: function (event, pointer) {
                    //console.log(event)
                }
            }
        });
        wieReview.x = 0;
        $(window).on('load resize', function () {
            if ($(window).width() > 767) {
                playWie();
                function playWie() {
                    wieReview.x -= .5;
                    wieReview.settle(wieReview.x);
                    requestId = window.requestAnimationFrame(playWie);
                }
                function pauseWie() {
                    if (requestId) {
                        window.cancelAnimationFrame(requestId);
                        requestId = undefined;
                    }
                }

                // Pause on hover/focus
                $('.wie-list').on('mouseenter focusin', function () {
                    pauseWie();
                }).on('mouseleave', function () {
                    playWie();
                })
            }
        });


    }

    if ($(".aromen-list").length) {
        let clickOn = true;
        const aromenSlider = new Flickity('.aromen-list', {
            freeScroll: true,
            resize: true,
            accessibility: false,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            percentPosition: true,
            setGallerySize: true,
            on: {
                dragStart: function (event, pointer) {
                    clickOn = false;
                    //console.log(event)
                },
                dragEnd: function () {
                    setTimeout(function (event, pointer) {
                        clickOn = true;
                        //console.log(event)
                    }, 300)
                },
                pointerDown: function (event, pointer) {
                    //console.log(event)
                }
            }
        });

        // Set initial position to be 0
        aromenSlider.x = 0;
        // Start the marquee animation
        $(window).on('load resize', function () {
            if ($(window).width() > 767) {
                playAromen();
                function playAromen() {
                    aromenSlider.x -= .5;
                    aromenSlider.settle(aromenSlider.x);
                    requestId = window.requestAnimationFrame(playAromen);
                }
                function pauseAromen() {
                    if (requestId) {
                        // Cancel the animation
                        window.cancelAnimationFrame(requestId)
                        // Reset the requestId for the next animation.
                        requestId = undefined;
                    }
                }

                // Pause on hover/focus
                $('.aromen-slider').on('mouseenter focusin', function () {
                    pauseAromen();
                }).on('mouseleave', function () {
                    playAromen();
                })
            }
        });

    }

    if ($(".kommt-body").length) {
        $(window).on('load', function () {
            if ($(window).width() < 1200) {
                let kommtClickOn = true;
                const kommtWrapper = new Flickity('.kommt-wrapper', {
                    freeScroll: false,
                    resize: true,
                    accessibility: false,
                    wrapAround: true,
                    prevNextButtons: false,
                    pageDots: true,
                    percentPosition: true,
                    setGallerySize: true,
                });
            } else {
                let kommtClickOn = true;
                const kommtWrapper = new Flickity('.kommt-wrapper', {
                    freeScroll: true,
                    resize: true,
                    accessibility: false,
                    wrapAround: true,
                    prevNextButtons: false,
                    pageDots: false,
                    percentPosition: true,
                    setGallerySize: true,
                    on: {
                        dragStart: function (event, pointer) {
                            kommtClickOn = false;
                            //console.log(event)
                        },
                        dragEnd: function () {
                            setTimeout(function (event, pointer) {
                                kommtClickOn = true;
                                //console.log(event)
                            }, 300)
                        },
                        pointerDown: function (event, pointer) {
                            //console.log(event)
                        }
                    }
                });
                kommtWrapper.x = 0;
                if ($(window).width() > 767) {
                    playKommt();
                    function playKommt() {
                        kommtWrapper.x -= .5;
                        kommtWrapper.settle(kommtWrapper.x);
                        requestId = window.requestAnimationFrame(playKommt);
                    }
                    function pauseKommt() {
                        if (requestId) {
                            window.cancelAnimationFrame(requestId);
                            requestId = undefined;
                        }
                    }
                    // Pause on hover/focus
                    $('.kommt-body').on('mouseenter focusin', function () {
                        pauseKommt();
                    }).on('mouseleave', function () {
                        playKommt();
                    })
                }
            }
        });


    }

    /*
        if ($(".aromen-slider").length) {
            var aromenSlider = new Swiper('.aromen-slider', {
                loop: true,
                autoplay: {
                    delay: 1,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    waitForTransition: false
                },
                centeredSlides: true,
                slidesPerView: "auto",
                spaceBetween: 50,
                speed: 5000,
                //loopPreventsSlide: false,
                freeModeMomentum: false,
                freeMode: {
                    enabled: true,
                    momentum: false,
                    momentumBounce: false,
                    sticky: true
                },
                on: {
                    init() {
                        this.el.addEventListener('mouseenter', () => {
                            this.autoplay.stop();
                        });

                        this.el.addEventListener('mouseleave', () => {
                            this.autoplay.start();
                        });
                    }
                }

            });
            $(".aromen-slider").hover(function(){
                aromenSlider.autoplay.stop();
                console.log('1')
            }, function(){
                aromenSlider.autoplay.start();
                console.log('2')
            });
        }

     */

    var trinkLottie = lottie.loadAnimation({
        container: document.getElementById('trink-lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: assets.path + 'img/lottie/dein-trink.json'
    });

    var gutscheinLottie = lottie.loadAnimation({
        container: document.getElementById('gutschein-lottie'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        hover: true,
        path: assets.path + 'img/lottie/gutschein.json',
    });

    function animationScroll() {

        if ($(".dein-trink").length) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".dein-trink",
                    start: 'top center',
                    once: true,
                    onEnter: function () {
                        //trinkLottie.play();

                        var trinkVideo = document.querySelector(".trink-video");
                        if (trinkVideo.paused) {
                            trinkVideo.play();
                        } else {
                            trinkVideo.pause();
                        }
                    }
                }
            });
        }

        if ($(".ein-gutschein").length) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: ".ein-gutschein",
                    start: 'top 60%',
                    once: true,
                    onEnter: function () {
                        gutscheinLottie.play();
                    }
                }
            });
        }
    }

    // if($(".hast-gutschein").length) {
    //     animationScroll();
    // }
    /*
        $(window).on('load resize', function () {
            if ($(window).width() <= 767) {
                gutscheinLottie.play();
            } else {
                if ($(".ein-gutschein").length) {
                    $(".ein-gutschein").on('mouseenter', function () {
                        gutscheinLottie.setDirection(1);
                        gutscheinLottie.play();
                    }).on('mouseleave', function () {
                        gutscheinLottie.setDirection(-1);
                        gutscheinLottie.play(0);
                    });
                }
            }
        }); */

    if ($(".fruchtepuree").length) {
        var kleinerBanner = $(".fruchtepuree").offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() >= kleinerBanner) {
                setTimeout(function () {
                    $(".kleiner-banner").addClass("active");
                }, 500);

                return false;
            }
        });
    }
    if ($(".prinzip-foto").length) {
        $(".prinzip-foto noscript").remove();
    }

    function toogleChat() {
        if (LiveChatWidget) {
            var state = LiveChatWidget.get("state");
            if (state.visibility == "maximized") {
                LiveChatWidget.call("hide");
            } else if (state.visibility == "minimized" || state.visibility == "hidden") {
                LiveChatWidget.call("maximize");
            }
        }
    }

    if ($('.livechat').length) {
        $('body').addClass('hide-chart');
        $('.livechat').on('click', function () {
            $('body').removeClass('hide-chart');
            toogleChat();
        });

        LiveChatWidget.on('visibility_changed', function (data) {
            if (data.visibility === 'maximized') {
                localStorage.setItem('livechat_chat_visible', true);
                $('.livechat').toggleClass('online')
            }
        });
        LiveChatWidget.on('visibility_changed', function (data) {
            if (data.visibility == "minimized") {
                LiveChatWidget.call('hide');
                $('.livechat').toggleClass('online');
            }
        });

        LiveChatWidget.on('ready', function () {
            var state = LiveChatWidget.get("state");
            if (state.availability === "offline") {
                $(".livechat").toggleClass("offline");
            } else {
                $(".livechat").toggleClass("online");
            }
            LiveChatWidget.call('hide');
        });

    }

    function errorInfo() {
        if ($(".einzelbeutel-box .error-info").length) {
            $(".einzelbeutel-box").addClass("error-width");
        }
    }
    setInterval(function () {
        errorInfo();
    }, 500);

    /* product button count cart */
    $(document).on('click', '.productCountDown:not(.warenkorbUpdate)', function (e) {
        e.preventDefault();
        let count = $(this).next('.productCount'),
            value = +count.val();
        value = +count.val();
        if (value > 0) count.val(value - 1);
        count.trigger('change');
        $(this).parents('.aromen-form').find('.aromen-button a').attr('data-quantity', value - 1);
        $(this).parents('.ntweder-form').find('.ntweder-button a').attr('data-quantity', value - 1);
        $(this).parents('.gefunden-form').find('.gefunden-button a').attr('data-quantity', value - 1);
    });
    $(document).on('click', '.productCountUp:not(.warenkorbUpdate)', function (e) {
        e.preventDefault();
        let count = $(this).prev('.productCount'),
            value = +count.val();
        count.val(value + 1);
        count.trigger('change');
        $(this).parents('.aromen-form').find('.aromen-button a').attr('data-quantity', value + 1);
        $(this).parents('.ntweder-form').find('.ntweder-button a').attr('data-quantity', value + 1);
        $(this).parents('.gefunden-form').find('.gefunden-button a').attr('data-quantity', value + 1);
    });
    $(".productCount").keypress(function () {
        return false;
    });

    $(document).on('click', '.shop-nav li a', function (e) {
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
        e.preventDefault();
    });

    $(document).on("click", ".open-basket", function () {
        $("html, body, .warenkorb-basket").addClass("ov-hidden");
    });
    $(".warenkorb-close, .basket-mask").click(function () {
        $("html, body, .warenkorb-basket").removeClass("ov-hidden");
    });
    $(document).on('click', ".warenkorb-close, .basket-mask", function () {
        $("html, body, .warenkorb-basket").removeClass("ov-hidden");
    });

    function zumshopSlider1() {
        var zumshopSlider1 = new Swiper('.zumshop-slider', {
            loop: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 0,
        });
    }
    function zumshopSlider2() {
        var zumshopSlider2 = new Swiper('.zumshop-slider', {
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 1200,
            grabCursor: true,
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 0,
            loopPreventsSlide: false,
            freeModeMomentum: false,
            freeMode: {
                enabled: true,
                momentum: false,
            },
            pagination: {
                el: ".zumshop-dots",
                clickable: true,
            },
            navigation: {
                nextEl: ".zumshop-next",
                prevEl: ".zumshop-prev",
            },
            effect: 'creative',
            creativeEffect: {
                prev: {
                    translate: ['-70%', 0, 0],
                    rotate: [0, 0, -15],
                    scale: .85,
                    origin: `50% 100%`,
                },
                next: {
                    translate: ['70%', 0, 0],
                    rotate: [0, 0, 15],
                    scale: .85,
                    origin: `50% 100%`
                },
                perspective: false,
                limitProgress: 6,
                progressMultipler: 1,
                //transformEl: '.item'
            },
        });
        $(".zumshop-slider").mouseenter(function () {
            zumshopSlider2.autoplay.stop();
            //console.log('slider stopped');
        });

        $(".zumshop-slider").mouseleave(function () {
            zumshopSlider2.autoplay.start();
            //console.log('slider started again');
        });
    }


    $(window).on('load', function () {
        if ($(window).width() < 1200) {
            zumshopSlider1();

            $(".zumshop-slick__item, .entweder-item").each(function () {
                $(this).css({
                    "background": $(this).data('bg')
                });
            });
        } else {
            zumshopSlider2();

            $(".zumshop-slick__item").css("background", "transparent");
            $(".zumshop-slick__item, .page-home .entweder-item").mouseout(function () {
                $(this).css("background", "transparent");
            });
            $(".zumshop-slick__item, .page-home .entweder-item").mouseover(function () {
                $(this).css("background", $(this).data("bg"));
            });
        }
    });




    $(".bezahlung-lieferung").click(function () {
        $(".bezahlung-lieferung__eine").toggleClass("active");
    });

    /* product page JS */
    const productSlider = new Swiper('.product-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 3,
        pagination: {
            el: '.product-pagination',
            clickable: true,
        },
    });

    $(window).load(function () {
        $(".product-maskload, .product-maskload2").addClass("active");
    });

    $(".link-load").click(function (e) {
        e.preventDefault();
        $(".page-maskload").addClass("active");
        $(".header").addClass("mask-active");
        var loadBg = $(this).data('bg');
        $(".page-maskload path").css({
            fill: loadBg
        });
        var url = $(this).attr('href');
        setInterval(function () {
            window.location = url;
        }, 1000);
    });

    $('.show-password').on('click', function () {
        if ($(this).parent('.login-form__password').find('input').attr('type') == 'password') {
            $(this).addClass('view');
            $(this).parent('.login-form__password').find('input').attr('type', 'text');
        } else {
            $(this).removeClass('view');
            $(this).parent('.login-form__password').find('input').attr('type', 'password');
        }
        return false;
    });

    var dpMin, dpMax;
    var localeDe = {
        days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        daysShort: ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'],
        daysMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        months: ['Januar', 'Februar', 'MГ¤rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthsShort: ['Jan', 'Feb', 'MГ¤rz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        today: 'Heute',
        clear: 'AufrР“В¤umen',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: 'HH:ii',
        firstDay: 1,
    };

    let startDate = new Date();
    let endDate = new Date(Date.now() + (6.048e+8 * 12));
    console.log(endDate);
    dpMin = new AirDatepicker('.input-time__min', {
        isMobile: true,
        autoClose: true,
        position: 'center',
        locale: localeDe,
        startDate,
        minDate: startDate,
        dateFormat: 'dd.MM.yyyy',
        selectedDates: [startDate],
        onSelect({ date }) {
            endDate = dpMin.formatDate(date, 'T');
            dpMax.update({
                minDate: date,
                maxDate: Number(endDate) + 6.048e+8 * 12
            })
        }
    });

    dpMax = new AirDatepicker('.input-time__max', {
        isMobile: true,
        autoClose: true,
        locale: localeDe,
        dateFormat: 'dd.MM.yyyy',
        minDate: startDate,
        maxDate: endDate,
        onSelect({ date }) {
            dpMin.update({
                maxDate: date
            })
        }
    });
    const inputTime = new AirDatepicker('.input-time__enter', {
        locale: localeDe,
        dateFormat: 'dd.MM.yyyy'
    });



    $('.freude-forminput').on("click blur change", function () {
        $(this).find('.freude-label').addClass('blur');
    });
    $('.freude-forminput input, .freude-forminput textarea').focus(function () {
        $(this).closest('.freude-forminput').find('.freude-label').addClass('blur');
    });

    $("textarea").each(function () {
        this.setAttribute("style", "height:" + (this.scrollHeight) + "px;overflow-y:hidden;");
    }).on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    });

    $('.faq-item__name').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.faq-item__name').not(this).removeClass('active').next().slideUp();
    });
    //$('.faq-name:eq(0)').addClass('active');
    //$('.faq-about:eq(0)').show();

    let menuT;
    $(".menu-button").click(function (e) {
        e.preventDefault();
        $(".header, .header-shop, .user-box").addClass("menu");
        menuT = setTimeout(function () {
            $(".navigation-page").addClass("menu");
            //$('.navigation-menu li a').addClass("animate");
            // $('.navigation-menu li a').animate({
            //     transform: "translate3d(0%, 0%, 0px) rotateX(0deg)"
            // }, 300);
            // $('.navigation-menu li:eq(0)').addClass("animate", 300, function(){
            //     $(this).next().addClass("animate", 300, arguments.callee);
            // });

            $('.navigation-menu li').each(function (i) {
                var row = $(this);
                setTimeout(function () {
                    row.addClass('flip');
                }, 200 * i);
            });

            setTimeout(function () {
                $(".navigation-search").animate({ opacity: "1" }, 600);
            }, 2000);

        }, 1000);
        $("html, body").addClass("ov-hidden");
        $(".page-maskload").addClass("active");

        $(".page-maskload path").css({
            fill: '#F4F8FF'
        });
    });
    $(".close-menu").click(function () {
        // $('.navigation-menu li:eq(0)').animate({opacity: "0"}, 300, function(){
        //     $(this).next().animate({opacity: "0"}, 300, arguments.callee);
        // });
        $('.navigation-menu li').each(function (i) {
            var row = $(this);
            setTimeout(function () {
                row.toggleClass('flip no-flip');
            }, 200 * i);
        });

        setTimeout(function () {
            $(".navigation-search").animate({ opacity: "0" }, 600);
            $('.navigation-menu li').removeClass("no-flip");
        }, 2000);
        clearTimeout(menuT);
        $(".navigation-page, .header, .header-shop, .user-box").removeClass("menu");
        $("html, body").removeClass("ov-hidden");
        $(".page-maskload").removeClass("active");
        //$('.navigation-menu li').animate({opacity: "0"});
    });

    if ($('.vimeo-video').length > 0) {
        var video = document.querySelector(".player");
        var progressBar = document.querySelector('.progress-bar');
        var progress = document.querySelector('.progress');
        var tick;
        var mouse = { x: 0, y: 0 };

        $('.abvideo-body').on('click', function () {
            $('body').addClass('open-video');
            if (video.paused) {
                video.play();
                $('.controls .play').addClass('playing');
            } else {
                video.pause();
                $('.controls .play').removeClass('playing');
            }
        });

        $('.player').on('click', function () {
            if (video.paused) {
                $(this).closest('.content-video').addClass('content-video-playing');
                video.play();
                $('.controls .play').addClass('playing');
            } else {
                $(this).closest('.content-video').removeClass('content-video-playing');
                video.pause();
                $('.controls .play').removeClass('playing');
            }
        });

        $('.close-video').on('click', function () {
            $('body').removeClass('open-video');
            video.pause();
            $('.controls .play').removeClass('playing');
        });
    }

    /* mobile script */
    var entwederMain = null;
    function entwederMainInit() {
        if (!entwederMain) {
            entwederMain = new Swiper('.entweder-main', {
                slidesPerView: "auto",
                initialSlide: 1,
                loop: false,
                freeMode: false,
                centeredSlides: true,
            });
        }
    }
    function entwederMainDestroy() {
        if (entwederMain) {
            entwederMain.destroy();
            entwederMain = null;
        }
    }
    $(window).on('load resize', function () {
        setTimeout(function () {
            AOS.refresh();
        }, 1500);
        if ($(window).width() <= 767) {
            entwederMainInit();
        } else {
            entwederMainDestroy();
        }
    });
    $('.wasserhahn-body').scrollLeft(52);
    $('.fruchtepuree-main').scrollLeft(52);

    $(".navigation-page").css({
        "display": "flex"
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.button-arrtop').fadeIn();
        } else {
            $('.button-arrtop').fadeOut();
        }
    });

    $('.button-arrtop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
    });

    $(".button-abo").click(function () {
        $(".abo-mobilesecond").fadeIn();
        $(".abo-mobilefirst").fadeOut();
    });

    if ($(".konto-dashboard").length) {
        $(".header").addClass("konto");
        $(".open-sidebar").addClass("active");
    }
    $(".kundenkonto-open, .open-sidebar").on("click", function () {
        $(".konto-sidebar").toggleClass("active");
    });

    var sectionIds = $('.shop-nav li a');

    $(document).scroll(function () {
        if ($('body').hasClass('page-shop')) {
            sectionIds.each(function () {
                var container = $(this).attr('href');
                var containerOffset = $(container).offset().top;
                var containerHeight = $(container).innerHeight();
                var containerBottom = containerOffset + containerHeight;
                var scrollPosition = $(document).scrollTop();

                if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) $(this).addClass('active');
                else $(this).removeClass('active');
            });
        }
    });

    /* page-kontakt.php */
    // $('.freude-kontaktform').validate({
    //     rules: {
    //         "your-name": "required",
    //         "your-lastname": "required",
    //         "your-firm": "required",
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         "your-message": "required"
    //     },
    //     messages: {
    //         "your-name": "Bitte prГјfe deine Eingabe",
    //         "your-lastname": "Bitte prГјfe deine Eingabe",
    //         "your-firm": "Bitte prГјfe deine Eingabe",
    //         email: {
    //             required: "Bitte prГјfe deine Eingabe",
    //             email: "Bitte gib eine gГјltige E-Mail-Adresse ein (zum Beispiel name@example.com)"
    //         },
    //         "your-message": "Bitte prГјfe deine Eingabe"
    //     },
    //     errorElement: 'div',
    //     invalidHandler: function(event, validator) {
    //         $('.freude-label').addClass('blur');
    //     }
    // });

    function firmaMwst() {
        if ($(".firma-input").val() != "" || $(".mwst-input").is(':checked')) {
            $(".powerpay-radio").css({
                display: "none"
            });
            $(".powerpay-payment").removeClass("active");
            $(".powerpay-melde").css({
                display: "block"
            });
            $(".powerpay-payment input").prop('checked', false);
        } else {
            $(".powerpay-radio").css({
                display: "flex"
            });
            $(".powerpay-melde").css({
                display: "none"
            });
        }
    }
    setInterval(function () {
        firmaMwst();
    }, 500);

    /* page-bezahlung.php */
    $(document).on('click', '.bezahlung-buylist li', function () {
        $('.bezahlung-buylist li').removeClass('active');
        $(this).addClass('active');
    });
    $('body').on('update_checkout', function () {
        $('[name="payment_method"]:checked').parents('li').addClass('active');
    });

    $.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-zA-ZäöüÄÖÜß ]+$/i.test(value);
    }, errorMsg.lettersonly);

    $('.bezahlung-form').validate({
        rules: {
            billing_first_name: "required",
            billing_last_name: "required",
            billing_address_1: "required",
            billing_city: {
                required: true,
                lettersonly: true
            },
            billing_postcode: {
                required: true,
                digits: true,
                minlength: 2,
            },
            billing_country: "required",
            billing_phone: {
                required: true,
                minlength: 10,
            },
            billing_email: {
                required: true,
                email: true
            },
            powerpayreq: {
                required: true,
            },
            terms: "required",
        },
        messages: {
            billing_first_name: errorMsg.emptyText,
            billing_last_name: errorMsg.emptyText,
            billing_address_1: errorMsg.emptyText,
            billing_city: {
                required: errorMsg.emptyText,
                lettersonly: errorMsg.lettersonly
            },
            billing_postcode: {
                required: errorMsg.emptyText,
                digits: errorMsg.zipDigits,
                minlength: errorMsg.zipLength,
            },
            billing_country: errorMsg.country,
            billing_phone: {
                required: errorMsg.emptyText,
                minlength: errorMsg.phone,
            },
            billing_email: {
                required: errorMsg.emptyText,
                email: errorMsg.email
            },
            terms: errorMsg.emptyText,
            powerpayreq: errorMsg.emptyText,
            Nachricht: errorMsg.emptyText
        },
        errorElement: 'div',
    });

    /* page-neueskonto.php */
    $(".neueskonto-form").validate({
        rules: {
            billing_first_name: "required",
            billing_last_name: "required",
            billing_address_1: "required",
            billing_city: {
                required: true,
                lettersonly: true,
            },
            billing_postcode: {
                required: true,
                digits: true,
                minlength: 2,
            },
            email: {
                required: true,
                email: true
            },
            password: "required",
            password2: {
                required: true,
                equalTo: "#reg_password",
            }
        },
        messages: {
            billing_first_name: errorMsg.emptyText,
            billing_last_name: errorMsg.emptyText,
            billing_address_1: errorMsg.emptyText,
            billing_city: {
                required: errorMsg.emptyText,
                lettersonly: errorMsg.lettersonly
            },
            billing_postcode: {
                required: errorMsg.emptyText,
                digits: errorMsg.zipDigits,
                minlength: errorMsg.zipLength,
            },
            email: {
                required: errorMsg.emptyText,
                email: errorMsg.email
            },
            password: errorMsg.password,
            password2: {
                required: errorMsg.password,
                equalTo: errorMsg.passwordEqual,
            }
        },
        errorElement: 'div',
    });

    /* page-login.php */
    $(".loginenter-form").validate({
        rules: {
            username: "required",
            password: "required",
        },
        messages: {
            username: errorMsg.emptyText,
            password: errorMsg.password,
        },
        errorElement: 'div',
    });

    $(".login-form").validate({
        rules: {
            account_first_name: "required",
            account_last_name: "required",
            account_email: {
                required: true,
                email: true
            }
        },
        messages: {
            account_first_name: errorMsg.emptyText,
            account_last_name: errorMsg.emptyText,
            account_email: {
                required: errorMsg.emptyText,
                email: errorMsg.email
            },
        },
        errorElement: 'div',
    });

    $(".kontodetails-form").validate({
        rules: {
            account_first_name: "required",
            account_last_name: "required",
            account_email: {
                required: true,
                email: true
            },
            password_2: {
                equalTo: "#password_1",
            }
        },
        messages: {
            account_first_name: errorMsg.emptyText,
            account_last_name: errorMsg.emptyText,
            account_email: {
                required: errorMsg.emptyText,
                email: errorMsg.email
            },
            password_2: {
                equalTo: errorMsg.passwordEqual,
            }
        },
        submitHandler: function (form) {
            if (!$("#password_current").hasClass('submited')) {
                $.ajax({
                    url: myajax.url,
                    type: 'post',
                    data: $(form).serialize(),
                    dataType: 'json',
                    success: function (data) {
                        if (!data.error) {
                            $("#password_current").addClass('submited');
                            $(".password_current_error").remove();
                            form.submit();
                            // setTimeout(function (event, pointer) {
                            //     $("#password_current").removeClass('submited');
                            // }, 5000);
                        } else {
                            $("#password_current").after('<div class="woocommerce-password-strength password_current_error bad" aria-live="polite">' + data.error + '</div>');
                            return false;
                        }
                    }
                });
            } else {
                form.submit();
            }
        },
        errorElement: 'div',
    });

    // $(document).on('click', 'button[name="save_account_details"]', function (e){
    //
    //     $.ajax({
    //         url: myajax.url,
    //         type: 'post',
    //         data:  $('.kontodetails-form').serialize(),
    //         dataType: 'json',
    //         success: function(data) {
    //             if (!data.error) {
    //                 $(".password_current_error").remove();
    //                 // $('.kontodetails-form').submit();
    //             } else {
    //                 $("#password_current").after('<div class="woocommerce-password-strength password_current_error bad" aria-live="polite">'+data.error+'</div>');
    //                 e.preventDefault();
    //             }
    //         }
    //     });
    // });

    $(".passwortzur-form").validate({
        rules: {
            user_login: {
                required: true,
                email: true
            }
        },
        messages: {
            user_login: {
                required: errorMsg.emptyText,
                email: errorMsg.email
            }
        },
        errorElement: 'div',
    });

    $(".neuespass-form").validate({
        rules: {
            password_1: "required",
            password_2: {
                required: true,
                equalTo: "#password_1",
            }
        },
        messages: {
            password_1: errorMsg.password,
            password_2: {
                required: errorMsg.password,
                equalTo: errorMsg.passwordEqual,
            }
        },
        errorElement: 'div',
    });

    $(".anpassen-form").validate({
        rules: {
            // edit
            custom_billing_first_name: "required",
            custom_billing_last_name: "required",
            custom_billing_phone: {
                required: true,
                minlength: 10,
            },
            custom_billing_address_1: "required",
            custom_billing_city: {
                required: true,
                lettersonly: true,
            },
            custom_billing_postcode: {
                required: true,
                digits: true,
                minlength: 2,
            },
            custom_billing_country: "required",

            //billing neue Adresse
            billing_first_name: "required",
            billing_last_name: "required",
            billing_phone: {
                required: true,
                minlength: 10,
            },
            billing_address_1: "required",
            billing_city: {
                required: true,
                lettersonly: true,
            },
            billing_postcode: {
                required: true,
                digits: true,
                minlength: 2,
            },
            billing_country: "required",

            //shipping neue Adresse
            custom_shipping_first_name: "required",
            custom_shipping_last_name: "required",
            custom_shipping_phone: {
                required: true,
                minlength: 10,
            },
            custom_shipping_address_1: "required",
            custom_shipping_city: {
                required: true,
                lettersonly: true,
            },
            custom_shipping_postcode: {
                required: true,
                digits: true,
                minlength: 2,
            },
            custom_shipping_country: "required",
            shipping_first_name: "required",
            shipping_last_name: "required",
            shipping_phone: {
                required: true,
                minlength: 10,
            },
            shipping_address_1: "required",
            shipping_city: {
                required: true,
                lettersonly: true,
            },
            shipping_postcode: {
                required: true,
                digits: true,
                minlength: 2,
            },
            shipping_country: "required",
        },
        messages: {
            custom_billing_first_name: errorMsg.emptyText,
            custom_billing_last_name: errorMsg.emptyText,
            custom_billing_phone: {
                required: errorMsg.emptyText,
                number: errorMsg.phoneLetters,
                minlength: errorMsg.phone,
            },
            custom_billing_address_1: errorMsg.emptyText,
            custom_billing_city: {
                required: errorMsg.emptyText,
                lettersonly: errorMsg.lettersonly
            },
            custom_billing_postcode: {
                required: errorMsg.emptyText,
                number: errorMsg.zipDigits,
                minlength: errorMsg.zipLength,
            },
            custom_billing_country: errorMsg.emptyText,

            //billing neue Adresse
            billing_first_name: errorMsg.emptyText,
            billing_last_name: errorMsg.emptyText,
            billing_phone: {
                required: errorMsg.emptyText,
                number: errorMsg.phoneLetters,
                minlength: errorMsg.phone,
            },
            billing_address_1: errorMsg.emptyText,
            billing_city: {
                required: errorMsg.emptyText,
                lettersonly: errorMsg.lettersonly
            },
            billing_postcode: {
                required: errorMsg.emptyText,
                number: errorMsg.zipDigits,
                minlength: errorMsg.zipLength,
            },
            billing_country: errorMsg.emptyText,

            //shipping neue Adresse
            custom_shipping_first_name: errorMsg.emptyText,
            custom_shipping_last_name: errorMsg.emptyText,
            custom_shipping_phone: {
                required: errorMsg.emptyText,
                number: errorMsg.phoneLetters,
                minlength: errorMsg.phone,
            },
            custom_shipping_address_1: errorMsg.emptyText,
            custom_shipping_city: {
                required: errorMsg.emptyText,
                lettersonly: errorMsg.lettersonly
            },
            custom_shipping_postcode: {
                required: errorMsg.emptyText,
                number: errorMsg.zipDigits,
                minlength: errorMsg.zipLength,
            },
            custom_shipping_country: errorMsg.emptyText,
            shipping_first_name: errorMsg.emptyText,
            shipping_last_name: errorMsg.emptyText,
            shipping_phone: {
                required: errorMsg.emptyText,
                number: errorMsg.phoneLetters,
                minlength: errorMsg.phone,
            },
            shipping_address_1: errorMsg.emptyText,
            shipping_city: {
                required: errorMsg.emptyText,
                lettersonly: errorMsg.lettersonly
            },
            shipping_postcode: {
                required: errorMsg.emptyText,
                number: errorMsg.zipDigits,
                minlength: errorMsg.zipLength,
            },
            shipping_country: errorMsg.emptyText,
        },
        errorElement: 'div',
    });

    $(".pausieren-form").validate({
        submitHandler: function () {
            $(".pausieren-form").addClass('sent');
        },
        rules: {
            timemin: {
                required: true
            },
            timemax: {
                required: true
            }
        },
        messages: {
            timemin: {
                required: errorMsg.password
            },
            timemax: {
                required: errorMsg.password
            }
        },
        errorElement: 'div',
    });




});
$("p, .alles-slogan, .laden-shortstory, .social-shortstory, .team-item, .fakten-item, .wasser-title, .aromen-description, .gutschein-description, .button-inline, .probierpaket-description, .descriprion, .description, .flotte-description, .trink-description, .firmen-description, .durstige-enter, .platz-enter, .mitarbeiter-enter, .angebot-enter").attr("data-aos", "fade-up");
$(".content p, .content h1, .content h2, .content h3, .content ul, .content ol, .content .btn").wrap("<div data-aos='fade-up'></div>");

var posts_index = $('.laden-shortstory').length;
if (posts_index == 4) {
    $('#more_posts').show();
}

//$(".product-maskload").addClass("load");
$(".page-maskload").removeClass("none");

/* magnetize cursor */
var cerchio = document.querySelectorAll('.social');

cerchio.forEach(function (elem) {
    $(document).on('mousemove touch', function (e) {
        magnetize(elem, e);
    });
})

function magnetize(el, e) {
    var mX = e.pageX,
        mY = e.pageY;
    const item = $(el);

    const customDist = item.data('dist') || 30;
    const centerX = item.offset().left + (item.width() / 2);
    const centerY = item.offset().top + (item.height() / 2);

    var deltaX = Math.floor((centerX - mX)) * -0.45;
    var deltaY = Math.floor((centerY - mY)) * -0.45;

    var distance = calculateDistance(item, mX, mY);

    if (distance < customDist) {
        TweenMax.to(item, 0.5, { y: deltaY, x: deltaX, scale: 1.1 });
        item.addClass('magnet');
    }
    else {
        TweenMax.to(item, 0.6, { y: 0, x: 0, scale: 1 });
        item.removeClass('magnet');
    }
}

function calculateDistance(elem, mouseX, mouseY) {
    return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
}

// delete get-params from url
var query = window.location.search.substring(1)

if (query.length) {
    if (window.history != undefined && window.history.pushState != undefined) {
        window.history.pushState({}, document.title, window.location.pathname);
    }
}