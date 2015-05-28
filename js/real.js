/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
// $(function() {
//     $('body').on('click', '.page-scroll a', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1000, 'easeOutExpo');
//         event.preventDefault();
//     });
// });

// jQuery for page scrolling feature
$("body a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 1000, 'easeOutExpo', function(){

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


    $('.faculty-link').mouseover(function() {
        $(this).addClass('active');
    })

    $('.faculty-link').mouseout(function() {
        $(this).removeClass('active');
    })

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

});
// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 300
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
