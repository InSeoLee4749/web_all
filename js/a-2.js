$(function(){
    // slide 옆으로
    setInterval(function(){
        
        $(".ani").animate({'marginLeft' : -1200}, 400, function(){
            $(this).find('div').eq(0).appendTo($(this))
            $(this).css("margin-Left",0)
    })
    }, 3000)

    // content tab 부분
    $(".c-tab h2").click(function(){
        $(this).parent("li").addClass('act').siblings().removeClass('act')
    })

    // pop
    $(".notice li").eq(0).click(function(){
        $(".pop").addClass('show')
    })
    $(".pop button").click(function(){
        $(".pop").removeClass('show')
    })
})
