$( document ).ready(function() {
    $("#contact").click(function(){
        $(".innerBody").addClass("hide"); 
        $(".contactBody").removeClass("hide");
    });

    $("#about").click(function(){
        $(".contactBody").addClass("hide"); 
        $(".innerBody").removeClass("hide"); 
    });
    
});