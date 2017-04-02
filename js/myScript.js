$(document).ready(function(){
    var currentCarousel = 1, minCarousel = 1, maxCarousel = 5;
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
    });
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
    });
});