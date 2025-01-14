// 변수 선언 : 이름, 연락처, 주소 선언
// console 출력
let myname = "김응아";
let tel = "010-1111-2222";
let addr = "대구 응가시 응가동";
console.log("이름 : "+myname);
console.log("연락처 : "+tel);
console.log("주소 : "+addr);
// ` (~)를 사용하면 더하기연산자를 사용하지않고도 문자열을 연결할 수 있다
// ${}에 연결해서 출력하고자 하는 변수를 입력한다
console.log(`주소는 ${addr} 입니다`);
myname = "김똥똥";
console.log(`이름 : ${myname}`);
const bloodType = "O"; // const 상수. 한 번 선언하면 값을 바꿀 수 없다
// bloodType = "A"; // 오류가 발생한다. 상수로 선언한 변수는 값을 바꿀 수 없다
// const 사용 예시 
const PI = 3.14;
console.log(`반지름 5인 원의 넓이는 ${5 * 5 * PI}`);

let largeNumber = 11111111111111111111111111111n;
console.log(largeNumber);

console.log(typeof myname); // 변수의 자료형을 출력
console.log(typeof largeNumber); 
console.log(typeof PI); 
console.log(typeof (PI==3)); 

let myInfo = {
  name : "홍땡땡",
  age : 20
};

console.log(typeof myInfo); 

let scores = [10, 20, 30]; // 배열
console.log(typeof scores); 

let specialType;
console.log(typeof specialType); 


let specialType2 = null; 
console.log(typeof null); 

