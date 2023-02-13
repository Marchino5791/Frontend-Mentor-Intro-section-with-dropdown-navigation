
$(".open").click(function() {
    $(".menu").addClass("show-menu");
    $(".overlay-effect").addClass("show-overlay");
    $("body").addClass("block-scroll");
})

$(".menu__close").click(function () {
    $(".menu").removeClass("show-menu");
    $(".overlay-effect").removeClass("show-overlay");
    $("body").removeClass("block-scroll");
})

$("#features-link").click(function () {
    $(".features").slideToggle(300);
    $("#features-link-menu").toggleClass("arrow-up");
})

$("#company-link").click(function () {
    $(".company").slideToggle(300);
    $("#company-link-menu").toggleClass("arrow-up");
})

// reset when user resize screen
$(window).resize(function () {
    $(".menu").removeClass("show-menu");
    $(".overlay-effect").removeClass("show-overlay");
    $("body").removeClass("block-scroll");
});