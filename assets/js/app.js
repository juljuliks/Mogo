$(function () {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed header 
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Menu nav toggle

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault()

        $(this).toggleClass("active")
        $("#nav").toggleClass("active")
    });

    // Collapse

    $("[data-collapse]").on("click", function(event) { // следим за кликом по элементу с атрибудом дата колапс, как только нажали, должны что то сделать (функш эвент)
        event.preventDefault();

        var $this = $(this),   //this это акардион айтем
            blockId = $this.data('collapse');

        $this.toggleClass("active");    // тоггл класс выдает или забиарет класс эктив
        // $(blockId).slideToggle();   // слайдтоггл делает плавное открытие/закрытие не применили тк конфликт между этим тогл и предыдущим
    });

    // Slider

    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1


    });


    $("[data-nav]").on("click", function (event) {
        event.preventDefault();
    
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    
});

