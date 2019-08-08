$(function() {
    // Закреп хедера
    var header = $("#header");
    var intro = $("#intro");
    var introH;
    var scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (scrollPos >= introH) {
            header.addClass('fixed');
        } else if (scrollPos < introH) {
            header.removeClass('fixed');
        }
    });

    // Login pop-up
    var loginBtn = $("#loginBtn");
    var popup = $(".login-popup");
    var closeBtn = $("#closeBtn");
    var innerReg = $('.pop-up__reg');
    var innerLog = $('.pop-up__signin');
    var showLogBtn = $('#showSignIn');
    var showRegBtn = $('#showReg');


    // Открыть попап
    loginBtn.on('click', function() {
        popup.addClass('show');
    });
    // Закрыть попап
    closeBtn.on('click', function() {
        popup.removeClass('show');
    });

    showLogBtn.on('click', function(e) {
        e.preventDefault();

        innerReg.removeClass('show');
        innerLog.addClass('show');
    });

    showRegBtn.on('click', function(e) {
        e.preventDefault();

        innerLog.removeClass('show');
        innerReg.addClass('show');
    });


    // Burger
    var burgerInner = $("#burgerInner");
    var burgerButton = $("#burgerButton");

    burgerButton.on('click', function(e) {
        e.preventDefault();

        burgerInner.toggleClass('show');
        
    });

    // Email Ajax Send

    $('.form').submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function() {
            alert("Заявка отправлена!");
            setTimeout(function() {
                th.trigger('reset');
            }, 1000);
        });
        return false;
    });


});