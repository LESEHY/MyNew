// 모듈 연습 메인 JS - main.js

// 로딩구역없이... => script 태그에 defer 속성사용!

// 모듈화 JS파일 import하기!
import {mTitle,sTitle,personInfo} from "./textData.js";
import message from "./msgFormat.js";
/******************************************************* 
    import 형식:

    import 전달변수 from 파일경로;
    -> 반드시 가져올 모듈화 JS에서 export를 해줘야 함!
    -> from 뒤에 경로는 반드시 상대경로일 경우
    같은 위치일 지라도 ./ 표시를 꼭 해야함!(없으면 안나옴)
    -> 모듈구성은 반드시 서버형식으로 열어야 작동한다!
    (http:// ......)
*******************************************************/

/* 
    [ 모듈화를 위한 구성 ]

    1. 데이터를 처리하기 위한 JS
    -> textData.js

    2. 구체적인 데이터 구성처리를 위한 JS
    -> msgFormat.js
*/

// 1. 타이틀 출력박스
const tpart = document.querySelector(".tpart");
// 2. 내용 출력박스
const demo = document.querySelector("#demo");

// 3. 제목넣기
tpart.innerHTML = `
    <h2>${mTitle}</h2>
    <h3>${sTitle}</h3>
`;

// 4. 내용넣기
demo.innerHTML = message("현석",40);