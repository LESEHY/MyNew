// 보그 PJ 공통JS - common.js

// 제이쿼리 구역 길게쓰기도 있음
// $(document).ready(function(){})

$(() => {
    console.log("로딩완료");

    ////////// 스크롤 이벤트 구역 ///////
    // 이벤트명 : scroll
    // 이벤트 대상 : window
    // 변경대상 : #top
    const topA = $("#top");
    // 변경대상 : .tbtn
    const tbtn = $(".tbtn");
    // 스크롤위치변수
    let scTop;
    // 마지막 스크롤위치값
    let lastSc = 0;

    //////////////////////////////////////
    ///////// 스크롤 이벤트 함수 //////////
    $(window).scroll(() => {
        // 스크롤 위치값 (this는 window)
        scTop = $(this).scrollTop()
        // scrollTop() 메서드 
        // - 세로스크롤 위치값을 리턴하는 메서드
        // console.log(scTop);

        // 1. 슬림메뉴 클래스 on적용!
        // 기준위치는 스크롤위치 100px이상
        if (scTop >= 100) { // 100px 이상
            topA.addClass("on");
            // addClass(클래스명) - 클래스 넣기

            // 스크롤 방향에 따라 숨겼다보이는 .top값 변경
            if (scTop > lastSc) { // 숨기기
                // #top의 높이값(동적으로 높이값 설정)
                let temp = topA.innerHeight()
                // 스크롤 아랫방향
                topA.css({top:-temp+"px"});
                // console.log(temp);
                // height() - 패딩이 빠진 순수높이값
                // innerHeight() - 패딩포함 내부높이값
            } //if
            else { // 보이기
                // 스크롤 윗방향
                topA.css({top:"0"});
            } //else
        } // if 

        else { // 100px 미만
            topA.removeClass("on up");
            // removeClass(클래스명) = 클래스 지우기
            // 클래스명에 띄어쓰기로 복수의 클래스능적용가능
        } // else

        ///////////////////////////
        /// 스크롤 방향 알아내기 ///
        // if (scTop > lastSc) {
        //     console.log("아랫방향!");
        // } else {
        //     console.log("윗방향!");
        // }
        // 마지막위치 업데이트 필수!
        lastSc = scTop;

        // 2. TOP버튼 보이기/숨기기
        if(scTop >= 300){ // 300이상
            tbtn.addClass("on")
        } // if
        else{ // 300미만
            tbtn.removeClass("on")
        } // else
    }); // scroll 

    //// TOP 버튼 클릭 설정 ////
    tbtn.click(()=>{
        // 스크롤 최상단으로
        // 애니메이션 스크롤 이동
        // 전체 스크롤 이동의 대상은?
        // -> html,body 두 최상위 요소를
        // 대상으로 한다! 왜? 그래야 모든
        // 브라우저에서 공통으로 작동함!
        $("html,body").animate({
            scrollTop:"0"
        },800,"easeOutBounce"); // animate
        // scrollTop 속성은 제이쿼리 전용
        // 세로 스크롤 위치값을 셋팅할 수 있다!
        // 참고) 가로스크롤은 scrollLeft임!
    }); //click

}); //jQB