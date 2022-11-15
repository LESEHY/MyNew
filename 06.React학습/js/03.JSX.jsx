// 03. JSX.jsx

/************************************************************** 
    [ JSX란 무엇인가? ]
    - JavaScript XML을 나타냄
    - 리액트에서 HTML을 쉽게 작성할 수 있다.
    - appendChild() 메서드 없이 DOM에 요소넣기 가능하다!
***************************************************************/ 

// JSX를 사용한 것과 사용안한 것을 비교 //

// 1. JSX 사용한 예
// 넣을 요소
const myele1 = <h1>나는 JSX를 사용하고 있어!</h1>;
// 리액트 루트생성 : createRoot() 메서드 사용!
const root1 =  ReactDOM.createRoot(
    document.querySelectorAll("#root div")[0])
// 적용하기 : 생성된 루트에 render() 메서드를 붙여서 쓸 수 있다!
root1.render(myele1);

/****************************************************** 
    출력방식 처리
    1. 한꺼번에 쓰기
    ReactDOM.render(출력할요소,출력요소)

    2. 따로쓰기
    1) 변수 = ReactDOM.createRoot(출력요소)
    2) 변수.render(출력할요소)
******************************************************/

// 2. JSX를 사용하지 않한 예 //

// 넣을 요소를 createRoot() 메서드로 생성함(JSX 쓰지않고...)
const myele2 = 
    React.createElement("h1",{},"나는 JSX를 쓰지 않아!")
// createElement (요소명,{JS코드작성},요소내용)
// 리액트 루트생성하기! : createRoot() 메서드 사용!
const root2 = 
    ReactDOM.createRoot(document.querySelectorAll("#root div")[1]);
// 적용하기 : 생성된 루트에 render()메서드를 붙여서 쓸 수 있다!
root2.render(myele2);

/******************************************************** 
    위 두가지 방식

********************************************************/

let num1 = 1000;
let num2 = 7;

// 3. JSX 표현식 사용하기
const myele3 = <h1>리액트는 {num1*num2} 번 사용해도 좋다!</h1>
const root3 = ReactDOM.createRoot(
    document.querySelectorAll("#root div")[2]);
root3.render(myele3);
