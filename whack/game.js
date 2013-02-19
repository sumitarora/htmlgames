
function hideAll()
{
    $("#boxMenu").hide();
    $("#boxAbout").hide();
    $("#boxGame").hide();
    $("#boxHelp").hide();
}

$(function(){
    hideAll();
    $("#boxMenu").fadeIn(1000);

    var points = 0;
    var seconds = 0;
    var timer = $.timer(function() {
        var n = parseInt(Math.random() * 49);
        $('.box1').css("background-color","red");
        $('.box1:eq('+n+')').css("background-color","black");
        seconds++;
    });
    timer.set({ time : 1000, autostart : false });

    $(".box1").click(function(event)
    {
        var color = $(this).css("background-color");
        if(color == "rgb(0, 0, 0)")
        {
            $(this).css("background-color","red");
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
        $("#boxHelp").fadeIn(1000);
    });

    $("#btnAbout").click(function(){
        hideAll();
        $("#boxAbout").fadeIn(1000);
    });

    $("#btnBack1").click(function(){
        hideAll();
        $("#boxMenu").fadeIn(1000);
    });

    $("#btnBack2").click(function(){
        hideAll();
        $("#boxMenu").fadeIn(1000);
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