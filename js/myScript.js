$(document).ready(function(){
    var currentCarousel = 4, minCarousel = 1, maxCarousel = 5;
    $("#carouselImage").css("background-image", "url(assets/carouselImages/carousel"+currentCarousel+".jpg)");
    
    function changeCarouselHeadingLevelOne(){
        switch(currentCarousel){
            case 1: $("#carouselContent h1").text("Intelligent Drones");
                break;
            case 2: $("#carouselContent h1").text("Humanoids");
                break;
            case 3: $("#carouselContent h1").text("Processing");
                break;
            case 4: $("#carouselContent h1").text("Embedded Systems");
                break;
            case 5: $("#carouselContent h1").text("Artificial Intelligence");
               }
    }
    
    /*--------------------On Clicking the Right Carousel Button--------------------*/
    $("#carouselRightButton").click(function(){
        $("#carouselImage").animate({opacity:'0'},300);
        //Rotation of carousel images
            if(currentCarousel == maxCarousel)
                currentCarousel = minCarousel;
            else
                currentCarousel++;
        
        setTimeout(function() {
            $("#carouselImage").css("background-image", "url(assets/carouselImages/carousel"+currentCarousel+".jpg)");
        }, 300);
        //$("#carouselImage").animate({right:'-100%'},1);
        $("#carouselImage").animate({opacity:'1'},200);
        
        //Changing the Carousel heading With animation EFFECT
        $("#carouselContent").animate({left:'-40%',opacity:'0'},500);
        setTimeout(function() {changeCarouselHeadingLevelOne();}, 500);
        $("#carouselContent").animate({left:'15%'},1);
        $("#carouselContent").animate({left:'0',opacity:'1'},400);
    });
    
    /*--------------------On Clicking the Left Carousel Button--------------------*/
    $("#carouselLeftButton").click(function(){
        $("#carouselImage").animate({opacity:'0'},300);
        //Rotation of carousel images
            if(currentCarousel == minCarousel)
                currentCarousel = maxCarousel;
            else
                currentCarousel--;
        
        setTimeout(function() {
            $("#carouselImage").css("background-image", "url(assets/carouselImages/carousel"+currentCarousel+".jpg)");
        }, 300);
        //$("#carouselImage").animate({left:'-100%'},1);
        $("#carouselImage").animate({opacity:'1'},200);
        
        //Changing the Carousel heading With animation EFFECT
        $("#carouselContent").animate({left:'15%',opacity:'0'},300);
        setTimeout(function() {changeCarouselHeadingLevelOne();}, 300);
        $("#carouselContent").animate({left:'-40%'},1);
        $("#carouselContent").animate({left:'0',opacity:'1'},500);
    });
    
    
    $(".inventionBlocks").mouseenter(function(){
        $(this).children().siblings("aside").animate({
            width: "toggle"
        },200);
    });
    $(".inventionBlocks").children().siblings("aside").mouseleave(function(){
        $(this).animate({
            width: "toggle"
        },300);
    });
    
}); /*-------------------------------------------End of document ready Method---------------------------------------------*/