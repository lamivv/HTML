// prompt 창을 띄워주는 기능을 실행하는 함수
// 사용자로부터 문자열 입력 값을 받는다
let anyVal = prompt("값을 입력하세요 : "); 
let anyVal2 = prompt("값을 입력하세요: ");

console.log(typeof anyVal);

// 문자열 타입을 숫자 타입으로 변환 
// p521
let result = Number(anyVal)+ parseInt(anyVal2);
console.log(`두 수의 합은 ${result} 입니다.`)