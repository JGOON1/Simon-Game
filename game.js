$(document).ready(function(){

    var buttonColours = ["red","blue","green","yellow"];
    var gamePattern = [];
    var userClickedPattern = [];
    
    $(".btn").click(function(){
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);



    });


    function nextSequence(){
        var randomNumber = Math.floor(Math.random() * 4);
        var randomChosenColor = buttonColours[randomNumber];
        gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
        audio.play();  



    };










})