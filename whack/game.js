
function hideAll()
{
    $("#boxMenu").hide();
    $("#boxAbout").hide();
    $("#boxGame").hide();
    $("#boxHelp").hide();
}

$(function(){

    for (var i = 0; i < 45; i++) {
        $('#boxGameInner').append('<div id="boxClick" class="box1"></div>');
    }

    hideAll();
    $("#boxMenu").slideDown(1000);

    var points = 0;
    var seconds = 0;
    var timer = $.timer(function() {
        var n = parseInt(Math.random() * 49);
        $('.box1').css("background-image","url('h2.png')");
        $('.box1:eq('+n+')').css("background-image","url('m2.png')");
        seconds++;
    });
    timer.set({ time : 1000, autostart : false });

    $(".box1").click(function(event)
    {
        var img = $(this).css("background-image");
        var index = img.indexOf('m2.png');
        if(index > 0)
        {
            $(this).css("background-image","url('h2.png')");
            points++;
        }
        $('#txtScore').text("Points: " + points);

        if(points === 10)
        {
            timer.stop();
            $('#txtScore').text("Game Over !! You reached 10 Points in " + seconds + " Seconds");
        }
    });

    $("#btnStart").click(function(){
        timer.stop();
        points = 0;
        seconds = 0;
        $('#txtScore').text("Points: " + points);
        hideAll();
        $("#boxGame").fadeIn(1000);
        setTimeout(function(){
            timer.play();
        },1000);
    });

    $("#btnStartAgain").click(function(){
        timer.stop();
        points = 0;
        seconds = 0;
        $('#txtScore').text("Points: " + points);
        hideAll();
        $("#boxGame").fadeIn(1000);
        setTimeout(function(){
            timer.play();
        },1000);
    });

    $("#btnHelp").click(function(){
        hideAll();
        $("#boxHelp").slideDown(1000);
    });

    $("#btnAbout").click(function(){
        hideAll();
        $("#boxAbout").slideDown(1000);
    });

    $("#btnBack1").click(function(){
        hideAll();
        $("#boxMenu").slideDown(1000);
    });

    $("#btnBack2").click(function(){
        hideAll();
        $("#boxMenu").slideDown(1000);
    });

    $("#btnBack3").click(function(){
        timer.stop();
        points = 0;
        seconds = 0;
        $('#txtScore').text("Points: " + points);
        hideAll();
        $("#boxMenu").fadeIn(1000);
    });
});