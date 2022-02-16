$( document ).ready(function() {
    /**
     * Handle resizing
     */
    $(window).on('resize', function () {
        //reset childWidth and reset scrollpos
        $("[data-slider]").each( function () {
            if($(this).hasClass("secondPosition")){
                $(this).css("height", $(this).find(".backgroundSlider").height());
            }
            if ($(this).outerWidth(true) != $(this).data('current-width') ) {
                $(this).data('current-width', $(this).outerWidth(true));
                // reset values;
                $(this).data('slider-child-width', $(this).find($(this).data('slider')).first().outerWidth(true));
                $(this).data('slider-child-margin', $(this).find($(this).data('slider')).outerWidth(true) - $(this).find($(this).data('slider')).outerWidth());
                var children = $(this).find($(this).data('slider')).length;
                var sliderWidth = $(this).outerWidth(true) + $(this).data('slider-child-margin');
                var visibleChildren = Math.floor( sliderWidth / Math.floor($(this).data('slider-child-width')) );
                $(this).data('slider-visible-children',visibleChildren);
                $(this).data('slider-scroll',0);
                $(this).find('.slidesContainer').css("left",0);
                $(this).trigger('positionChanged');                

            }
        });
    });

    /**
     * Initialize all sliders on the page
     */
    $("[data-slider]").each( function () {
        var slider = $(this);
	var mc = new Hammer($(this)[0], { direction: Hammer.DIRECTION_ALL } );
        $(this).find('a').on('dragstart', function(e){
          return false;
        });

        if($(this).hasClass("secondPosition")){
            var slider = $(this);
            setTimeout(function(){
                $(slider).css("height", $(slider).find(".backgroundSlider").outerHeight());
            }, 1200);
        }

        $(slider).data('current-width', $(slider).outerWidth(true));
        $(slider).find('.slidesContainer').css("left", "0px");
        $(slider).data('slider-container-transition-store', $(slider).find('.slidesContainer').css('transition'));
        $(this).data('slider-child-width', $(this).find($(this).data('slider')).outerWidth(true));
        $(this).data('slider-child-margin', $(this).find($(this).data('slider')).outerWidth(true) - $(this).find($(this).data('slider')).outerWidth());
        var element = $(this).find($(this).data('slider'));
        var children = 0;
        $(element).each(function(i, el){
            if($(el).is(":visible")){
                children = children + 1;
            }
        });
        var sliderWidth = $(this).outerWidth(true) + $(this).data('slider-child-margin');
        var visibleChildren = Math.floor(sliderWidth / Math.floor($(this).data('slider-child-width')) );
        $(this).parent(".sliderContainerWrapper").find('.sliderBullets').html('');
        $(this).find($(this).data('slider')).each( function(index,element) {
            if(index <= (children - visibleChildren)){
                    $(slider).parent(".sliderContainerWrapper").find('.sliderBullets').append('<div class="bullet" data-pos="'+index+'"><i class="icon-crown"></i></div>');
            }
        });
        $(slider).parent(".sliderContainerWrapper").find('.sliderBullets .bullet[data-pos="0"]').addClass('active');
        
        $(slider).data('slider-scroll', 0 );
        $(slider).trigger('positionChanged');
        $(this).data('slider-visible-children',visibleChildren);
        if (visibleChildren >= children) {
            $(slider).find(".sliderButton").addClass("hidden");
        }
        else {
            $(slider).find(".sliderButton").removeClass("hidden");
        }

        /**
         * Handle panning with Hammer
         */
        mc.on("panend panstart panmove pancancel", function(ev) {
            var slider = $(ev.target).closest("[data-slider]");
            var childWidth = $(slider).data('slider-child-width');
            var position = parseInt($(slider).find('.slidesContainer').css("left"));
            if (ev.type=="panstart") {
                $(slider).data('pan-start', ev.center.x);
                $(slider).data('pan-start-position', position);
                $(slider).find($(slider).data('slider')).each( function () {
                    $(this).css({'pointer-events':'none'});
                });
                $(slider).find('.slidesContainer').css('transition','0s');
                return;
            }
            if (ev.type=="panmove") {
                var panStart = $(slider).data('pan-start');
                var panStartPosition = $(slider).data('pan-start-position');
                position = panStartPosition + (ev.center.x -panStart );
                var visibleChildren = $(slider).data('slider-visible-children');
		if(position < - (children-visibleChildren) * childWidth){
		    position = -(children-visibleChildren) * childWidth;
		}
		if(position > 0) {
		    position = 0;
		}

                $(slider).find('.slidesContainer').css("left",position) ;
            }

            if(ev.type == "panend" || ev.type == "pancancel" ){
                $(slider).find($(slider).data('slider')).each( function () {
                    $(this).css({'pointer-events':'auto'});
                });
                $(slider).find('.slidesContainer').css('transition',$(slider).data('slider-container-transition-store'));
                // calculate the position to show
                var startPanPos = $(slider).data('pan-start');
                if (startPanPos > ev.center.x) { // pan left
                    position = Math.round((position - (childWidth/2)) / childWidth) * childWidth;
                }
               else { // pan right
                    position = Math.round((position + (childWidth/2)) / childWidth) * childWidth;
                }

                var visibleChildren = $(slider).data('slider-visible-children');
		if(position < - (children-visibleChildren) * childWidth){
		    position = -(children-visibleChildren) * childWidth;
		}
		if(position > 0) {
		    position = 0;
		}

                $(slider).find('.slidesContainer').css("left",position) ;

                var pos  = Math.abs(position / childWidth);
                $(slider).parent(".sliderContainerWrapper").find('.sliderBullets .bullet').removeClass('active');
                $(slider).parent(".sliderContainerWrapper").find('.sliderBullets .bullet[data-pos="'+pos+'"]').addClass('active');
                $(slider).data('slider-scroll', pos );
                $(slider).trigger('positionChanged');                
                $(slider).find('.indicator').addClass("hidden");
                ev.preventDefault();
                return false;
            }
        });

        /**
         * When clicked on a sliderButton (prev or next) go to previous or next slide
         */
        $(this).on('click', '.sliderButton', function (e) {
            if($(this).hasClass("disabled")) return;
            var slider = $(this).closest("[data-slider]");

            var direction = 1;
            if ($(this).hasClass("prev")) {
                // previous button
                direction = -1;
            }
            var childWidth = $(slider).data('slider-child-width');
            var visibleChildren = $(slider).data('slider-visible-children');
            
            var pos = $(slider).data('slider-scroll')?($(slider).data('slider-scroll')+direction) : 1 ;
            $(slider).parent(".sliderContainerWrapper").find('.sliderBullets .bullet').removeClass('active');
            $(slider).parent(".sliderContainerWrapper").find('.sliderBullets .bullet[data-pos="'+pos+'"]').addClass('active');
            $(slider).data('slider-scroll', pos );
            $(slider).trigger('positionChanged');
            
            $(slider).find('.slidesContainer').css("left", "-"+(childWidth*$(slider).data('slider-scroll'))+"px");
            $(slider).find('indicator').addClass("hidden");   // hide indicator

        });

        /**
         * When clicked on a sliderButton (prev or next) go to previous or next slide
         */
        $(this).parent(".sliderContainerWrapper").on('click', '.sliderBullets .bullet', function (e) {
            var pos = $(this).data('pos');
            $(this).parent().find('.bullet').removeClass('active');
            $(this).addClass('active');
            var childWidth = $(slider).data('slider-child-width');
            $(slider).data('slider-scroll',pos);
            $(slider).trigger('positionChanged');
            $(slider).find('.slidesContainer').css("left", "-"+(childWidth*$(slider).data('slider-scroll'))+"px");
        });
        
        
        $(this).on('positionChanged', function (e) {
            var position = $(this).data('slider-scroll'); 
            var element = $(this).find($(this).data('slider'));
            var children = 0;
            $(element).each(function(i, el){
                if($(el).is(":visible")){
                    children = children + 1;
                }
            });         
            var visibleChildren = $(this).data('slider-visible-children');
            // previous and next button
            
            if($(this).hasClass("secondPosition")){
                $(this).find(".slide").removeClass("big");
                $(this).find(".slide:visible").eq(position + 1).addClass("big");
            }
            
            if (children > visibleChildren) {
                $(slider).find('.sliderButton.next').removeClass("hidden");
                $(slider).find('.sliderButton.prev').removeClass("hidden");                
                if(position >= (children-visibleChildren)){
                    $(slider).find('.sliderButton.next').addClass("disabled");
                }
                else {
                    $(slider).find('.sliderButton.next').removeClass("disabled");
                }                
                if(position ==0){
                    $(slider).find('.sliderButton.prev').addClass("disabled");
                }
                else {
                   $(slider).find('.sliderButton.prev').removeClass("disabled");
                }
            }
            else {
                $(slider).find('.sliderButton.next').addClass("hidden");
                $(slider).find('.sliderButton.prev').addClass("hidden");
            }
            if($(slider).find(".sliderBullets .bullet:last-child").hasClass("active")){
                $(slider).find('.sliderButton.next').addClass("disabled");
            }
         
        });
    });
});