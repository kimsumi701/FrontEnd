$('.box1').scroll(function () {
    $(this).css({
        backgroundColor: '#ffaacc',
    });
});

$('.box2').scroll(function () {
    // 변수 s에 .box2의 가로스크롤 위치값 저장
    let s = $(this).scrollLeft();
    // 만약 s가 250 이상이면 >>> .box2 노란색 배경
    // 아니면 >>> 원래 배경색
    if (s >= 250) {
        $(this).css({
            backgroundColor: 'yellow',
        });
    } else {
        $(this).css({
            backgroundColor: 'lightsteelblue',
        });
    }
});

// .box3에 스크롤이 발생
// 만약 .box3의 새로스크롤값이 350 이상이면 .b33에 ative클래스 추가하기, 아니면 active클래스 삭제하기.
$('.box3').scroll(function () {
    let s = $(this).scrollTop();
    if (s >= 350) {
        $('.b33').addClass('active');
    } else {
        $('.b33').removeClass('active');
    }
});

// 브라우저 스크롤 이벤트
// 자바스크립트에서 브라우저는 window라고 작성함..
$(window).scroll(function () {
    let i = $(window).scrollTop();
    let b1 = $('.box1').offset().top;
    let b2 = $('.box2').offset().top;
    if (i >= b2) {
        $('body').css({
            backgroundColor: 'green',
        });
    } else if (i >= b1) {
        $('body').css({
            backgroundColor: 'blue',
        });
    } else {
        $('body').css({
            backgroundColor: '#fff',
        });
    }
});
