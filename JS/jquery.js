$(document).ready(function(){

    $(".plant_1").mouseenter(function() {
        $(".plant_1").animate({
            height: '+=100px',
            width: '+=100px',
        });
    });
    $(".plant_1").mouseleave(function() {
        $(".plant_1").animate({
            height: '-=100px',
            width: '-=100px',
        });
    });

    $(".seed").mouseenter(function() {
        $(".seed").animate({
        height: '+=20px',
        width: '+=20px',
        });
    });
    $(".seed").mouseleave(function() {
        $(".seed").animate({
            height: '-=20px',
            width: '-=20px',
        });
    });
    $(".blank").hover(function() {
        $(".plant_bounce").effect( "bounce", {distance:50px, }, slow );
        });
    });

});