// 큐브애니 JS - cube.js

//---------------로드구역---------------//
window.addEventListener("DOMContentLoaded",function(){
    // 호출확인
    console.log("로딩완료!");

    // 클릭이벤트 대상: .btns button
    const btns = 
    document.querySelector('.btns button');

    // 클릭시 기능구현함수
    const aniFn = function(){

        // 1. 호출확인
        console.log("나야나!")
    };

    // 대상에 클릭설정하기
    btns.onclick =aniFn;

});
//---------------로드구역---------------//