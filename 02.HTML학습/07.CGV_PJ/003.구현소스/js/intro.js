// CGV 인트로 페이지 JS - intro.js

// 로딩구역
window.addEventListener("DOMContentLoaded", () => {


    // 동영상이 끝나면 메인 페이지로 이동하기 //

    // 대상: #myvid
    const myvid =
        document.getElementById("myvid");

    // 호출
    // console.log(myvid);

    // 이벤트 : timeupdate
    // -> 동영상이 재생 중일 때 발생하는 이벤트
    // -> HTML이벤트 속성명 : ontimeupdate
    myvid.ontimeupdate = () => {
        // 비디오가 멈췄는가? -> myvid.paused
        // paused 속성 : 
        // 비디오 멈춤상태면 true 아니면 false
        // console.log(myvid.paused);
        // 멈춤상태가 true일 때 페이지 이동하기
        if (myvid.paused)
            location.href = "../index.html";
        // location.hred = 이동주소
        // -> 페이지 이동함!
        
    }; // timeupdate


}); // 로딩구역