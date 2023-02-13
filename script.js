
$(".open").click(function() {
    $(".menu").addClass("show-menu");
    $(".overlay-effect").addClass("show-overlay");
})

$(".menu__close").click(function () {
    $(".menu").removeClass("show-menu");
    $(".overlay-effect").removeClass("show-overlay");
})

$("#features-link").click(function () {
    $(".features").slideToggle(300);
    $("#features-link-menu").toggleClass("arrow-up");
})

$("#company-link").click(function () {
    $(".company").slideToggle(300);
    $("#company-link-menu").toggleClass("arrow-up");
})



// reset when screen is > 500px
$(window).resize(function () {
    $(".menu").removeClass("show-menu");
    $(".overlay-effect").removeClass("show-overlay");
});