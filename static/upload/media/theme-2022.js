$( ".push" ).css("height", "0px");
$( "#home" ).parent().css("background-size", "cover");
$( "#home" ).parent().css("padding-bottom", "0");
$( "#info" ).parent().css("background", "url('/static/upload/media/1628512903544746ld2022_tlo.jpeg') no-repeat center");
$( "#info" ).parent().css("background-size", "cover");
$( "#infographics" ).parent().css("background", "#0c5993");
$( "#speakers" ).parent().css("background", "white");
$( "#speakers" ).parent().find("h1").css("font-size", "2em");
$( "#map" ).parent().css("padding", "0");
$( "#code-of-conduct" ).parent().css("background", "#0c5993");
$( "#register" ).parent().css("background", "#c83b6a");
$( "#register" ).parent().find("h1").css("color", "white");
$( "#volunteer" ).parent().css("background", "#c83b6a");
$( "#diversity-tickets" ).parent().css("background", "#f4bb2c");
$( "#venue" ).parent().css("background", "#50c5ff");
$( "#call-for-papers" ).parent().css("background", "#f4bb2c");
$( "#tfp-tfpie" ).parent().css("background", "#f4bb2c");
$( "#social-banner" ).parent().css("background", "url('/static/s3/img/tlo-fot.png') no-repeat center center");
$( "#time-zone" ).parent().children("p").css("color", "black");
$( "#time-zone" ).parent().children("p").css("font-size", "130%");

$( "#programme" ).parent().css("background", "white");
$( "#sponsors" ).parent().css("background", "white");
$( "#sponsorship" ).parent().css("background", "url('/static/upload/media/1629471557966938ld2022_tlo_sponsor.jpg') center no-repeat");
$( "#sponsorship" ).parent().css("background-size", "cover");
$( "#schedule" ).parent().css("background", "#dfe7ef");
$( "#krakow-pic" ).parent().css("background", "#f4bb2c");
$( "#contact" ).parent().css("background", "#242729");
$( "#newsletter" ).parent().css("background", "#c83b6a");
$( "#waiting-list" ).parent().css("background", "#50c5ff");
$( "#workshops" ).parent().css("background", "#0c5993");
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

$( "td:contains(strzalka)" ).css("color", "#f4bb2c");
$( "td:contains(strzalka)" ).each(function() {
    var text = $(this).text();
    $(this).text(text.replace('strzalka', ''));
    $(this).append('<img src="/static/upload/media/14545179936315arrow.png" class="programme-arrow">');
});
$( ".speaker" ).css("border", "none");
$( ".speaker_catchphrase" ).css("border-left", "4px solid #f4bb2c");
$( ".speaker_catchphrase" ).hover(
    function() {
            $(this).css("border-left", "4px solid #50c5ff");
    },
    function() {
            $(this).css("border-left", "4px solid #f4bb2c");
    });
$( ".speaker_name").css("color", "#0c5993");

$( "a#home" ).parent().css("background", "url('/static/upload/media/1627463633530096randomlambdabanner.png') no-repeat center center");
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
        'border-color': '#50c5ff',
        'pointer-events': 'none'
});

$( "td:contains(REGISTRATION)" ).parent().css("background", "#f4bb2c");
$( "td:contains(WELCOME)" ).parent().css("background", "#f4bb2c");
$( "td:contains(BREAK)" ).parent().css({"background": "#c83b6a", "color": "white"});
$( "td:contains(COFFEE)" ).append('<img class="programme-icon" src="/static/upload/media/1547112530676643coffee.png" />');
$( "td:contains(LUNCH)" ).append('<img class="programme-icon" src="/static/upload/media/1547112509733231lunch.png" />');
$(".programme-header").css("background","#c9c9c9");
