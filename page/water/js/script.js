$( document ).ready(function() {
    var stepNum = 0;
    var valueEnter  = $(".warenkorb-input").val();

    /* tab page abo */
    $('.tabs').on('click', 'li:not(.current)', function() {
        stepNum = $(this).index();
        if (stepNum == 2) {
            let total = 0;
            let qty = $('[name="abo_qty"]:checked').val();
            $('.warenkorb-input').each(function () {
                total += Number($(this).val());
            });
            if (total < qty) return false;
        }
        $(this).addClass('current').siblings().removeClass('current').parents('.konfigurieren-step').find('.konfigurieren-tab').eq($(this).index()).addClass('visible').siblings('.konfigurieren-tab').removeClass('visible');
    });

    if(stepNum == 0) {
        $('.step-form').click(function(){
            stepNum++;
            $('.konfigurieren-tab').each(function(){
                if($(this).hasClass('visible')) {
                    $(this).removeClass('visible');
                    $(this).next().addClass('visible');
                    return false;
                }
            })
            $('.tabs li').each(function(){
                if($(this).hasClass('current')) {
                    $(this).removeClass('current');
                    $(this).next().addClass('current');
                    return false;
                }
            })
            console.log(stepNum);
        })
    }
    if(stepNum == 1) {
        $('.konfigurieren-step').addClass('step-num'+stepNum);
        $('.step-form').text($(this).data("submit"));
        if(valueEnter <= 15) {
            $(".du-musst, .step-form").addClass("active");
        }
    }

    $(".step-zuruck").click(function() {
        $('.tabs li').each(function(){
            if($(this).hasClass('current')) {
                $(this).removeClass('current');
                $(this).prev().addClass('current');
                return false;
            }
        })
        $('.konfigurieren-tab').each(function(){
            if($(this).hasClass('visible')) {
                $(this).removeClass('visible');
                $(this).prev().addClass('visible');
                return false;
            }
        })
    });


    /* abo max 12 Wochen STEP1 */
    $( ".allewoche" ).change(function() {
        var max = parseInt($(this).attr('max'));
        var min = parseInt($(this).attr('min'));
        if ($(this).val() >= max) {
            $(this).val(max);
            $(".allewoche-max").addClass("active");
        } else if ($(this).val() < max) {
            $(".allewoche-max").removeClass("active");
        }
        else if ($(this).val() < min) {
            $(this).val(min);
        }
    });

    /* abo warenkorb STEP2 */

    $(".warenkorb-status__info span").html("15");
    $(".warenkorb-input").change(function() {
        var total = 0;

        $('.warenkorb-input').each(function () {
            total += Number($(this).val());
        });
        var procent = total * (100 / 15);
        $(".warenkorb-status__ico").css("width", procent + "%");
        $(".warenkorb-status__info").css("left", procent + "%");
        $(".warenkorb-status__info span, .min-15").html(15 - total);

        if (total >= 15) {
            $(".bittle-wahle__title span").addClass("active");
            $(".du-musst, .step-form").removeClass("active");
            $(".warenkorb-pluse").removeClass("productCountUp").attr("disabled", true);

        } else {
            $(".bittle-wahle__title span, .du-musst").removeClass("active");
            $(".du-musst, .step-form").addClass("active");
            $(".warenkorb-pluse").addClass("productCountUp").removeAttr("disabled");
        }
        console.log(total);
    });

    console.log(valueEnter);

    if ($('.select-js').length) {
        $('.select-js').select2();
    }
});