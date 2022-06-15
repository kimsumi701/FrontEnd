// 위쪽 방향
$('.btnT').click(function () {
    $('.sideT').animate({
        top: 0
    });
})

$('.close').click(function () {
    $('.sideT').animate({
        top: '-100%'
    });
})

$('.btnB').click(function () {
    $('.sideB').animate({
        bottom: 0
    });
})

$('.close').click(function () {
    $('.sideB').animate({
        bottom: '-100%'
    });
})

$('.btnL').click(function () {
    $('.sideL').animate({
        left: 0
    });
})

$('.close').click(function () {
    $('.sideL').animate({
        left: '-100%'
    });
})

$('.btnR').click(function () {
    $('.sideR').animate({
        right: 0
    });
})

$('.close').click(function () {
    $('.sideR').animate({
        right: '-100%'
    });
})
