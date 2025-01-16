let numAry1 = [10, 20, 30];
let numAry2 = [40, 50, 60];
let numAry3 = [70, 80, 90];

// 기능의 정의. 배열 내의 숫자의 총 합을 구하는 함수
function arraySum(numAry=[]) { // numAry 매개변수 (매개 값이 들어올 자리)
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
  sum += numAry[i];
}
console.log(`배열 ${numAry}의 합계는 ${sum}입니다`);
} // end of arraySum()

arraySum(numAry1); // numAry1 매개 값 (배열속에 실제 값이 들어있는 변수)
arraySum(numAry2);
arraySum(numAry3);
