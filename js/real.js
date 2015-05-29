// jQuery for page scrolling feature
$("body a[href^='#']").on('click', function(e) {
    e.preventDefault();

    // store hash
    var hash = this.hash;
    if(!hash) {
        return;
    }

    // animate
    $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 1500, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

$(document).ready(function() {
    $('#overview-snippet .blue-clickable, #overview-snippet .blue-link').mouseover(function(){
        $('#overview-snippet .blue-clickable').addClass('active');
        $('#overview-snippet .blue-link').addClass('active');
    });
    $('#overview-snippet .blue-clickable, #overview-snippet .blue-link').mouseout(function(){
        $('#overview-snippet .blue-clickable').removeClass('active');
        $('#overview-snippet .blue-link').removeClass('active');
    });

    $('#format-snippet .pink-clickable, #format-snippet .pink-link').mouseover(function(){
        $('#format-snippet .pink-clickable').addClass('active');
        $('#format-snippet .pink-link').addClass('active');
    });
    $('#format-snippet .pink-clickable, #format-snippet .pink-link').mouseout(function(){
        $('#format-snippet .pink-clickable').removeClass('active');
        $('#format-snippet .pink-link').removeClass('active');
    });

    $('#course-for-you-snippet .blue-clickable, #course-for-you .blue-link').mouseover(function(){
        $('#course-for-you-snippet .blue-clickable').addClass('active');
        $('#course-for-you-snippet .blue-link').addClass('active');
    });
    $('#course-for-you-snippet .blue-clickable, #course-for-you .blue-link').mouseout(function(){
        $('#course-for-you-snippet .blue-clickable').removeClass('active');
        $('#course-for-you-snippet .blue-link').removeClass('active');
    });

    $('.faculty-link').mouseover(function() {
        $(this).addClass('active');
    })

    $('.faculty-link').mouseout(function() {
        $(this).removeClass('active');
    })

});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 300
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').not('.dropdown-toggle').click(function() {
    $('.navbar-toggle:visible').click();
});
