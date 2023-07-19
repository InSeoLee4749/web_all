$(function(){
    setInterval(function(){
        
        $(".ani").animate({'marginLeft' : -1200}, 400, function(){
            $(this).find('div').eq(0).appendTo($(this))
            $(this).css("margin-Left",0)
    })
    }, 3000)
})

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