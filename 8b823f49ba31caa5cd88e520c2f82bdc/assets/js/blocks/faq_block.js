$(document).ready(function(){
    
    $(".faqBlock .question .questionHeader").on("click", function(){
        if(!$(this).hasClass("active")){
            $(".faqBlock .question .questionHeader").removeClass("active");
            gsap.to($(".faqBlock .question .questionContainer"), .3, {height: "0px"});
            $(this).addClass("active");
            gsap.to($(this).closest(".question").find(".questionContainer"), .3, {height: $(this).closest(".question").find(".questionContainer .innerQuestionContainer").outerHeight(), onComplete:function(){
                    scroller.update();
                }
            });
        } else {
            gsap.to($(".faqBlock .question .questionContainer"), .3, {height: "0px"});
            $(this).removeClass("active");
        }
    });
    
});
