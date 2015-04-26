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


    $('.person-holder').mouseover(function() {
        if (jQuery($(this).children()[0]).hasClass('red-reap')) {
            jQuery($(this).children()[0]).removeClass('red-reap');
            jQuery($(this).children()[0]).addClass('dark-blue-reap');
        }
    })

    $('.person-holder').mouseout(function() {
        if (jQuery($(this).children()[0]).hasClass('dark-blue-reap')) {
            jQuery($(this).children()[0]).removeClass('dark-blue-reap');
            jQuery($(this).children()[0]).addClass('red-reap');
        }
    })

    $('.person-holder').mouseover(function() {
        jQuery(jQuery($(this).children()[0]).children()[1]).css('visibility','visible');    
        jQuery(jQuery($(this).children()[0]).children()[2]).css('visibility','visible');        
    })

    $('.person-holder').mouseout(function() {
        jQuery(jQuery($(this).children()[0]).children()[1]).css('visibility','hidden');
        jQuery(jQuery($(this).children()[0]).children()[2]).css('visibility','hidden');
    })

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
