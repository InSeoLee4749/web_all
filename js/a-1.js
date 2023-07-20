
// slid 옆으로
// $(function(){
//     setInterval(function(){
//         $('.ani').animate({"marginLeft" : -800}, 400, function(){
//             $(this).find("div").eq(0).appendTo($(this))
//             //this는 ani , 첫번째를 다시 막내로 만들어라
//             $(this).css("margin-Left",0)
//             //원래자리로
//         })
//     }, 3000)
    
// })


$(function(){
    // slide 옆으로
    setInterval(function(){
        
        $(".ani").animate({'marginLeft' : -1200}, 400, function(){
            $(this).find('div').eq(0).appendTo($(this))
            $(this).css("margin-Left",0)
    })
    }, 3000)

    // content tab 부분
    $(".tab2 h2").click(function(){
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
