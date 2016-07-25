// function collapseNavbar() {
//     var $nav = $('nav');

//     if ($nav.offset().top > 10) {
//         $nav.removeClass('navbar-ontop');
//     } else {
//         $nav.addClass('navbar-ontop');
//     }
// }

//$(window).scroll(collapseNavbar);
//$(document).ready(collapseNavbar);

$(function() {
   var $form = $('#contact-form');

   $form.on('submit', function() {
       $.ajax({
           url: 'contact/mailer.php',
           type: 'POST',
           data: $form.serialize(),
           success: function() {
               $('#submit').addClass('.button--success');
           },
           error: function() {
               $('#submit').addClass('.button--failure');
           }
       });
   });
});

var XP_DIFFS = [
    null, 0,
    // Levels 2 to 10
    1000,  2000,  3000,  4000,  5000,  6000,  7000,  8000,  9000,
    // Levels 11 to 20
    10000, 10000, 10000, 10000, 15000, 20000, 20000, 20000, 25000, 25000,
    // Levels 21 to 30
    50000, 75000, 100000, 125000, 150000, 190000, 200000, 250000, 300000, 350000, 500000,
    // Levels 31 to 40
    500000, 750000, 1000000, 1250000, 1500000, 2000000, 2500000, 1000000, 1000000
]

var PRICE_PER_XP = 0.0002;

function XPNeeded(from, to) {
    if ((from > 40 || from < 1) || (to > 40 || to < 1) ) {
        throw "Invalid level";
    }

    if (to <= from) {
        throw "Invalid range";
    }

    var diff = 0;

    for (var i = from; i <= to; i++) {
        diff += XP_DIFFS[i];
    }

    return diff;
}


function formula(xp) {
    return xp * PRICE_PER_XP;
}

// [2,5,10,15,20,25,30,35,40].forEach((level) => {
//     const needed = XPNeeded(1, level);


//     console.log("LEVEL:", level, "XP:", needed, "PRICE:", formula(needed));
// })
