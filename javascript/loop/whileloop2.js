// stop 입력하면 반복문 종료
// 입력한 값중에서 가장 큰 값을 출력
// let inputValue = prompt("점수를 입력하세요 : ");
// let max = 0;
// let run = true;
// let inputValue = 0;
// while (run) {
//   inputValue = prompt("점수를 입력하세요 : ");
//   console.log(inputValue);
//   if
//     (max <= parseInt(inputValue)) {
//       max = parseInt(inputValue);
//     }
//   if (inputValue == "stop") {
//     run = false;
//   } 
// } // end of while
// console.log(`가장 큰 값은 ${max} 입니다.`);

let max = 0;
let run = true;
let inputValue = 0;
while (run) {
  inputValue = prompt("점수를 입력하세요 : ");
  console.log(inputValue);
  let type = (parseInt(inputValue));
  if (isNaN(type)) {
    if (inputValue == 'stop') {
      run = false;
    } else {
      console.log("숫자나 stop만 입력이 가능합니다.");
    }
  } else {
    if (max <= parseInt(inputValue)) {
      max = parseInt(inputValue);
    }
  }
} // end of while
console.log(`가장 큰 값은 ${max} 입니다.`);