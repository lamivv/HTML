// 입력받은 숫자 -> 2의 배수인지, 3의 배수인지 구분
// 2의 배수이기도 하고 3의 배수이기도 한 경우 2와 3의 배수입니다 출력
let input = (prompt("숫자를 입력하세요"));

// if (input == 0) {
// } else if (input % 2 == 0 && input % 3 == 0) {
//   console.log(`${input}은 2와 3의 배수입니다.`);
// } else if (input % 2 == 0) {
//   console.log(`${input}은 2의 배수입니다.`);
// } else if (input % 3 == 0) {
//   console.log(`${input}은 3의 배수입니다.`);
// }

// if (input == 0) {
//   console.log('다른 값을 입력하세요.');
// } else if (isNaN(input)) {
//   console.log('숫자값을 입력하세요.')
// } else { 
//   if (input % 2 == 0) {
//   if (input % 3 == 0) {
//     console.log(`${input}은 2와 3의 배수입니다.`);
//   } else {
//     console.log(`${input}은 2의 배수입니다.`);
//   } }else if (input % 3 == 0) {
//     console.log(`${input}은 3의 배수입니다.`);
//   }
// }

// if (input == 0 || isNaN(input)) {
//   console.log('정상적인 값을 입력하세요.')
// } else {
//   if (input % 2 == 0) {
//     if (input % 3 == 0) {
//       console.log(`${input}은 2와 3의 배수입니다.`);
//     } else {
//       console.log(`${input}은 2의 배수입니다.`);
//     }
//   } else if (input % 3 == 0) {
//     console.log(`${input}은 3의 배수입니다.`);
//   }
// }

if (input == 0 || isNaN(input)) {
  console.log('정상적인 값을 입력하세요.')
} else {
  if (input % 2 == 0 && input % 3 == 0) {
    console.log(`${input}은 2와 3의 배수입니다.`);
  } else if (input % 2 == 0) {
    console.log(`${input}은 2의 배수입니다.`);
  } else if (input % 3 == 0) {
    console.log(`${input}은 3의 배수입니다.`);
  }
}