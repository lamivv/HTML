// 세개의 수 : 1~100 까지의 임의의 값을 생성
// 세개의 수에서 가장 작은 수의 값을 출력
// 가장 작은 수가 홀수라면 홀수입니다 출력
// 가장 작은 수가 짝수라면 짝수입니다 출력


// 2개 랜덤값에서 
// 3의 배수인지 5의 배수인지 구분하고, 짝수이면 짝수입니다. 홀수이면 홀수입니다 출력 
console.log(`숙제1. 임의의 수 3개 중에서 가장 작은 수를 출력하고, 홀수인지 짝수인지 구분하시오.`);
let one = parseInt(Math.random() * 100 + 1);
let two = parseInt(Math.random() * 100 + 1);
let thr = parseInt(Math.random() * 100 + 1);
let Min;
console.log(`첫 번째 수 : ${one}`);
console.log(`두 번째 수 : ${two}`);
console.log(`세 번째 수 : ${thr}`);

if (one <= two) {
  if (one <= thr) {
    Min = one;
  } else {
    Min = thr;
  }
} else if (two < thr) {
  Min = two;
} else {
  Min = thr;
}

console.log(`가장 작은 수는 ${Min} 입니다.`);
if (Min % 2 == 0) {
  console.log(`가장 작은 수 ${Min} 은 짝수입니다.`);
} else {
  console.log(`가장 작은 수 ${Min} 은 홀수입니다.`);
}

console.log("");
console.log(`숙제2. 임의의 수 2개를 3의 배수인지 5의 배수인지 구분하고, 홀수인지 짝수인지 구분하시오.`);

let num1 = parseInt(Math.random() * 100 + 1);
console.log(`첫 번째 수 : ${num1}`);
let num1Even;

if (num1 % 2 == 0) {
  num1Even = "짝수"
} else {
  num1Even = "홀수"
}

if (num1 % 3 == 0 && num1 % 5 == 0) {
  console.log(`첫 번째 수 : ${num1} 는 3과 5의 배수이고, ${num1Even}입니다`);
} else if (num1 % 3 == 0) {
  console.log(`첫 번째 수 : ${num1} 는 3의 배수이고, ${num1Even}입니다`);
} else if (num1 % 5 == 0) {
  console.log(`첫 번째 수 : ${num1} 는 5의 배수이고, ${num1Even}입니다`);
} else {
  console.log(`첫 번째 수 : ${num1} 는 3과 5의 배수가 아니고, ${num1Even}입니다`);
}

let num2 = parseInt(Math.random() * 100 + 1);
console.log(`두 번째 수 : ${num2}`);
let num2Even;

if (num2 % 2 == 0) {
  num2Even = "짝수"
} else {
  num2Even = "홀수"
}

if (num2 % 3 == 0 && num2 % 5 == 0) {
  console.log(`첫 번째 수 : ${num2} 는 3과 5의 배수이고, ${num2Even}입니다`);
} else if (num2 % 3 == 0) {
  console.log(`첫 번째 수 : ${num2} 는 3의 배수이고, ${num2Even}입니다`);
} else if (num2 % 5 == 0) {
  console.log(`첫 번째 수 : ${num2} 는 5의 배수이고, ${num2Even}입니다`);
} else {
  console.log(`첫 번째 수 : ${num2} 는 3과 5의 배수가 아니고, ${num2Even}입니다`);
}