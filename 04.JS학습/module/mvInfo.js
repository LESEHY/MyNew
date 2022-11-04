// 영화정보 클래스 JS - mvInfo.js

class MovieInfo {
    // 생성자 메서드 : 주로 속성만 셋팅함!
    constructor(tit, sum, dir, act, des) {
        this.제목 = tit;
        this.개요 = sum;
        this.감독 = dir;
        this.출연 = act;
        this.문구 = des;
    } // constructor //

    // 내가 만들고자 하는 메서드는 아래에 따로 생성한다
    메서드(msg) { //msg 응원메시지 전달변수
        return `영화 ${this.제목}의 감독님 이름은 ${this.감독}, 나의 응원은 ${msg}`;
    }
} // class //

// 클래스는 함수와 달리 호이스팅이 불가하다!
// 만들고 호출해야지 위에서 호출하면 안됨

// 클래스의 데이터형은 뭐지?
// typeof 변수 -> 변수(객체,클래스)의 데이터형을 리턴함
console.log("클래스의 형은 뭐지? :", typeof MovieInfo);
// 클래스는 함수형이다!

document.write("<h1>JS5-5. JS 클래스</h1>")

// 클래스로 객체 만들기
const mi1 = new MovieInfo("이웃사촌", "드라마, 코미디", "이환경", "정우, 김희원", "이웃을 사랑합시다")

// 클래스를 new키워드로 생성한 것이 객체인지 확인!
console.log("mi1이 객체인지 확인: ", mi1);

// 만들어진 객체를 화면에 출력: 객체니까 for in 사용!
for (let x in mi1) { // x는 속성명
    document.write(`<h2>${x} : ${mi1[x]}</h2>`);
} //for in
// -> 생성자함수와 달리 클래스는 객체찍기에서 메서드가
// 별도로 관리되고 constructor로 생성된 속성만 찍힌다!

// 객체 메서드 호출!
document.write(`<h2>${mi1.메서드("굉장하네!")}</h2>`)

/////////////////////////////////////////////////
// 클래스를 이용한 객체를 하나 더 만들고 화면에 찍기!
document.write("<hr>");

// 클래스로 객체 만들기
const mi2 = new MovieInfo("늑대사냥", "액션", "김홍선", "서인국, 성동일", "태평양 한 가운데의 지옥, 누가 살아남을 것인가?");

// 만들어진 객체를 화면에 출력: 객체니까 for in 사용!
for (let x in mi2) {
    document.write(`<h2>${mi2[x]}</h2>`);
} // for in

// 객체 메서드 호출!
document.write(`<h2>${mi2.메서드("못봄")}</h2>`);

// 클래스 내보내기
export default MovieInfo
// 선언적 함수나 클래스는 뒤에 세미콜론이 없으므로
// 내보낼 때도 뒤에 세미콜론 쓰지말 것을 JS에서 권고함!