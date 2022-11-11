// HTML 출력 JSX

// 변수에 태그를 JSX문법으로 작성하여 할당한다!
const myelement = (
    <table>
        <tr>
            <th>이름</th>
            <th>전화번호</th>
            <th>생일</th>
        </tr>
        <tr>
            <td>전소민</td>
            <td>010-2222-3333</td>
            <td>90.03.04</td>
        </tr>
        <tr>
            <td>김혁수</td>
            <td>010-1234-5678</td>
            <td>02.05.06</td>
        </tr>
        <tr>
            <td>이상화</td>
            <td>010-0000-1111</td>
            <td>00.07.08</td>
        </tr>
    </table>
);

// 화면출력
ReactDOM.render(myelement,document.getElementById(''));