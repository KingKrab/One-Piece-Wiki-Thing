$(document).ready(function() {
    $('.hamburger').click(function() {
       $('nav ul').slideToggle(400, function() {
           console.log('imhere');
           $(this).toggleClass('expand').css('display', '');
       });
    });
});