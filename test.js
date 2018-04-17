$(function(){
    $("#b1").click(function(){
        $("#sec2").show();
        $("#sec1").hide();
        $("#sec3").hide();
        $("#sec4").hide();
    });

    $("#b2").click(function(){
        $("#sec3").show();
        $("#sec2").hide();
        $("#sec1").hide();
        $("#sec4").hide();
    });

    $("#b3").click(function(){
        $("#sec4").show();
        $("#sec3").hide();
        $("#sec2").hide();
        $("#sec1").hide();
    });
                   
    $("#b4").click(function(){
        $("#sec1").show();
        $("#sec2").hide();
        $("#sec3").hide();
        $("#sec4").hide();
    });
    
});