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

$("*").not(".glyphicon").css("font-family", "gilroy"); // this is an ugly hack and should be replaced
$("p").css("font-size", "18px");
$("h1").css("font-size", "40px");
$("h1").css("margin-bottom", "40px");
$( ".speaker" ).css("border", "none");
$( ".speaker_catchphrase" ).css("border-left", "4px solid #FFF100");
$( ".speaker_catchphrase" ).hover(
    function() {
            $(this).css("border-left", "4px solid #40b7e7");
    },
    function() {
            $(this).css("border-left", "4px solid #FFF100");
    });
$( ".speaker_name  " ).css("color", "#40b7e7");
$( "a#home" ).parent().css("background", "url('/static/s3/img/banner-glowny-bez-logo.png') no-repeat center center");
$( "a#home" ).parent().css("background-size", "cover");
$( "a#home" ).parent().css("max-width", "100%");
$( "#call-for-papers" ).parent().css("background", "#41b7e7");
$( "#workshops" ).parent().css("background", "#41b7e7");
$( "#programme-committee" ).parent().css("background", "eaeaea");
$( "#infographic" ).parent().css("background", "rgb(36, 39, 41)");
$( "#venue" ).parent().css("background", "#41b7e7");
$( "#hotels" ).parent().css("background", "#fff");
$( "#social-banner" ).parent().css("background", "url('/static/s3/img/foto-baner-tlo.png') no-repeat center center");
$( "#social-banner3" ).parent().css("background", "url('/static/upload/media/1476109497242936sponsorcontacttlo.jpg')");
$( "#social-banner4" ).parent().css("background", "#d7d7d7");
$( "#register" ).parent().css("background", "#fd006a");
$( "#code-of-conduct" ).parent().css("background", "#fd006a");
$( "td:contains(REGISTRATION)" ).parent().css("background", "#41b7e7");
$( "td:contains(WELCOME)" ).parent().css("background", "#41b7e7");
$( "tr:contains(REGISTRATION)" ).css("color", "white");
$( "tr:contains(WELCOME)" ).css("color", "white");
$( "td:contains(BREAK)" ).parent().css({"background": "rgb(255, 0, 98)", "color": "white"});
$( "td:contains(COFFEE)" ).append('<img class="programme-icon" src="/static/s3/img/kawa.png" />');
$( "td:contains(LUNCH)" ).append('<img class="programme-icon" src="/static/s3/img/lunch.png" />');
$(".day").css("color","rgb(255, 0, 98");
$(".day").css("font-size","30px");
$(".day span").css("color","rgb(64, 183, 231");

var cells = $(".programme td.cell:not(:contains(BREAK), :contains(REGISTRATION), :contains(WELCOME))");

cells.css("position", "relative");
cells.append('<span class="cellBorder"/>');
cells.find(".cellBorder").css({
        'position': 'absolute',
        'top': '10%',
        'left': '-2px',
        'height': '80%',
        'width': '100%',
        'border-width': '4px',
        'border-style': 'none none none solid',
        'border-color': '#FFF100',
        'pointer-events': 'none'
});

$(".programme-header").css("background","#DADADA");
