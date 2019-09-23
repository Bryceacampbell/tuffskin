$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('navbar-background');
          $('.logo').addClass('shrink-logo')
    }

    else {
          $('nav').removeClass('navbar-background');
          $('.logo').removeClass('shrink-logo')

    }
})