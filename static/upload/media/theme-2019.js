$( ".push" ).css("height", "0px");
$( "#home" ).parent().css("background-size", "cover");
$( "#home" ).parent().css("padding-bottom", "0");
$( "#info" ).parent().css("background", "white");
$( "#speakers" ).parent().css("background", "white");
$( "#map" ).parent().css("padding", "0");
$( "#code-of-conduct" ).parent().css("background", "#252d5d");
$( "#register" ).parent().css("background", "#692f5d");
$( "#volunteer" ).parent().css("background", "#252d5d");
$( "#diversity-tickets" ).parent().css("background", "#ebc114");
$( "#venue" ).parent().css("background", "#692f5d");
$( "#call-for-papers" ).parent().css("background", "#ebc114");
$( "#social-banner" ).parent().css("background", "url('/static/s3/img/tlo-fot.png') no-repeat center center");

$( "#programme" ).parent().css("background", "white");
$( "#sponsors" ).parent().css("background", "#fff");
$( "#schedule" ).parent().css("background", "rgb(223, 231, 239)");
$( "#krakow-pic" ).parent().css("background", "#ffc13b");
$( "#contact" ).parent().css("background", "rgb(36, 39, 41)");
$( "#newsletter" ).parent().css("background", "rgb(228, 18, 120)");
$( "#workshops" ).parent().css("background", "rgb(228, 18, 120)");	
$( ".to-collapse" ).click(function () {
    window.location.href = 'http://www.lambdadays.org/';
    return false;
})
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

$( "td:contains(strzalka)" ).css("color", "#ffc13b");
$( "td:contains(strzalka)" ).each(function() {
    var text = $(this).text();
    $(this).text(text.replace('strzalka', ''));
    $(this).append('<img src="/static/upload/media/14545179936315arrow.png" class="programme-arrow">');
});
$( ".speaker" ).css("border", "none");
$( ".speaker_catchphrase" ).css("border-left", "4px solid #FFF100");
$( ".speaker_catchphrase" ).hover(
    function() {
            $(this).css("border-left", "4px solid #40b7e7");
    },
    function() {
            $(this).css("border-left", "4px solid #FFF100");
    });
$( ".speaker_name  " ).css("color", "#252d5d");

$( "a#home" ).parent().css("background", "url('/static/s3/img/banner-str-gl.png') no-repeat center center");
$( "a#home" ).parent().css("background-size", "cover");
$( "a#home" ).parent().css("max-width", "100%");
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
        'border-color': '#692f5d',
        'pointer-events': 'none'
});

$( "td:contains(REGISTRATION)" ).parent().css("background", "#ebc114");
$( "td:contains(WELCOME)" ).parent().css("background", "#ebc114");
$( "td:contains(BREAK)" ).parent().css({"background": "#e41278", "color": "white"});
$( "td:contains(COFFEE)" ).append('<img class="programme-icon" src="/static/upload/media/1547112530676643coffee.png" />');
$( "td:contains(LUNCH)" ).append('<img class="programme-icon" src="/static/upload/media/1547112509733231lunch.png" />');
$(".programme-header").css("background","#d7d7d7");
// tabula rasa..
