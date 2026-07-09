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


$( "#infographic" ).parent().css("background", "url('/static/upload/media/14463261933259tlo_infograf.jpg')");
$( "a#home" ).parent().css("background", "url('/static/upload/media/1415975050270508krakow4.jpg') no-repeat center");
$( "#call-for-papers" ).parent().css("background", "#b9097c");
$( "#programme-committee" ).parent().css("background", "#eee");
$( "#social-banner" ).parent().css("background", "url('/static/upload/media/1446322987866tlo_social.jpg')");
$( "#social-banner3" ).parent().css("background", "url('/static/upload/media/14526113479415lambda_big_1_13_nieb.jpg')");
$( "#social-banner3" ).parent().css("height", "242px");
$( "#register" ).parent().css("background", "rgb(70, 155, 185)");
$( "td:contains(COFFEE)" ).append('<img class="programme-icon" src="/static/img/coffee.png" />');
$( "td:contains(LUNCH)" ).append('<img class="programme-icon" src="/static/img/lunch.png" />');
