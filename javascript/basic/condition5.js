// 두개의 수 : 1~100 까지의 임의의 값을 생성
// 큰 수에서 작은 수를 빼고 결과값을 출력

// let one = parseInt(Math.random()*100)+1;
// let two = parseInt(Math.random()*100)+1;

// console.log(`첫 번째 숫자는 ${one}이고, 두 번째 숫자는 ${two}이다.`);

// if (one>=two) {
//   console.log(`큰 숫자에서 작은 숫자를 뺀 값은${one-two}이다.`);
// } else {
//   console.log(`큰 숫자에서 작은 숫자를 뺀 값은 ${two-one}이다.`);
// }


// 세개의 수 : 1~100 까지의 임의의 값을 생성
// 가장 큰 수의 값을 출력
let one = parseInt(Math.random() * 100) + 1;
let two = parseInt(Math.random() * 100) + 1;
let thr = parseInt(Math.random() * 100) + 1;

console.log(`첫 번째 수는 ${one} 이다.`);
console.log(`두 번째 수는 ${two} 이다.`);
console.log(`세 번째 수는 ${thr} 이다.`);


if (one >= two) {
  if (one >= thr) {
    console.log(`가장 큰 숫자는 ${one} 이다.`);
  } else {
    console.log(`가장 큰 숫자는 ${thr} 이다.`);
  }
} else if (two > thr) {
  console.log(`가장 큰 숫자는 ${two} 이다.`);
} else {
  console.log(`가장 큰 숫자는 ${thr} 이다.`)
}