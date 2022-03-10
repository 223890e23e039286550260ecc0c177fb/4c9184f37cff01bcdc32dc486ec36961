var scrollPosition = 0;
var scrollerHeight = 0;

$(document).ready(function() {
    
    $("header").addClass("active");
    $(".focusButton").addClass("active");
    initDefaultPage();
    
    setInterval(function(){
        var containerHeight = $("[data-scroll-container]").height();
        if(scrollerHeight != containerHeight){
            scrollerHeight = containerHeight;
            scroller.update();
        }
    }, 10);
    
    document.addEventListener('wpcf7invalid', function (event) {
        setTimeout(function(){
            $('.wpcf7-form-control').each(function () {
                if ($(this).hasClass('wpcf7-not-valid')) {
                    $(this).closest(".field").addClass('invalid');
                } else {
                    $(this).closest(".field").removeClass('invalid');
                }
            });
        }, 10);
    }, false);
    
    $(".wpcf7-submit").on("click", function(){
        $(".field").removeClass('invalid');
    });
    
    setInterval(function(){
        $(".wpcf7-submit").prop("disabled",false); // disable button after clicking on button
    }, 10);
    
    $("header .bigMenu .link").on("click", function(){
        var id = $(this).data("id");
        scroller.scrollTo(".dataScrollSection[data-id='" + id + "']", -50);
        $("header #hamburger .bars").trigger("click");
    });
    
    $("header #hamburger .bars").on("click", function(){
        if($("header").hasClass("open")){
            $("header").removeClass("open");
            $("html, body").removeClass("overflow");
        } else {
            $("header").addClass("open");
            $("html, body").addClass("overflow");
        }
    });
    
});


function lazyLoadImages() {
    var lazyloadImages;
    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazy");
        const config = {
	    root: null, // avoiding 'root' or setting it to 'null' sets it to default value: viewport
	    rootMargin: '500px',
	    threshold: 0.0
        };
        var imageObserver = new IntersectionObserver(function(entries, observer) {
	    $(entries).each(function(i, entry) {
		if (entry.isIntersecting) {
		    var image = entry.target;
		    image.classList.remove("lazy");
		    image.src = $(image).data('src');
		    imageObserver.unobserve(image);
		}
	    });
        },config);
	$(lazyloadImages).each(function(i, image) {
	    imageObserver.observe(image);
	});
    } else {
	$(".lazy").each(function(i, image) {
	    image.classList.remove("lazy");
            image.src = $(image).data('src');
        });
    }
}

function initDefaultPage(){
    $(".customSelect").select2({
        minimumResultsForSearch: -1
    });
    lazyLoadImages();
    scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        smoothMobile: false,
        getDirection: true
    });
    scroller.on("scroll", function(e){
        var currentScrollY = e.scroll.y;
        if(currentScrollY > 0){
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
        $(".customSelect").select2("close");
        if(currentScrollY === $(".pageContainer").height() - $(window).height()){
            $(".focusButton").addClass("hidden");
        } else {
            $(".focusButton").removeClass("hidden");
        }
    });
    scroller.stop();
    
    setTimeout(function(){
        $("html, body").removeClass("overflow");
    }, 300);
    
    setTimeout(function(){
        $("header").addClass("active");
    }, 1200);
    
    setTimeout(function(){
        scroller.start();
    }, 1200);
}
//lerp function for linear interpolation
const lerp = (x, y, a) => x * (1 - a) + y * a;