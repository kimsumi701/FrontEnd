// 애니메이션이 없는 움직임
// $('.gnb').mouseover(function () {
//     $(this).css({
//         height: 440,
//     });
//     $('.gnbbg').show();
    // show() -> 태그의 원래의 display 속성값으로 돌려준다.    
// }).mouseout(function () {
//     $(this).css({
//         height: 40,
//     })
//     $('.gnbbg').hide();
    // hide() -> display: none;으로 만들어준다.
// })

// 애니메이션 있는 효과
$('.gnb').mouseover(function () {
    $(this).stop().animate({
        height: 440,
    })
    $('.gnbbg').stop().slideDown();
}).mouseout(function () {
    $(this).stop().animate({
        height: 40,
    })
    $('.gnbbg').stop().sideUp();
})