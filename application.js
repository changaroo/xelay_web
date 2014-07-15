$(document).ready(function() {
    $('.container').hover(function() {
        $(this).children('.box').slideToggle();
    }, function() {
        $(this).children('.box').slideToggle();
    });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-40604241-1', 'xelayacumen.com');
ga('send', 'pageview');


$(function(){
    $('#maximage').maximage({
        cycleOptions: {
            fx:'fade',
            speed: 800,
            timeout: 8000,
            prev: '#arrow_left',
            next: '#arrow_right'
        }
    });
});
