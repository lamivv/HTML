// 아이고 벌써 힘들ㄷ ㅏ

// 도서 회원의 정보를 담기 위한 배열
// member_id: "user01", member_name: "뽀뽀", point: 80
// member_id: "user02", member_name: "또또", point: 90
// member_id: "user03", member_name: "루루", point: 85
let members= [];

// 회원정보 오브젝트를 members 배열에 담기

// 방법1
// let member01 ={member_id: "user01", member_name: "뽀뽀", point: 80}
// let member02 ={member_id: "user02", member_name: "또또", point: 90}
// let member03 ={member_id: "user03", member_name: "루루", point: 85}
// members = [member01,member02,member03];

// 방법2
members[0] = {member_id: "user01", member_name: "뽀뽀", point: 80};
members[1] = {member_id: "user02", member_name: "또또", point: 90};
members[2] = {member_id: "user03", member_name: "루루", point: 85};

// console.log(members[0]['point']);

// // 가장 큰 포인트를 가지고 있는 회원 찾기
// let max = 0;
// let who = "";
// let id = "";
// for(let i = 0; i < members.length; i++) {
//   if (max < members[i]['point']) {
//     max = members[i]['point'];
//     who = members[i]['member_name'];
//     id = members[i]['member_id'];
//   }
// }
// console.log(`최고 포인트는 ${max}점으로 >${who}< 회원님입니다`);

let max = members[0];
for(let i = 0; i < members.length; i++) {
  if (max.point < members[i]['point']) { // 객체끼리 비교
    max = members[i];
  }
}
console.log(`최고 포인트는 ${max.point}점으로 >${max.member_name}< 회원님입니다`);