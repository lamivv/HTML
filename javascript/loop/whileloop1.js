// 1부터 10까지 출력
let i = 1;
while(i <= 10) {
  console.log(`현재 i의 값 ${i}`);
  i++;
}

// 랜덤값이 40미만의 값이 나오면 반복을 종료
while(true) {
  let temp = parseInt(Math.random()*100);
  console.log(temp);
  if (temp < 40) {
    break; // 반복문 종료1
  }
}

let run = true; // 반복문 종료 조건1
while(run) { // 반복문 종료 조건2
  let temp = parseInt(Math.random()*100);
  console.log(temp);
  if (temp < 40) {
    run = false; // 반복문 종료2
  }
}