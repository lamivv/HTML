//whileloop 5에서 검색한 회원이름과 포인트를 document에 표의 형태로 출력
//검색회원 존재하지않습니다는 구현안해도됨
//새로 작성...

// 회원이름 포인트
// 김땅콩 80

let members= [];

members[0] = {name: "뽀뽀", point: 90};
members[1] = {name: "또또", point: 60};
members[2] = {name: "루루", point: 85};

let output = '';
output += '<table border="1">';
output += '<tbody>';
output += '<tr>';
output += '<th>회원 이름</th>'
output += '<th>보유 포인트</th>'
output += '</tr>';
let searchName = prompt("검색하려는 회원의 이름을 입력하시오-뽀뽀,또또,루루");
for(let i = 0; i < members.length; i++) {
  if (searchName==members[i].name) {
    // console.log(`검색하신 '${searchName}'회원님의 포인트는 '${members[i]['point']}점'입니다.`);
    output += '<tr>';
    output += `<td>${searchName}</td>`;
    output += `<td>${members[i]['point']}</td>`;
    output += '</tr>';
  } 
}
output+= '</body>';
output+= '</table>';
document.write(output);