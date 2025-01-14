const obj = {
  name: "김땅콩",
  age: 20,
  // function 어떠한 기능을 수행하는 함수
  // 객체에 들어가 있는 함수를 메소드라고 한다
  showName: function () {
    console.log(obj.name);
  }
}
obj.showName();
// 임의의 1미만의 값을 반환한다
// 0 <= x < 1 값의 출력
console.log(Math.random());
// 1~10사이의 임의의 수를 출력
console.log(parseInt(Math.random() * 10) + 1);

let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;

let sumEven = 10; // 짝수의 값이 나오면 sumEven에 더하기
let sumOdd = 20; // 홀수의 값이 나오면 sumOdd에 더하기

// sumEven, SumOdd 출력
console.log(`* 짝수 값은 ${sumEven}에 더하고, 홀수값은 ${sumOdd}에 더한다 *`);
if (num1 % 2 == 0) {
  sumEven += num1;
} else {
  sumOdd += num1;
}

if (num2 % 2 == 0) {
  sumEven += num2;
} else {
  sumOdd += num2;
}

console.log(`num1 = ${num1}, num2 = ${num2}`)
console.log(`SumEven+짝수값 = ${sumEven}, SumOdd+홀수값 = ${sumOdd}`)
// truthy vs. falsy(0, "", null, undefined)
