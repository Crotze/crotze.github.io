$(document).ready(function () {
    $('.scroll').click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500)
    });
});
    
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.main-nav').addClass('show');
    } else {
        $('.main-nav').removeClass('show');
    }
});