function collapseNavbar() {
    var $nav = $('nav');

    if ($nav.offset().top > 10) {
        $nav.removeClass('navbar-ontop');
    } else {
        $nav.addClass('navbar-ontop');
    }
}

//$(window).scroll(collapseNavbar);
//$(document).ready(collapseNavbar);

//$(function() {
//    // Pad the splash page to accomodate for the navbar.
//    $('#home').css("padding-top", $('nav').height());
//});
