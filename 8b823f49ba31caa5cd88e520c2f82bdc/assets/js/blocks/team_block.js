$(document).ready(function(){
    
    var clonedDivs1 = $(".teamBlock .slider .slide").clone().removeClass("first last");
    var clonedDivs2 = $(".teamBlock .slider .slide").clone().removeClass("first last");
    var clonedDivs3 = $(".teamBlock .slider .slide").clone().removeClass("first last");
    var clonedDivs4 = $(".teamBlock .slider .slide").clone().removeClass("first last");
    $(clonedDivs1).insertAfter(".teamBlock .slider .slide:last");
    $(clonedDivs2).insertAfter(".teamBlock .slider .slide:last");
    $(clonedDivs3).insertBefore(".teamBlock .slider .slide:first");
    $(clonedDivs4).insertBefore(".teamBlock .slider .slide:first");
    initializeSlider();
    window.requestAnimationFrame(sliderStep);
});

function initializeSlider() {
    var startPos = null;
    var endPos = null;
    $(".dragSlider").each( function() {  
        checkImageLoaded($(this),imagesLoaded);
    }); 
    $(".dragSlider").each( function(i, el) {  
        $(el).data('delta',$(el).data('speed'));
        var hammertime = new Hammer($(el).get(0));
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });    
        // listen to events...
        hammertime.on("panleft panright", function(ev) {
            $(el).data('delta',ev.velocityX * 10);
            scroller.stop(); 
        });
    });
}
function checkImageLoaded(slider, callback) {
    var images = [];
    $(slider).data('loadedImages',0);
    $(slider).find('.slide img').each( function() {
        images[$(this).get(0).src] = $(this).get(0).src;
    });
    if(Object.keys(images).length != 0){
        // When image is loaded (or error) check if totalimages are loaded
        for (var item in images) {
            $("<img/>")
               .on('load', function() { callback(slider, Object.keys(images).length) })
                .on('error', function() {callback(slider, Object.keys(images).length) })
                .attr("src", item);
        };
    } else {
        callback(slider, 0);
    }
}
function imagesLoaded(slider,totalImages) {
    var loadedImages = $(slider).data('loadedImages');
    if (isNaN(loadedImages)) {
        loadedImages = 0;
    }
    loadedImages += 1;
    $(slider).data('loadedImages',loadedImages);
    if (loadedImages >= totalImages) {
        $(slider).addClass('loaded');
        calculatePositionParameters(slider);
    }
}

function calculatePositionParameters(slider) {
    startPos = $(slider).find('.slide.first').offset().left;
    $(slider).data('startpos',startPos);
    endPos = $(slider).find('.slide.last').offset().left + $(slider).find('.slide.last').outerWidth(); ;
    $(slider).data('endpos',endPos);
    $(slider).data('scroll',-startPos);    
}

function sliderStep() {
    $(".dragSlider").each( function() {
       $(this).data('currentdelta', lerp( $(this).data('currentdelta'),$(this).data('delta'),0.066 ) );
       $(this).data('delta', lerp( $(this).data('delta'), $(this).data('speed') ,0.066 ) );
       var scroll = $(this).data('scroll');
       var delta = $(this).data('currentdelta');
       var startPos = $(this).data('startpos');
       var endPos = $(this).data('endpos'); 
       scroll += delta;
       if (scroll <= -endPos) {
           scroll = -startPos;
       }
       if (scroll >= 0) {
           scroll = -startPos;
       }       
       $(this).data('scroll',scroll);
       $(this).css('transform','translateX('+scroll+'px)');
       if($(this).data('currentdelta') < 0.1){
           if (typeof scroller!== "undefined"){
                if(!$("[data-scroll-container]").hasClass("disableScroll")){
                    scroller.start();
                }
           }
       }
    });
    window.requestAnimationFrame(sliderStep);
}