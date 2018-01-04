$(window).ready(function () {

    setTimeout(function () {
        $('.wrapper').animate({opacity: 1}, 500)
    }, 500);

    /*-------------------- SLIDER --------------------*/

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false
    });

    /*----------- SCROLL OF THE ANCHOR ----------------*/

    /*$("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });*/

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('body, html').animate({scrollTop: $(target).offset().top}, 1000);

        return false;
    });


    /*------------------- SCROLL UP ------------------*/

    $(".arrow-up").on("click", function () {
        $('body,html').animate({scrollTop: 0}, 1500);
    });


    /*------------------ ANIMATE NUMBER ----------------*/

    var show = true;
    var countbox = ".about-company";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.about-company-item-number').spincrement({
                thousandSeparator: "",
                duration: 3000
            });

            show = false;
        }
    });

    /*-------------------- DROPDOWN ----------------------*/

    $('.custom-dropdown button').click(function () {
        $('.custom-dropdown ul').fadeToggle(100);
    });

    $('body').click(function (event) {
        var clickedElement = event.target;

        if (!$(clickedElement).closest('.custom-dropdown').length) {
            $('.custom-dropdown ul').fadeOut(400);
        }

        if (!$(clickedElement).closest('.custom-select').length) {
            $('.custom-select ul').fadeOut(400);
        }
    });

    /*------------ CUSTOM SELECT-----------*/

    $('.current-value').click(function () {
        $('.custom-select ul').fadeToggle(400);
    });

    $('.custom-select ul li').click(function () {
        var li = $(this);
        var language = li.text();
        li.parent().siblings('.current-value').text(language);
        li.siblings().removeClass('active');
        li.addClass('active');

        li.parent().siblings('input').val(language);
        $('.page-language-icon').attr('class', 'page-language-icon page-language-icon-' + li.attr('class'));

        li.parent().fadeOut(400);
    });

    /*----------------- MODAL ----------------*/

    $('.get-modal').click(function () {
        $('.modal').fadeIn(400).css('display', 'flex');
    });

    $('.modal').click(function (event) {
        var clickedElement = event.target;
        if(!$(clickedElement).closest('.modal-inner').length) {
            $('.modal').fadeOut(400);
        }
        if($(clickedElement).hasClass('close-modal')) {
            $('.modal').fadeOut(400);
        }
    });

    /*--------- Modal Custom Select ------------*/

    $('.select-button').click(function () {
        $(this).closest('.select').siblings().find('.select-button').removeClass('up');
        $(this).closest('.select').siblings().children('ul').fadeOut(400);
        $(this).parent().siblings('.select ul').fadeToggle(400);
        $(this).toggleClass('up');
    });

    $('.modal-inner').click(function (event) {
        var clickedElement = event.target;

        if (!$(clickedElement).closest('.select').length) {
            $('.select ul').fadeOut(400);
            $('.select-button').removeClass('up');
        }
    });

    $('.select ul li').click(function () {
        var li = $(this);
        var value = li.text();
        li.parent().siblings('.select-value').children('.select-value-name').text(value);
        li.siblings().removeClass('active');
        li.addClass('active');
        $('.select-button').removeClass('up');

        li.parent().siblings('input').val(value);

        li.parent().fadeOut(400);
    });



});

