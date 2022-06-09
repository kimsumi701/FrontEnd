$('.gnb .d1')
    .mouseover(function () {
        let h = $(this).find('.sub').height();
        $('.gnb .d1 .sub').hide();
        $(this).find('.sub').show();
        $('.gnbbg').css({
            height: h
        });
    })
    .mouseout(function () {
        $(this).find('.sub').hide();
        $('.gnbbg').hide();
    })
// height() -> 셀렉터의 높이값을 저장하는 명령 (여백 제외, 실제 컨텐츠가 적용되는 영역의 높이값)
// innerHeight() -> 내부높이 + 패딩
// outerHeight() -> 내부높이 + 패딩 + 보더
// outerHeight(true) -> 내부높이 + 패딩 + 보더 + 마진
// width() -> 셀렉터의 너비값을 저장하는 명령(여백 제외, 실제로 컨텐츠가 적용되는 영역의 높이값)
// 위의 height와 사용법 동일...