//아이고 피곤타~
// 2개의 숫자를 입력받음
// 2개의 숫자가 모두 짝수이면, "모두 짝수입니다" 출력
// 1개가 짝수이면, "하나는 짝수입니다" 출력
// 2개의 숫자가 모두 홀수이면 , "짝수는 없습니다" 출력

let one = prompt("첫 번째 숫자를 입력하세요");
let two = prompt("두 번째 숫자를 입력하세요");

if (one % 2 == 0 && two % 2 == 0) {
  console.log("모두 짝수입니다.");
} else if (one % 2 == 0 || two % 2 == 0) {
  console.log("하나는 짝수입니다.");
} else {
  console.log("짝수는 없습니다");
}