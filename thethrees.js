//kod.js
$$(function(){
    $("#k1").click(function(){
        $("#sec2").show();
        $("#sec1").hide();
        $("#sec3").hide();
        $("#sec4").hide();
    });

    $("#k2").click(function(){
        $("#sec3").show();
        $("#sec2").hide();
        $("#sec1").hide();
        $("#sec4").hide();
    });

    $("#k3").click(function(){
        $("#sec4").show();
        $("#sec3").hide();
        $("#sec2").hide();
        $("#sec1").hide();
    });
                   
    $("#k4").click(function(){
        $("#sec1").show();
        $("#sec2").hide();
        $("#sec3").hide();
        $("#sec4").hide();
    });
    
});