let sum = 0;

// 1~10까지 출력하는 반복문 선언
for (let i = 1; i <= 10; i++) {
  console.log(`현재 i의 값 : ${i}`);
  if (i % 2 == 1) {
   sum = sum + i;
  }
}
console.log(`1~10까지의 홀수합 ${sum}`);
console.log(`end of for`);