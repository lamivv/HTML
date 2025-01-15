let members= [];

members[0] = {member_id: "user01", member_name: "뽀뽀", point: 80};
members[1] = {member_id: "user02", member_name: "또또", point: 90};
members[2] = {member_id: "user03", member_name: "루루", point: 85};

// let searchName = prompt("검색하려는 회원의 이름을 입력하시오");
// for(let i = 0; i < members.length; i++) {
//   // 배열의 member_name속성 중에서 searchName과 같으면 포인트를 출력
//   if (searchName==members[i].member_name) {
//     console.log(`검색하신 '${searchName}'회원님의 포인트는 '${members[i]['point']}점'입니다.`);
//   } 
// }


// let stop = true;
// while (stop) {
//   let searchName = prompt("검색하려는 회원의 이름을 입력하시오");
//   if (searchName == 'stop') {
//     stop = false;
//   } else {
//     for (let i = 0; i < members.length; i++) {
//       // 배열의 member_name속성 중에서 searchName과 같으면 포인트를 출력 
//       if (searchName == members[i].member_name) {
//         console.log(`검색하신 '${searchName}'회원님의 포인트는 '${members[i]['point']}점'입니다.`);
//       } 
//     }
//   }
// }


let stop = true;
let exists = false; // 존재여부
while (stop) {
  exists = false; // 존재여부
  let searchName = prompt("검색하려는 회원의 이름을 입력하시오");
  if (searchName == 'stop') {
    stop = false;
    exists = true;
  }
  for (let i = 0; i < members.length; i++) {
    // 배열의 member_name속성 중에서 searchName과 같으면 포인트를 출력 
    if (searchName == members[i].member_name) {
      console.log(`검색하신 '${searchName}'회원님의 포인트는 '${members[i]['point']}점'입니다.`);
      exists = true;
      break;
    }
  }
  if (!exists) {
    alert("검색하신 회원은 존재하지 않습니다.");
  } 
}
// end of while
console.log('end of program');