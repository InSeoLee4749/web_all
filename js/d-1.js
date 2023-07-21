$(function(){
    //swiper
    setInterval(function(){
        
        $(".swiper-wrapper").animate({"marginTop" : -400}, 400, function(){
            $(this).find("div").eq(0).appendTo($(this))
            $(this).css("margin-top",0)
        })

    }, 3000)
        
    
    
    //tab
    $("#twotab h2").click(function(){
        $(this).parent("li").addClass('act').siblings().removeClass('act')
    })
    
})