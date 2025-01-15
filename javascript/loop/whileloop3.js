// object 타입

let myInfo = {
  name: "냥냥",
  age : 4,
  height: 20,
  weight: 3
}; // object 타입
console.log(myInfo);
console.log(`이름: ${myInfo.name}, 나이 : ${myInfo['age']}`);
console.log(`키: ${myInfo.height}, 몸무게 : ${myInfo['weight']}`);

// for..in 반복문
// myInfo에 들어있는 속성을 하나씩 prop라는 변수에 담아준다
for (let prop in myInfo) {
  console.log(prop);
}
for (let prop in myInfo) {
  console.log(`속성 :${prop}, 값 :${myInfo[prop]}`);
}

// for..of 반복문
// 배열에 있는 갯수만큼 반복한다
let nameAry =['홍길동','땅콩','치즈'];
for(let name of nameAry) {
  console.log(`값: ${name}`);
}

let myFriend1 = {
  name: "땅콩",
  phone: "010-1234-1234",
  address: "비산"
}
let myFriend2 = {
  name: "치즈",
  phone: "010-4321-4321",
  address: "만촌"
}
let myFriend3 = {
  name: "망고",
  phone: "010-1004-1004",
  address: "옆자리"
}

let friends = [myFriend1,myFriend2,myFriend3];
friends[3] = {name:"고양이", phone:"010-냥냥-야옹", address: "어디든지"}
console.log(friends[0].name);
console.log(friends[1]['phone']);
console.log(friends[2].address);

for(let i=0; i<friends.length; i++) {
  // 친구 이름과 연락처 출력
  console.log(`| 이름: ${friends[i].name} | 연락처: ${friends[i].phone} |`);
}
