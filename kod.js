$(document).ready(function() {
    $("#openinfo").click(function(){
        $("#info").toggle();
    });

    $("li").dblclick(function(){
        $(this).toggleClass("selected");

    });

    $("#bgcolor").change(function(){
        $("body").css("background-color", $(this).val());
    });
    
    $("#textcolor").change(function(){ 
        $("body").css("color", $(this).val());
    
    });
    
    $("textarea").focusout(function(){
        $("h1").text( $(this).val());
    });
    
    $("textarea").focusin(function(){
        $("textarea").text("", $(this).val());
    });
    
    $("#flugknapp").click(function(){
        var x = Math.floor(Math.random()*800);
        var y = Math.floor(Math.random()*500);
        $("#bil").css({left:x,top:y});
    });
}); 
   
    
                     

