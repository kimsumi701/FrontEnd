/* 
    main 클래스
    클릭 이벤트
    클래스 on 삭제
    ****클래스 on 추가****

*/
// getElementsByClassName로 가져온 것은 배열.
let active = document.getElementsByClassName('main');
// active.addEventListener('click', click);

function click() {    
    // on 삭제
    for (i = 0; i < active.length; i++) {
        active[i].classList.remove('on');             
    } 
    
    // for (i = 0; i < active.length; i++) {
    //     active[i].addEventListener('click', function() {
    //         this.classList.add('on');            
    //     });
    // }    
}

// 배열내에서 클릭한 개체(배열) 찾기

click();

