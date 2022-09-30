// CGV PJ 메인 페이지 JS - main.js

// 예고편 선택메뉴 a요소
var movlink = document.querySelectorAll(".mlist a");
console.log(movlink);

// a요소 개수
var len = movlink.length;
// length는 개수를 구해오는 속성

// for문을 이용하여 링크 설정하기
// for(시;한;증){실행코드}

for(var i=0;i<len;i++){
    console.log("진짜도니?",i);
}