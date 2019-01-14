
$(function(){  // $(document).ready shorthand
  $('.section1').fadeIn('slow');
});

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},1000);

            }

        });

    });

     $("#nav_home_link").click(function (){
             $('html, body').animate({
                 scrollTop: $(".section1").offset().top
             }, 2000);
         });

    $("#nav_about_link").click(function (){
             $('html, body').animate({
                 scrollTop: $(".section_about_me").offset().top
             }, 2000);
         });

     $("#nav_coursework_link").click(function (){
             $('html, body').animate({
                 scrollTop: $(".section2").offset().top
             }, 2000);
         });

     // $("#nav_projects_link").click(function (){
     //         $('html, body').animate({
     //             scrollTop: $(".section3").offset().top
     //         }, 2000);
     //     });

      $("#nav_name_link").click(function (){
             $('html, body').animate({
                 scrollTop: $(".section1").offset().top
             }, 2000);
         });
});
