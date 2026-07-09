$( ".push" ).css("height", "0px");
$( "#home" ).parent().css("background-size", "cover");
$( "#home" ).parent().css("padding-bottom", "0");
$( "#info" ).parent().css("background", "white");
$( "#speakers" ).parent().css("background", "white");
$( "#map" ).parent().css("padding", "0");
$( "#code-of-conduct" ).parent().css("background", "white");
$( "#register-now" ).parent().css("background", "#ffc13b");
$( "#venue" ).parent().css("background", "white");
$( "#social-banner2" ).parent().css("background", "url('/static/upload/media/14526895285446571534893_zolt1.jpg')");
$( "#social-banner3" ).parent().css("height", "242px");
$( "#programme" ).parent().css("background", "white");
$( "#sponsors" ).parent().css("background", "#fff");
$( "#schedule" ).parent().css("background", "rgb(223, 231, 239)");
$( "#krakow-pic" ).parent().css("background", "#ffc13b");
$( "#contact" ).parent().css("background", "rgb(36, 39, 41)");
$( ".to-collapse" ).click(function () {
    window.location.href = 'http://www.lambdadays.org/';
    return false;
});
$( ".slide-button" ).click(function () {
});
$( ".register" ).click(function () {
    $(".menu-item:contains('Register')").click();
});
$( ".map-overlay" ).click(function () {
    $( this ).css("pointer-events", "none");
});
$( ".map-overlay" ).mouseout(function () {
    $( this ).css("pointer-events", "auto");
});
$( "td:contains(REGISTRATION)" ).parent().css("background", "rgb(255, 185, 51)");
$( "td:contains(WELCOME)" ).parent().css("background", "rgb(255, 185, 51)");
$( "td:contains(BREAK)" ).parent().css({"background": "rgb(180, 30, 123)", "color": "white"});
$( "td:contains(strzalka)" ).css("color", "#ffc13b");
$( "td:contains(strzalka)" ).each(function() {
    var text = $(this).text();
    $(this).text(text.replace('strzalka', ''));
    $(this).append('<img src="/static/upload/media/14545179936315arrow.png" class="programme-arrow">');
});
