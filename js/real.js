// jQuery for page scrolling feature
$("body a[href^='#']").on('click', function(e) {
    if($(window).width() < 992) {
        return; // Only scroll with md and large devices i.e. do not scroll in tablets or mobile phones.
    }

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
    if(navigator.userAgent.match(/iPad/i) != null){
        $('video').hide(); // Hide homepage video on ipad
    }

    $('#overview-snippet .blue-clickable, #overview-snippet .blue-btn').mouseover(function(){
        $('#overview-snippet .blue-clickable').addClass('active');
        $('#overview-snippet .blue-btn').addClass('active');
    });
    $('#overview-snippet .blue-clickable, #overview-snippet .blue-btn').mouseout(function(){
        $('#overview-snippet .blue-clickable').removeClass('active');
        $('#overview-snippet .blue-btn').removeClass('active');
    });

    $('#format-snippet .pink-clickable, #format-snippet .pink-btn').mouseover(function(){
        $('#format-snippet .pink-clickable').addClass('active');
        $('#format-snippet .pink-btn').addClass('active');
    });
    $('#format-snippet .pink-clickable, #format-snippet .pink-btn').mouseout(function(){
        $('#format-snippet .pink-clickable').removeClass('active');
        $('#format-snippet .pink-btn').removeClass('active');
    });

    $('#course-for-you-snippet .blue-clickable, #course-for-you-snippet .blue-btn').mouseover(function(){
        $('#course-for-you-snippet .blue-clickable').addClass('active');
        $('#course-for-you-snippet .blue-btn').addClass('active');
    });
    $('#course-for-you-snippet .blue-clickable, #course-for-you-snippet .blue-btn').mouseout(function(){
        $('#course-for-you-snippet .blue-clickable').removeClass('active');
        $('#course-for-you-snippet .blue-btn').removeClass('active');
    });

    $('#fiona-bio-btn, #fiona-anchor').click(function(){
        fionaBioToggle();
    });

    $('#fiona-anchor, #fiona-bio-btn').mouseover(function(){
        fionaAnchorActiveToggle();
    });

    $('#fiona-anchor, #fiona-bio-btn').mouseout(function(){
        fionaAnchorActiveToggle();
    });

    $('#phil-bio-btn, #phil-anchor').click(function(){
        philBioToggle();
    });

    $('#phil-anchor, #phil-bio-btn').mouseover(function(){
        philAnchorActiveToggle();
    });

    $('#phil-anchor, #phil-bio-btn').mouseout(function(){
        philAnchorActiveToggle();
    });

    function fionaBioToggle() {
        if($('#fiona-bio2').css('display') == 'none') {
            $('#fiona-bio2').slideDown(2000, function(){
                $('#fiona-bio-btn').html('Less');
            });
            $('#fiona-overlay-text').html('Minimize profile');
        } else {
            $('#fiona-bio2').hide(function(){
                $('#fiona-bio-btn').html('Read More');
            });
            $('#fiona-overlay-text').html('View full profile');
            window.location.href = "#faculty";
        }
    }

    function philBioToggle() {
        if($('#phil-bio2').css('display') == 'none') {
            $('#phil-bio2').slideDown(500, function(){
                $('#phil-bio-btn').html('Less');                
            });
            $('#phil-overlay-text').html('Minimize profile');
        } else {
            $('#phil-bio2').hide(function(){
                $('#phil-bio-btn').html('Read More');
            });
            $('#phil-overlay-text').html('View full profile');
            // window.location.href = "#faculty";
        }
    }

    function fionaAnchorActiveToggle() {
        if($('#fiona-bio-btn').hasClass('active')) {
            $('#fiona-bio-btn').removeClass('active');
            $('#fiona-anchor').removeClass('active');
            $('#fiona-overlay-circle').hide();
        } else {
            $('#fiona-bio-btn').addClass('active');
            $('#fiona-anchor').addClass('active');
            $('#fiona-overlay-circle').show();
        }
    }

    function philAnchorActiveToggle() {
        if($('#phil-bio-btn').hasClass('active')) {
            $('#phil-bio-btn').removeClass('active');
            $('#phil-anchor').removeClass('active');
            $('#phil-overlay-circle').hide();
        } else {
            $('#phil-bio-btn').addClass('active');
            $('#phil-anchor').addClass('active');
            $('#phil-overlay-circle').show();
        }
    }

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
